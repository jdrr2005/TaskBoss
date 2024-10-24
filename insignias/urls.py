from django.urls import path
from insignias.views import createBadge, detailBadge, createUserBadge, detailUserBadge, ListBadgeByAwarder

urlpatterns = [
    path('create/', createBadge.as_view()),
    path('UpdateModifyDestroy/', detailBadge.as_view()),
    path('createUB/', createUserBadge.as_view()),
    path('UpdateModifyDestroyUB/', detailUserBadge.as_view()),
    path('listUserBadge/', ListBadgeByAwarder.as_view()),
]
