from rest_framework import serializers
from series.models import Serie


class SerieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Serie
        fields = ('id',
                  'title',
                  'network',
                  'cast',
                  'genre',
                  'seasons',
                  'episodes',
                  'rating',
                  'photo')
