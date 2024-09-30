from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from usuarios.models import usuario

# Create your models here.
class tarea(models.Model):
    
    EstadoOP = [('p', 'Pendiente'),
        ('ep', 'En Proceso'),
        ('f', 'Finalizado'),]
    
    IDtarea = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=110)
    descripcion = models.TextField(blank=True)
    prioridad = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    estado = models.CharField(max_length=20, choices=EstadoOP, default='pendiente')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_limite = models.DateTimeField()
    asignador = models.ForeignKey(usuario, related_name='tareas_asignadas', on_delete=models.CASCADE)
    asignado = models.ForeignKey(usuario, on_delete=models.CASCADE, null=False)
    puntos = models.IntegerField() 
    
    def __str__(self):
        return f"Tarea {self.IDtarea}: {self.titulo}: {self.descripcion[:20]}: {self.fecha_limite}: {self.prioridad}: {self.puntos}"