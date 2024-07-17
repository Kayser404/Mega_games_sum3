from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required

app_name = 'cart'

urlpatterns = [
    path('', login_required(views.cart_detail), name='cart_detail'),
    path('add/<int:product_id>/', login_required(views.cart_add), name='cart_add'),
    path('remove/<int:product_id>/', login_required(views.cart_remove), name='cart_remove'),
]
