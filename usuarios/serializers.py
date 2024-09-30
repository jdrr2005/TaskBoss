from rest_framework import serializers
from .models import usuario
from usuarios.models import usuario

class Usuarioserializer(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = "__all__"