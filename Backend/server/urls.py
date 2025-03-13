from django.urls import path
from . import views

urlpatterns = [
    #add url pattern here
    path('',views.index,name='index'),
]
