from django.shortcuts import render,HttpResponse
from datetime import datetime
from server.models import Signup
# Create your views here.
def home(request):
    return render(request, 'home.html')


def client_signup(request):
    return render(request, "client_signup.html")

    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        state = request.POST.get('state')
        city = request.POST.get('city')
        date = request.POST.get('date')
        signup = Signup(username=username, email =email, password=password, state=state, city=city, date=datetime.today())
        signup.save()
        message.success(request, "Signup Completed")

