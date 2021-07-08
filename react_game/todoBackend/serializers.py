from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
  class Meta:
    # Specifies the model to work with and the fields to be converted to JSON.
    model = Todo
    fields = ('id', 'title', 'description', 'completed')


