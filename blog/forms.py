
# Django
from django import forms

# Models
from blog.models import Comment

# Crispy Form
from crispy_forms.layout import Submit
from crispy_forms.helper import FormHelper


class CommentForm(forms.ModelForm):

  def __init__(self, *args, **kwargs):
    super(CommentForm, self).__init__(*args, **kwargs)
    self.helper = FormHelper()

    self.helper = FormHelper()
    self.helper.add_input(Submit('submit', 'Submit'))

  class Meta:
    model = Comment
    fields = ["content"]

  