from django.shortcuts import render
from rest_framework import generics, authentication, permissions
from usuarios.serializers import Usuarioserializer
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

    
class CreateUserView(generics.CreateAPIView):
    serializer_class = Usuarioserializer
        
class RetreiveUpdateUserView(generics.RetrieveUpdateAPIView):
    serializer_class = Usuarioserializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user
    
#Serializador del tokenJWT
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
   