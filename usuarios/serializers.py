from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser
from usuarios.models import CustomUser

class Usuarioserializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'contrasena', 'nombre', 'apellido']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validate_data):
        return CustomUser.objects.create_user(**validate_data)
    
    def update(self, instance, validated_data):
        password = validated_data.pop('contrasena', None)
        user = super().update(instance, validated_data)
        
        if password:
            user.set_password(password)
            user.save()
        
        return user
