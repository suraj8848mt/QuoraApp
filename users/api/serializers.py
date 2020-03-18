from rest_framework import serializers
from users.models import CustomUser


class UserDisplaySerializer(serializers.Serializer):

    class Meta:
        model = CustomUser
        fields = ["username"]
