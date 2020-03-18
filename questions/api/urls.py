from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import QuestionViewSet, AnswerCreateAPIView, AnswerListApiView


router = DefaultRouter()
router.register(r"questions", QuestionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('questions/<slug:slug>/answers/', AnswerListApiView.as_view(), name='answer-list'),
    path('questions/<slug:slug>/answer/', AnswerCreateAPIView.as_view(), name='create-answer')
]