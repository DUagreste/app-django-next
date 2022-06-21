from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from series.models import Serie
from series.serializers import SerieSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def serie_list(request):
    if request.method == 'GET':
        series = Serie.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            series = series.filter(title__icontains=title)
        series_serializer = SerieSerializer(series, many=True)
        return JsonResponse(series_serializer.data, safe=False)
    elif request.method == 'POST':
        serie_data = JSONParser().parse(request)
        serie_serializer = SerieSerializer(data=serie_data)
        if serie_serializer.is_valid():
            serie_serializer.save()
            return JsonResponse(serie_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Serie.objects.all().delete()
        return JsonResponse({'message': '{} Series were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def serie_detail(request, pk):
    # Find serie by pk (id)
    # GET / PUT / DELETE serie
    try:
        serie = Serie.objects.get(pk=pk)
        if request.method == 'GET':
            serie_serializer = SerieSerializer(serie)
            return JsonResponse(serie_serializer.data)
        elif request.method == 'PUT':
            serie_data = JSONParser().parse(request)
            serie_serializer = SerieSerializer(serie, data=serie_data)
            if serie_serializer.is_valid():
                serie_serializer.save()
                return JsonResponse(serie_serializer.data)
            return JsonResponse(serie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            serie.delete()
            return JsonResponse({'message': 'Serie was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    except Serie.DoesNotExist:
        return JsonResponse({'message': 'The serie does not exist'}, status=status.HTTP_404_NOT_FOUND)

    # GET / PUT / DELETE serie
