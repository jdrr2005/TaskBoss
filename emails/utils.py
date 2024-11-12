from django.core.mail import send_mail
from django.conf import settings

def sendMailTask(title, assigned_to):
    asunto = f"Asignación de nueva tarea: {title}"
    mensaje = f"Hola, se te ha asignado una nueva tarea: {title}. Por favor, revisa la aplicación para más detalles."
    remitente = settings.EMAIL_HOST_USER

    # Envío de correo
    send_mail(
        asunto,
        mensaje,
        remitente,
        [assigned_to],
        fail_silently=False
    )