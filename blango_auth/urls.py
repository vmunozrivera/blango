"""auth URL Configuration"""

# Django
from django.urls import path, include
from . import views

# Registration
from django_registration.backends.activation.views import RegistrationView
from blango_auth.forms import BlangoRegistrationForm

urlpatterns = [
    path('', include("django.contrib.auth.urls")),
    path('', include("allauth.urls")),
    path('register/', include("django_registration.backends.activation.urls")),
    path('profile/', views.profile, name="profile"),
    path(
        'register/', 
        RegistrationView.as_view(form_class=BlangoRegistrationForm),
        name="django_registration_register"),
]
