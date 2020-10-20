from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser

from .models import CustomUser
from .serializers import UserSerializer


class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
