from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from tareas.views import createTask, detailTask

urlpatterns = [
    path('crear/', createTask.as_view()),
    path('modificarActulizar/', detailTask.as_view()),
    path('token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]