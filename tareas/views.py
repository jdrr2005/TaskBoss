from django.shortcuts import render
from rest_framework import viewsets
from .serializer import Tareaserializer
from .models import tarea

# Create your views here.
class VistaTarea(viewsets.ModelViewSet):
    serializer_class = Tareaserializer
    queryset = tarea.objects.all()

