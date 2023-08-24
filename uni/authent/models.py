from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.username
    
class Links(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Links', default=1)
    linkedin = models.CharField(max_length=250, unique=True, blank=True, null=True)
    facebook = models.CharField(max_length=250, unique=True, blank=True, null=True)
    instagram = models.CharField(max_length=250, unique=True, blank=True, null=True)
    twitter = models.CharField(max_length=250, unique=True, blank=True, null=True)
    website = models.CharField(max_length=250, unique=True, blank=True, null=True)
    slack = models.CharField(max_length=250, unique=True, blank=True, null=True)
    reddit = models.CharField(max_length=250, unique=True, blank=True, null=True)
    behance = models.CharField(max_length=250, unique=True, blank=True, null=True)
    dribbble = models.CharField(max_length=250, unique=True, blank=True, null=True)
    fiverr = models.CharField(max_length=250, unique=True, blank=True, null=True)
    upwork = models.CharField(max_length=250, unique=True, blank=True, null=True)
    freelancer = models.CharField(max_length=250, unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return self.linkedin
