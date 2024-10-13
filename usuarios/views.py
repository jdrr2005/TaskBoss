from django.shortcuts import render
from rest_framework import generics, authentication, permissions
from usuarios.serializers import Usuarioserializer
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from usuarios.models import CustomUser

# Crea usuarios normales    
class CreateUserView(generics.CreateAPIView):
    serializer_class = Usuarioserializer
    permission_classes = [AllowAny]
    
    def perform_create(self, serializer):
        serializer.create(self.request.data)

# Crea al superUsiario
class CreateSuperUserView(generics.CreateAPIView):
    serializer_class = Usuarioserializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.createSuper(self.request.data)
        
 #Permite ver, modificar y borrar       
class RetreiveUpdateUserView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = Usuarioserializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user
    
#Serializador del tokenJWT
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
   