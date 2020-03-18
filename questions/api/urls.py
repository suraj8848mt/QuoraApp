from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (QuestionViewSet,
                    AnswerCreateAPIView,
                    AnswerListApiView,
                    AnswerRUDAPIView,
                    AnswerLikeAPIView
                    )


router = DefaultRouter()
router.register(r"questions", QuestionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('questions/<slug:slug>/answers/', AnswerListApiView.as_view(), name='answer-list'),
    path('questions/<slug:slug>/answer/', AnswerCreateAPIView.as_view(), name='answer-create'),
    path('answers/<int:pk>/like/', AnswerLikeAPIView.as_view(), name='answer-like'),

]