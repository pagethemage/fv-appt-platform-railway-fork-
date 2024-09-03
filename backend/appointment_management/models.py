from django.db import models

# Create your models here.
class Appointment(models.Model):
    type = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.type} on {self.date} at {self.time}"