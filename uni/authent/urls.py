from django.urls import path
from .views import UserListCreateView, UserDetailView, UserByUsernameView, UserLoginView

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('user/<int:pk>', UserDetailView.as_view(), name='user-detail'),
    path('user/username/<str:username>', UserByUsernameView.as_view(), name='user-by-username'),

    path('userLogin/', UserLoginView.as_view(), name='user-login'),
]