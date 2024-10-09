# Create your models here.
from django.db import models


# Create your models here.
    
class Bus(models.Model):
    bus_name = models.CharField(max_length=30)
    source = models.CharField(max_length=30)
    dest = models.CharField(max_length=30)
    nos = models.PositiveIntegerField()
    rem = models.PositiveIntegerField(default =0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.TimeField()



    def __str__(self):
        return self.bus_name


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField()
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.email


class Book(models.Model):
    BOOKED = 'B'
    CANCELLED = 'C'

    TICKET_STATUSES = ((BOOKED, 'Booked'),
                       (CANCELLED, 'Cancelled'),)
    email = models.EmailField()
    name = models.CharField(max_length=30)
    userid =models.DecimalField(decimal_places=0, max_digits=2)
    busid=models.DecimalField(decimal_places=0, max_digits=2)
    bus_name = models.CharField(max_length=30)
    source = models.CharField(max_length=30)
    dest = models.CharField(max_length=30)
    nos = models.PositiveIntegerField()
    rem = models.PositiveIntegerField(default = 0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.TimeField()


    status = models.CharField(choices=TICKET_STATUSES, default=BOOKED, max_length=2)

    def __str__(self):
        return self.email
