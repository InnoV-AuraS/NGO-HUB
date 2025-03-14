import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def login_form_handler(request):
    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # Process the form data
        print(f"Name: {username}, Password: {password}")

        return JsonResponse({'message': 'Form data received successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
