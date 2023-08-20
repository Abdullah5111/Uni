from rest_framework import generics
from rest_framework.response import Response
from .models import User, Links
from .serializers import UserSerializer, LinksSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
class UserByUsernameView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

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
        
class LinksListCreateView(generics.ListCreateAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer

class LinksDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Links.objects.all()
    serializer_class = LinksSerializer

class LinksByUserIdView(generics.RetrieveAPIView):
    queryset = Links.objects.all()  # Your queryset for the Links model
    serializer_class = LinksSerializer

    def get_object(self):
        user_id = self.kwargs['user_id']  # Get the user_id from URL parameter
        links = get_object_or_404(Links, user_id=user_id)  # Query Links by user_id
        return links

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
