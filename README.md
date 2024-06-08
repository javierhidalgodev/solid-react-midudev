# Principios SOLID en React

En este repositorio repaso los principios SOLID gracias al tutorial de Midudev en [Youtube](https://www.youtube.com/watch?v=jKdt-BnTTR0).


## Single Responsibility Principle

Cada función/modulo/componente debe hacer solamente **una cosa**. Para comprobar que un componente hace una sola cosa podemos:

- Dividir un componente muy complejo en pequeños componentes.
- Seperar el código que realmente no afecta a la responsabilidad principal del componente, por ejemplo en archivos de utilidades.
- Crear y encapsular en *custom hooks* las funciones.


## Open-closed Principle

Las entidades del software deben estar abiertas a la extensión, pero cerradas a la modificación. En relación a los componentes, estos deberían de tener una estructura de tal manera que pueda ser extendidos, sin necesidad de ser modificados en su interior.

Un botón puede representarse de muchas maneras; con o sin icono, a la derecha o a la izquierda, con o sin enlace... Al aplicar este principio queremos crear un elemento botón padre que pueda tener todas estas formas, pero sin que cambie su código. Esto se hará a partir de otros componentes que extiendan el componente padre.

## Liskov substitution Principle

Un objecto hijo, debe poder ser sustituido por el objeto padre sin que exista ningún problema, y la aplicación deje de funcionar.

## Interface segregation Principle

Los componentes no deben de recibir propiedades que no vayan a usar. Esto puede suceder al pasar a un componente un objeto entero, del cual solo va a usar una o unas pocas propiedades.

## Dependency Inversion Principle

Un componente no debe depender directamente de otro, sino que ambos deben depender de una abstracción.

Esto se logra, por ejemplo, mediante el uso de contextos, hooks o propiedades para inyectar dependencias externas, facilitando la reutilización y el testeo de los componentes.
