from django.urls import path
from django.views import generic
from . import views

app_name = 'tic_tac_toe'

urlpatterns = [
    path('', views.TicTacToeView.as_view(), name='home'),
]