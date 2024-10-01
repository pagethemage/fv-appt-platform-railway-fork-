from django.shortcuts import render
from rest_framework import generics
from .serializer import RefereeSerializer
from .models import Referee
# Create your views here.

class RefereeView(generics.ListAPIView):
    queryset = Referee.objects.all()
    serializer_class = RefereeSerializer
