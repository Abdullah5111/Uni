from rest_framework import serializers
from .models import User, Links

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        return User.objects.create(**validated_data)

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = '__all__'

    def create(self, validated_data):
        return Links.objects.create(**validated_data)

class LinksUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = '__all__'
