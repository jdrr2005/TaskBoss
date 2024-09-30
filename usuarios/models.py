from django.db import models
from django.core.validators import EmailValidator
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from argon2 import PasswordHasher
ph = PasswordHasher()

# Create your models here.

class usuario(models.Model):

    ROL_CHOICES = [
        ('Jefe', 'Jefe'),
        ('Empleado', 'Empleado'),
    ]
    IDus = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    Correo = models.EmailField(max_length=100, validators=[EmailValidator()])
    contrasena = models.CharField(max_length=128)
    estado = models.CharField(max_length=10, choices=[('activo', 'Activo'),('inactivo', 'Inactivo'),],
        default='pendiente')
    rol_us = models.CharField(max_length=10, choices=ROL_CHOICES, default='Empleado')
    F_creac = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} {self.Correo} {self.rol_us}"
    
    def save(self, *args, **kwargs):
        self.contrasena = make_password(self.contrasena)
        super().save(*args, **kwargs)
