from .models import Task
from rest_framework import serializers

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["titulo", "descripcion", "prioridad", "estado", "fechaCreacion", "fechaLimite", "asignadoA", "asignadoPor", "puntos"]
    
    def crear(self, datos):
        