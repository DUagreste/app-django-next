from django.urls import re_path
from series import views

urlpatterns = [
    re_path(r'^api/series$', views.serie_list),
    re_path(r'^api/series/(?P<pk>[0-9]+)$', views.serie_detail),
]
