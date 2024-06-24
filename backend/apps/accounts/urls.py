from django.urls import path
from .views import RegisterView, LoginView, LogoutView, GetUsernameView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("get_username/", GetUsernameView.as_view(), name="get_username"),
]
