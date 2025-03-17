import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def donation_form_handler(request):
    try:
        data = json.loads(request.body)
        ngo = data.get('ngo-name')
        name = data.get('name')
        email = data.get('email')
        type = data.get('donation-type')
        message = data.get('message')

        # Process the form data
        print(f"NGO: {ngo}, Name: {name}, Email: {email}, Donation-Type: {type}, Message: {message}")

        return JsonResponse({'message': 'Form data received successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
