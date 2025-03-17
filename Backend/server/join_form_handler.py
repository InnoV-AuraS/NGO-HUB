import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def join_form_handler(request):
    try:
        data = json.loads(request.body)
        ngo = data.get('ngo-group')
        name = data.get('name')
        email = data.get('email')
        message = data.get('reason')

        # Process the form data
        print(f"NGO: {ngo}, Name: {name}, Email: {email}, Message: {message}")

        return JsonResponse({'message': 'Form data received successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
