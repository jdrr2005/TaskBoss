from django.urls import path, include
from rest_framework import routers
from tareas import views

router = routers.DefaultRouter()
router.register(r'tareas', views.VistaTarea, 'Tareas')

urlpatterns = [
    path("api/tareas/", include(router.urls))
]

