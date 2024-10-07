from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

# usuario admin

""" "nombre": "taskboss",
    "contrasena": "taskboss2024",
    "email": "taskboss@gmail.com",
    "apellido": SSJ  
"""

# usuario normal
"""
    "nombre": "Alfred",
    "contrasena": "1234",
    "email": "aldred@gmail.com",
    "apellido": "Feid"
"""

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuarios/', include('usuarios.urls')),
    path('tareas/', include('tareas.urls')),
    path('api/schema/', SpectacularAPIView.as_view(), name='api-schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='api-schema'), name='api-docs'),
]
