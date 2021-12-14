from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

class UserCreateForm(UserCreationForm):

  class Meta:
    fields = ('first_name', 'last_name', 'username', 'email', 'password1', 'password2')
    model = get_user_model()

  def __init__(self, *args, **kwargs):
    # When defining the constructor we need to do super to initialize the constructor
    # of the parent class as well
    super().__init__(*args,**kwargs)
    # In the signup form, change the title of the user name and email
    self.fields['username'].label = 'Display Name'
    self.fields['email'].label = 'Email Address'
