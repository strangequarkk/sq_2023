from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = "hello new command, shouldscrape my tutor page for reviews"

    def handle(self, *args, **options):
        try:
            print("hello scrape command")
            pass
        except:
            raise CommandError("Something went wrong")
