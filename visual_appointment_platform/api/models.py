from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import datetime

# Create your models here.
class Referee(models.Model):
    name = models.CharField(max_length=50, default="", unique=False)
    date_of_birth = models.DateField()
    
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('0', 'Other'),
    ]

    gender = models.CharField(max_length=1, choices = GENDER_CHOICES)
    address = models.CharField(max_length=255)
    suburb = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)

    # Season field to store the year
    current_year = datetime.date.today().year
    season = models.IntegerField(
        validators = [MinValueValidator(1900), MaxValueValidator(current_year + 1)]
    )

    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

   