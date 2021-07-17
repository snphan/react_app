from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView
from . import forms
from django.contrib.auth import views as auth_views
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth import logout as auth_logout
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect

# Decorators needed for the dispatch Method
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect

# Create your views here.

class SignUp(SuccessMessageMixin, CreateView):
  form_class = forms.UserCreateForm
  success_url = reverse_lazy('accounts:login')
  template_name = 'accounts/signup.html'
  success_message = "Signed Up Successfully!"

class Login(SuccessMessageMixin, auth_views.LoginView):
  template_name = 'accounts/login.html'
  success_message = "Login Successfully!"

class LogOut(auth_views.LogoutView):
  
  def dispatch(self, request, *args, **kwargs):
    auth_logout(request)
    next_page = self.get_next_page()
    if next_page:
      messages.success(request, 'You have successfully logged out!')
      return HttpResponseRedirect(next_page)
    return super().dispatch(request, *args, **kwargs)