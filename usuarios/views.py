from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Usuarioserializer
from .models import usuario
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.
class VistaTarea(viewsets.ModelViewSet):
    serializer_class = Usuarioserializer
    queryset = usuario.objects.all()
    
    
   