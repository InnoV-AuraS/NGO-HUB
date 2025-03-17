from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(['GET'])
def fetch_data(request):
    picture_url = '../assets/profile_pic.jpg'
    name = 'Snehasis Das'
    location = 'Malda,West Bengal'
    type = 'client'
    about = 'I am the developer of this website'
    phone = '8250750402'
    email = 'snehasis779@gmail.com'
    data = {'picture_url': picture_url, 'name': name, 'location': location, 'type': type, 'about': about, 'phone': phone, 'email': email,}
    return JsonResponse(data)