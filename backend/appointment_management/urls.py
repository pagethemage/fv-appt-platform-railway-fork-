from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

app_name = "fv_appointment_platform"

router = DefaultRouter()
router.register(r'appointment', AppointmentViewSet)
router.register(r'availability', AvailabilityViewSet)
router.register(r'club', ClubViewSet)
router.register(r'match', MatchViewSet)
router.register(r'notification', NotificationViewSet)
router.register(r'referee', RefereeViewSet)
router.register(r'preference', PreferenceViewSet)
router.register(r'venue', VenueViewSet)
router.register(r'relative', RelativeViewSet)


