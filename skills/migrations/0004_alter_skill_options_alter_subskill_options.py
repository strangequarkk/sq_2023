# Generated by Django 4.2.7 on 2023-12-27 03:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0003_skill_display_order_subskill_display_order_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='skill',
            options={'ordering': ('display_order',)},
        ),
        migrations.AlterModelOptions(
            name='subskill',
            options={'ordering': ('display_order',)},
        ),
    ]