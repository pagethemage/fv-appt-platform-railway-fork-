from django.contrib import admin
from appointment_management.models import Appointment, Referee, Club, Notification, Preference, Availability, Relative, Match, Venue

# Register your models here.

models = [Appointment, Referee, Club, Notification, Preference, Availability, Relative, Match, Venue]

for model in models:
    admin.site.register(model)

