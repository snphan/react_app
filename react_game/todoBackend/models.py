from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Todo(models.Model):
  created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE,
                              related_name='todoitem') #User will only see the item that they have created.
  title = models.CharField(max_length=120)
  description = models.TextField()
  completed = models.BooleanField(default=False)

  def __str__(self):
    return self.title


