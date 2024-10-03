from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

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

#Modificacion al serilaizador jwt para tomar el nuestro modelo de usuario
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        #Campos adicionales para token
        token['email'] = user.email
        token['nombre'] = user.nombre
        token['apellido'] = user.apellido
        token['rol'] = user.rol
        
        return token
    
    # Sobreescribir para que funcione con tu modelo
    def validate(self, attrs):
         # Asegúrate de que el 'email' esté presente
        attrs['username'] = attrs.get('email')
        email = attrs.get("email")
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError("Se requieren tanto el email como la contraseña.")

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError("El usuario no existe.")

        if not user.check_password(password):
            raise serializers.ValidationError("La contraseña es incorrecta.")

        # Si la validación es exitosa, llama al método de superclase
        return super().validate(attrs)