from rest_framework import serializers
from .models import tarea
from usuarios.models import usuario

class Tareaserializer(serializers.ModelSerializer):
    asignador = serializers.PrimaryKeyRelatedField(queryset=usuario.objects.all()) 
    asignado = serializers.PrimaryKeyRelatedField(queryset=usuario.objects.all())
    class Meta:
        model = tarea
        fields = ('IDtarea','titulo', 'descripcion','prioridad', 'estado', 'fecha_creacion', 'fecha_limite', 'asignador', 'asignado', 'puntos')