from rest_framework import serializers
from .models import Referee

class RefereeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Referee
        fiels = ('name', 'date_of_birth', 'gender', 'address', 'suburb', 
                    'organization', 'season', 'create_at', 'update_at')