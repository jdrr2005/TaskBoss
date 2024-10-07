from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from tareas.views import createTask, detailTask

urlpatterns = [
    path('create/', createTask.as_view()),
    path('UpdateModifyDestroy/<int:pk>', detailTask.as_view()),
]