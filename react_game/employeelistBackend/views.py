from django.shortcuts import render
from rest_framework import viewsets #viewsets has all of the CRUD for API
from .serializers import EmployeeSerializer
from .models import Employee

# Create your views here.

class EmployeeView(viewsets.ModelViewSet):
  serializer_class = EmployeeSerializer
  queryset = Employee.objects.all()

