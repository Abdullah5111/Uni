# Generated by Django 4.2.4 on 2023-08-15 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authent', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Links',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linkedin', models.CharField(max_length=250, unique=True)),
                ('facebook', models.CharField(max_length=250, unique=True)),
                ('instagram', models.CharField(max_length=250, unique=True)),
                ('twitter', models.CharField(max_length=250, unique=True)),
                ('website', models.CharField(max_length=250, unique=True)),
                ('slack', models.CharField(max_length=250, unique=True)),
                ('reddit', models.CharField(max_length=250, unique=True)),
                ('behance', models.CharField(max_length=250, unique=True)),
                ('dribbble', models.CharField(max_length=250, unique=True)),
                ('fiverr', models.CharField(max_length=250, unique=True)),
                ('upwork', models.CharField(max_length=250, unique=True)),
                ('freelancer', models.CharField(max_length=250, unique=True)),
            ],
        ),
    ]
