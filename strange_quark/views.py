import hmac
from hashlib import sha1

from django.conf import settings
from django.http import HttpResponse, HttpResponseForbidden, HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.utils.encoding import force_bytes

import requests
from ipaddress import ip_address, ip_network


@require_POST
@csrf_exempt
def gitWebHook(request):

    # Ensure that request is coming from github webhook ip address
    forwarded_for = "{}".format(request.META.get("HTTP_X_FORWARDED_FOR"))
    client_ip_address = ip_address(forwarded_for)
    whitelist = requests.get("https://api.github.com/meta").json()["hooks"]

    for valid_ip in whitelist:
        if client_ip_address in ip_network(valid_ip):
            break
    else:
        return HttpResponseForbidden("Permission denied")

    # Verify request signature
    header_signature = request.META.get("HTTP_X_HUB_SIGNATURE")
    if header_signature is None:
        return HttpResponseForbidden("Permission denied.")

    sha_name, signature = header_signature.split("=")
    if sha_name != "sha1":
        return HttpResponseServerError("Operation not supported.", status=501)

    mac = hmac.new(
        force_bytes(settings.GITHUB_WEBHOOK_KEY),
        msg=force_bytes(request.body),
        digestmod=sha1,
    )
    if not hmac.compare_digest(mac.hexdigest(), force_bytes(signature)):
        return HttpResponseForbidden("Permission denied.")

    # Process GitHub events
    event = request.META.get("HTTP_X_GITHUB_EVENT", "ping")

    if event == "ping":
        return HttpResponse("pong")
    elif event == "push":
        return HttpResponse("success")

    return HttpResponse(status=204)
