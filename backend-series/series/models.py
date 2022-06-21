from django.db import models


class Serie(models.Model):
    title = models.CharField(max_length=70, default='')
    network = models.CharField(max_length=50, default='')
    cast = models.CharField(max_length=200, default='')
    genre = models.CharField(max_length=50, default='')
    seasons = models.IntegerField(default='')
    episodes = models.IntegerField(default='')
    rating = models.DecimalField(max_digits=5, decimal_places=2, default='')
    photo = models.URLField(max_length=200, default='')
