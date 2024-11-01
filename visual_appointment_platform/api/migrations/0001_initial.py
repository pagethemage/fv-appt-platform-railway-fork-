# Generated by Django 4.2.15 on 2024-09-02 01:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Referee",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="", max_length=50)),
                ("date_of_birth", models.DateField()),
                (
                    "gender",
                    models.CharField(
                        choices=[("M", "Male"), ("F", "Female"), ("0", "Other")],
                        max_length=1,
                    ),
                ),
                ("address", models.CharField(max_length=255)),
                ("suburb", models.CharField(max_length=100)),
                ("organization", models.CharField(max_length=100)),
                (
                    "season",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(1900),
                            django.core.validators.MaxValueValidator(2025),
                        ]
                    ),
                ),
                ("create_at", models.DateTimeField(auto_now_add=True)),
                ("update_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
