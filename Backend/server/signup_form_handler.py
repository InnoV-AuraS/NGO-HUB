import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def signup_form_handler(request):
    try:
        data = json.loads(request.body)
        ngo = data.get('ngoname', False)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        state = data.get('state')
        city = data.get('city')

        # Process the form data
        if ngo == False:
            print(f"Username: {username} Email: {email} Password: {password} State: {state} City: {city}")
        else:
            print(f"Name: {ngo}, Username: {username} Email: {email} Password: {password} State: {state} City: {city}")

        return JsonResponse({'message': 'Form data received successfully'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
