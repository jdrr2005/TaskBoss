from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from usuarios import views
#from usuarios.views import CustomTokenObtainPairSerializer

urlpatterns = [
    path('create/', views.CreateUserView.as_view()),
    path('user/', views.RetreiveUpdateUserView.as_view()),
    path('token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]