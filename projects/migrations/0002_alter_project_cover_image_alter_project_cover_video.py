# Generated by Django 4.2.7 on 2024-01-08 03:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='cover_image',
            field=models.ImageField(blank=True, upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='cover_video',
            field=models.FileField(blank=True, upload_to='uploads/'),
        ),
    ]
