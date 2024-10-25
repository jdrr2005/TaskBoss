from django.urls import path
from insignias import views

urlpatterns = [
    path('create/', views.createBadge.as_view()),
    path('UpdateModifyDestroy/<int:pk>', views.detailBadge.as_view()),
    path('createUB/', views.createUserBadge.as_view()),
    path('UpdateModifyDestroyUB/<int:pk>', views.detailUserBadge.as_view()),
    path('listUserBadge/', views.ListBadgeByAwarder.as_view()),
    path('listBadge/', views.listBadge.as_view()),
]
