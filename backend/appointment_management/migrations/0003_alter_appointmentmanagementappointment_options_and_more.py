# Generated by Django 4.2.16 on 2024-09-26 08:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointment_management', '0002_alter_match_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='appointmentmanagementappointment',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='availability',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='djangomigrations',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='referee',
            options={'managed': True},
        ),
    ]