from rest_framework import generics
from rest_framework.response import Response
from .models import User, Links
from .serializers import UserSerializer, LinksSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

# All users get view
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# User with specific id CRUD
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

# Get user by name view    
class UserByUsernameView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

# User login view
class UserLoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('username')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
            if user.password == password:
                return Response({'id': user.id}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

# Get all links view        
class LinksListCreateView(generics.ListCreateAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer

# Specific link by id CRUD
class LinksDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer

# Get link by user id
class LinksByUserIdView(generics.RetrieveAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer

    def get_object(self):
        user_id = self.kwargs['user_id']
        links = get_object_or_404(Links, user_id=user_id)
        return links

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

# Get links by username
class LinksByUsernameView(generics.RetrieveAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer
    lookup_field = 'username'

    def get_object(self):
        username = self.kwargs['username']
        user = get_object_or_404(User, username=username)
        links = get_object_or_404(Links, user=user)
        return links

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
