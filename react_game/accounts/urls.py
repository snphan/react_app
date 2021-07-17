from django.urls import path, include
from .views import SignUp, LogOut, Login
from django.contrib.auth import views as auth_views
app_name = 'accounts'

urlpatterns = [
  path('signup/', SignUp.as_view(), name='signup'),
  path('login/', Login.as_view(), name='login'),
  path('logout/', LogOut.as_view(), name='logout'),
]