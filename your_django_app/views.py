
# Add to your views.py

from django.shortcuts import render

# ... keep existing code (if any)

def react_app(request):
    """
    View function to serve the React app
    """
    return render(request, 'index.html')
