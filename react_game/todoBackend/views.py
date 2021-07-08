from django.shortcuts import render
from rest_framework import viewsets #viewsets has all of the CRUD for API
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

class TodoView(viewsets.ModelViewSet):
  serializer_class = TodoSerializer
  queryset = Todo.objects.all()

