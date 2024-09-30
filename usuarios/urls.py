from django.urls import path, include
from rest_framework import routers
from usuarios import views

router = routers.DefaultRouter()
router.register(r'usuarios', views.VistaTarea, 'Usuarios')

urlpatterns = [
    path("api/usuarios/", include(router.urls))
]