from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(['GET'])
def fetch_contact(request):
    phone = '8250750402'
    email = 'snehasis779@gmail.com'
    data = {'phone': phone, 'email': email}
    return JsonResponse(data)