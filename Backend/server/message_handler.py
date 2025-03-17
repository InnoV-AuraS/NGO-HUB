import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Message

@require_http_methods(["POST"])
def message_handler(request):
    try:
        data = json.loads(request.body)
        message = data.get('msg')

        # Process the data
        print(f"Message: {message}")

        return JsonResponse({'message': 'Form data received successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)