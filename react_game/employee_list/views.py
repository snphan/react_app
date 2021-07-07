from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class EmployeeListView(TemplateView):
    template_name = 'employee_list/employee_list.html'