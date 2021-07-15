"""react_game URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
from todoBackend.views import TodoView

# Routing registration for API
router = routers.DefaultRouter()
router.register(r'todos', TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="welcome.html"), name='home'),
    path('employee-list/', include('employee_list.urls')),
    path('tic-tac-toe/', include('tic_tac_toe.urls')),
    path('todo/', include('todo.urls')),
    path('api/', include(router.urls)),
    path('accounts/', include('accounts.urls')),
]
