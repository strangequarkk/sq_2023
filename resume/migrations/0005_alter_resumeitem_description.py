# Generated by Django 4.2.7 on 2024-05-01 02:54

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0004_alter_resumeitem_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumeitem',
            name='description',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
