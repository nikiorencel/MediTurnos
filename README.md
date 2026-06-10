# MediTurnos - Sistema de gestión de turnos
## Descripción del proyecto
MediTurnos es una plataforma web diseñada para optimizar la gestión de turnos médicos e historias clínicas, permitiendo a los pacientes reservar consultas de forma sencilla y a los médicos acceder y actualizar la información clínica de sus pacientes desde un único sistema centralizado.
### Problemas que resuelve
 - **Gestión de turnos:** Centralizala reserva y administración de turnos médicos.
 - **Acceso a historias clínicas:** Permite consultar y actualizar la información de los pacientes.
 - **Organización de consultas:** Facilita el seguimiento de la agenda diaria de atención.
 - **Autogestión de pacientes:** Los pacientes pueden solicitar y consultar turnos de forma online.
## Perfiles de usuario
### Paciente
- Registrarse e iniciar sesión.
- Solicitar turnos.
- Ver sus turnos programados.
- Cancelar turno.
### Médico
- Registrarse e iniciar sesión.
- Ver turnos del día.
- Buscar pacientes por nombre.
- Consultar historias clínicas.
- Actualizar historias clínicas con observaciones y diagnósticos.
## Reglas de negocio
### Gestión de turnos
- Un paciente no puede reservar dos turnos en el mismo horario.
- Un médico no puede tener más de un turno asignado en el mismo horario.
- Los turnos solo pueden reservarse en horarios disponibles del médico.
- Un paciente puede cancelar el turno hasta el horario de la consulta.
- Los turnos puede tener los siguientes estados: confirmado, cancelado y realizado.
### Historias Clínicas
- Cada paciente posee una única historia clínica.
- Solo los médicos pueden agregar o modificar registros en una historia clínica.
- Los pacientes pueden consultar su propia historia clínica, pero no modificarla.
- Cada actualización de la historia clínica debe registrar fecha y médico responsable.
### Gestión de Pacientes
- Un paciente debe estar registrado para solicitar o ver sus turnos.
- Cada paciente debe tener un correo electrónico único.
- Los datos personales pueden ser actualizados únicamente por el propio paciente.
### Estados de Turno
- **Confirmado**: turno reservado y a la espera de la consulta.
- **Cancelado**: turno anulado por el paciente.
- **Realizado**: consulta efectuada y registrada en la historia clínica.
## Arquitectura del Proyecto
## Flujo de Datos
## Guía de Funcionalidades
## Configuración
## Tech Stack
## Ejecución
## Estructura de Datos
>>>>>>> 23e4db18b81ac0c8ed425b2cf09214d5f5cf875d
