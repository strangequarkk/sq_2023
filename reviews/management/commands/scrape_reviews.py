from django.core.management.base import BaseCommand, CommandError
import requests
from bs4 import BeautifulSoup
from ...models import Review

# import optparse

# parser = optparse.OptionParser()
# parser.add_option(
#     "-o",
#     "--operation",
#     type="string",
#     help="Choose whether to seed or clear reviews",
#     default="seed",
#     dest="op"
# )


def seed():
    try:
        url = "https://www.wyzant.com/Tutors/WA/Seattle/9513729"
        r = requests.get(url)
        soup = BeautifulSoup(r.content, "html5lib")

        table = soup.find("div", attrs={"class": "reviews-container"})
        for row in table.findAll("blockquote"):
            review = Review(
                title=row.h4.text,
                message=row.p.text,
                student=row.cite.text.split(",")[0],
                lessons=int(row.cite.text.split(" ")[1]),
            )
            print(review)
            review.save()
    except:
        raise CommandError("Seeding failed")


def clear_data():
    try:
        Review.objects.all().delete()
    except:
        raise CommandError("Data deletion failed")


class Command(BaseCommand):
    help = "scrape my tutor page for reviews"

    def handle(self, *args, **options):
        # options, args = parser.parse_args()
        try:
            seed()
        except:
            raise CommandError("Something went wrong")
