from django.db import models

# User model
class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.username

# Model to hold links   
class Links(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Links', default=1)
    Linkedin = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Facebook = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Instagram = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Twitter = models.CharField(max_length=250, unique=True, blank=True, null=True)   
    Slack = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Website = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Reddit = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Behance = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Dribbble = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Fiverr = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Upwork = models.CharField(max_length=250, unique=True, blank=True, null=True)
    Freelancer = models.CharField(max_length=250, unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return self.linkedin
