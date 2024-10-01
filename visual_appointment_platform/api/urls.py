from .views import RefereeView
from django.urls import path

urlpatterns = [
    path('home', RefereeView.as_view()),
]
