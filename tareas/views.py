from django.shortcuts import render
from rest_framework import generics, permissions
from tareas.serializers import taskSerializer
from tareas.models import Task
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

# Crear tareas
class createTask(generics.CreateAPIView):
    serializer_class = taskSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
# Ver, borrar y editar tareas 
class detailTask(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = taskSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]