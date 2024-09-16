from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import response
from .models import Appointment
from .models import Availability
from .models import Club
from .models import Match
from .models import Notification
from .models import Preference
from .models import Referee
from .models import Relative
from .models import Venue
from .models import AppointmentManagementAppointment
from .models import AuthGroup
from .models import AuthGroupPermissions
from .models import AuthPermission
from .models import AuthUser
from .models import AuthUserGroups
from .models import AuthUserUserPermissions
from .models import DjangoAdminLog
from .models import DjangoContentType
from .models import DjangoMigrations
from .models import DjangoSession
from .models import Sysdiagrams
from .serializers import AppointmentSerializer
from .serializers import AvailabilitySerializer
from .serializers import ClubSerializer
from .serializers import MatchSerializer
from .serializers import NotificationSerializer
from .serializers import PreferenceSerializer
from .serializers import RefereeSerializer
from .serializers import RelativeSerializer
from .serializers import VenueSerializer
from .serializers import AppointmentManagementAppointmentSerializer
from .serializers import AuthGroupSerializer
from .serializers import AuthGroupPermissionsSerializer
from .serializers import AuthPermissionSerializer
from .serializers import AuthUserSerializer
from .serializers import AuthUserGroupsSerializer
from .serializers import AuthUserUserPermissionsSerializer
from .serializers import DjangoAdminLogSerializer
from .serializers import DjangoContentTypeSerializer
from .serializers import DjangoMigrationsSerializer
from .serializers import DjangoSessionSerializer
from .serializers import SysdiagramsSerializer

# Create your views here.
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    # def list(self, request):
    #     serializer_class = AppointmentSerializer(self.queryset, many = True)
    #     return response(serializer_class.data)

class AvailabilityViewSet(viewsets.ModelViewSet):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class PreferenceViewSet(viewsets.ModelViewSet):
    queryset = Preference.objects.all()
    serializer_class = PreferenceSerializer

class RefereeViewSet(viewsets.ModelViewSet):
    queryset = Referee.objects.all()
    serializer_class = RefereeSerializer

class RelativeViewSet(viewsets.ModelViewSet):
    queryset = Relative.objects.all()
    serializer_class = RelativeSerializer

class VenueViewSet(viewsets.ModelViewSet):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer

class AppointmentManagementAppointmentViewSet(viewsets.ModelViewSet):
    queryset = AppointmentManagementAppointment.objects.all()
    serializer_class = AppointmentManagementAppointmentSerializer

class AuthGroupViewSet(viewsets.ModelViewSet):
    queryset = AuthGroup.objects.all()
    serializer_class = AuthGroupSerializer

class AuthGroupPermissionsViewSet(viewsets.ModelViewSet):
    queryset = AuthGroupPermissions.objects.all()
    serializer_class = AuthGroupPermissionsSerializer

class AuthPermissionViewSet(viewsets.ModelViewSet):
    queryset = AuthPermission.objects.all()
    serializer_class = AuthPermissionSerializer

class AuthUserViewSet(viewsets.ModelViewSet):
    queryset = AuthUser.objects.all()
    serializer_class = AuthUserSerializer

class AuthUserGroupsViewSet(viewsets.ModelViewSet):
    queryset = AuthUserGroups.objects.all()
    serializer_class = AuthUserGroupsSerializer

class AuthUserUserPermissionViewSet(viewsets.ModelViewSet):
    queryset = AuthUserUserPermissions.objects.all()
    serializer_class = AuthUserUserPermissionsSerializer

class DjangoAdminLogViewSet(viewsets.ModelViewSet):
    queryset = DjangoAdminLog.objects.all()
    serializer_class = DjangoAdminLogSerializer

class DjangoContentTypeViewSet(viewsets.ModelViewSet):
    queryset = DjangoContentType.objects.all()
    serializer_class = DjangoContentTypeSerializer

class DjangoMigrationsViewSet(viewsets.ModelViewSet):
    queryset = DjangoMigrations.objects.all()
    serializer_class = DjangoMigrationsSerializer

class DjangoSessionViewSet(viewsets.ModelViewSet):
    queryset = DjangoSession.objects.all()
    serializer_class = DjangoSessionSerializer

class SysdiagramsViewSet(viewsets.ModelViewSet):
    queryset = Sysdiagrams.objects.all()
    serializer_class = SysdiagramsSerializer