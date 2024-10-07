from django.shortcuts import render
from rest_framework import generics, permissions
from tareas.serializers import taskSerializer
from tareas.models import Task

# Crear tareas
class createTask(generics.CreateAPIView):
    serializer_class = taskSerializer
    authentication_classes = [permissions.IsAuthenticated]
    
# Ver, borrar y editar tareas 
class detailTask(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = taskSerializer
    permission_classes = [permissions.IsAuthenticated]