from .models import Task
from rest_framework import serializers

class taskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["title", "description", "priority", "status", "deadline", "assigned_to", "assigned_by", "points"]
    
    def crear(self, validated_data):
        return Task.objects.create(**validated_data)
    
    def update(self, validated_data):
        Task.title = validated_data.get('title', Task.title)
        Task.description = validated_data.get('description', Task.description)
        Task.priority = validated_data.get('priority', Task.priority)
        Task.status = validated_data.get('status', Task.status)
        Task.deadline = validated_data.get('deadline', Task.deadline)
        Task.assigned_to = validated_data.get('assigned_to', Task.assigned_to)
        Task.assigned_by = validated_data.get('assigned_by', Task.assigned_by)
        Task.points = validated_data.get('points', Task.points)
        
        # Guarda la instancia actualizada
        Task.save()
        return Task