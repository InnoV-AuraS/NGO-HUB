from django.urls import path
from django.contrib import admin
from server import views
urlpatterns = [
    #add url pattern here
    path("",views.home,name='home'),
    path("client_signup",views.client_signup,name='client_signup'),
]

''' 
    path("",views.index,name='index'),
    path("",views.index,name='index'),
    path("",views.index,name='index'),
    path("",views.index,name='index'),
]
'''