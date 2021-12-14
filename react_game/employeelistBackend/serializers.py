from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
  class Meta:
    # Specifies the model to work with and the fields to be converted to JSON.
    model = Employee
    fields = ('id', 'created_by', 'name', 'department','salary')


