from django.shortcuts import render
from rest_framework import generics
from insignias.serializers import badgeSerializer, userBadgeSerializer
from insignias.models import Badge, UserBadge
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication 

#Crear insignias
class createBadge(generics.CreateAPIView):
    serializer_class = badgeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# Ver, borrar y editar insignias por id
class detailBadge(generics.RetrieveUpdateDestroyAPIView):
    queryset = Badge.objects.all()
    serializer_class = badgeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
#--------------------------------------------------------
#Crear usuario-insignias
class createUserBadge(generics.CreateAPIView):
    serializer_class = userBadgeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# Ver, borrar y editar usuario-insignias por id
class detailUserBadge(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserBadge.objects.all()
    serializer_class = userBadgeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
# Listar usuario-insignias por portador
class ListBadgeByAwarder(generics.ListAPIView):
    serializer_class = userBadgeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = UserBadge.objects.all()

