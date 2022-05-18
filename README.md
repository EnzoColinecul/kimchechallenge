# Desafío para Software Engineers
Nombre postulante: Enzo Colinecul
Link a la app en producción: https://enzocolinecul.github.io/kimchechallenge/

## Algunas decisiones que tome

En un primer momento iba a realizar la query cada vez que se intercambie entre Continente y Lenguaje, pero realizando un mejor análisis la mejor decisión era hacer la petición de datos apenas inicialice el programa, de forma tal que la query lanzada es 1 ya que la info no sufre mutaciones, solamente se ordena y agrupa internamente.
Con esta decisión mejora mucho el performance de la App.

## Respuesta a la pregunta abierta

Considerando que se utiliza MySql, propondria hacer una revision sobre las consultas a la BD y reducir los las consultas SELECT con "*" e indicar los campos especificos que se necesitan, tambien evitar la comparacion de campos textos ya que ralentizan las consultas (Ej: Operador LIKE).
