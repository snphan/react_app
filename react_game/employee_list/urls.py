from django.urls import path
from django.views import generic
from . import views

app_name = 'employee_list'

urlpatterns = [
    path('', views.EmployeeListView.as_view(), name='home'),
]