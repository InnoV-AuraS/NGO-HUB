from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def login_form_handler(request):
    data = request.json()
    username = data.get('username')
    password = data.get('password')

    # Process the form data
    print(f"Name: {username}, Password: {password}")

    return JsonResponse({'message': 'Form data received successfully'})
