
# Add to your existing Django settings.py

import os

# ... keep existing code

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend/dist'),  # or 'frontend/build' depending on your build output
]

# ... keep existing code
