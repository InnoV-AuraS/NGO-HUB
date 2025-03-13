from django.urls import path
from . import views,login_form_handler,signup_form_handler

urlpatterns = [
    #add url pattern here
    path('',views.index,name='index'),
    path('login_form_handler/',login_form_handler.login_form_handler,name='login_form_handler'),
    path('signup_form_handler/',signup_form_handler.signup_form_handler,name='signup_form_handler'),
]
