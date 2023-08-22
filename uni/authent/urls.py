from django.urls import path
from .views import UserListCreateView, UserDetailView, UserByUsernameView, UserLoginView, LinksDetailView, LinksListCreateView, LinksByUserIdView, LinksByUsernameView

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('user/<int:pk>', UserDetailView.as_view(), name='user-detail'),
    path('user/username/<str:username>', UserByUsernameView.as_view(), name='user-by-username'),

    path('userLogin/', UserLoginView.as_view(), name='user-login'),

    path('links/', LinksListCreateView.as_view(), name='links-list-create'),
    path('links/<int:pk>', LinksDetailView.as_view(), name='links-detail'),

    path('user/links/<int:user_id>/', LinksByUserIdView.as_view(), name='links-by-user-id'),
    path('user/links/<str:username>/', LinksByUsernameView.as_view(), name='links-by-username'),
]