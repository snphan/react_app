from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class TicTacToeView(TemplateView):
    template_name = 'tic_tac_toe/tictactoe.html'


