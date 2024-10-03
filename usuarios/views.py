from django.shortcuts import render
from rest_framework import generics, authentication, permissions
from usuarios.serializers import Usuarioserializer
from .models import CustomUser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.
"""class VistaTarea(viewsets.ModelViewSet):
    serializer_class = Usuarioserializer
    queryset = CustomUser.objects.all()"""
    
class CreateUserView(generics.CreateAPIView):
    serializer_class = Usuarioserializer

"""class  ListUserViews(generics.ListAPIView):
    serializer_class = UserSerializers
    
    def get_queryset(self):
        return CustomUser.objects.all()"""
        
class RetreiveUpdateUserView(generics.RetrieveUpdateAPIView):
    serializer_class = Usuarioserializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user
    
    
   