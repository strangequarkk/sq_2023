# Generated by Django 4.2.7 on 2024-05-01 02:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0002_alter_resumeitem_end_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumeitem',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
