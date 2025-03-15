from django.urls import path
from . import views,login_form_handler,signup_form_handler,donation_form_handler,profile_data_handler,fund_form_handler

urlpatterns = [
    #add url pattern here
    path('',views.index,name='index'),
    path('login_form_handler/',login_form_handler.login_form_handler,name='login_form_handler'),
    path('signup_form_handler/',signup_form_handler.signup_form_handler,name='signup_form_handler'),
    path('donation_form_handler/',donation_form_handler.donation_form_handler,name='donation_form_handler'),
    path('fetch_data/',profile_data_handler.fetch_data,name='fetch_data'),
    path('fund_form_handler/',fund_form_handler.fund_form_handler,name='fund_form_handler'),
]
