from django.db import models

# Create your models here.
class Signup(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    state = models.CharField(max_length=120)
    city = models.CharField(max_length=120)
    date = models.DateField()
    def __str__(self):
            return self.name + self.email