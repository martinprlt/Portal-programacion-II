# 🧪 Ejemplo Avanzado – POO Completa en Python

Este archivo demuestra los pilares de la Programación Orientada a Objetos:

- **Abstracción**  
- **Encapsulamiento**  
- **Herencia**  
- **Polimorfismo**

---

## 1. Clase base: Usuario
Incluye encapsulamiento mediante atributos privados, getters y setters.

```python
class Usuario:
    def __init__(self, nombre, apellido, email):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__email = email
    
    # Getters
    def get_nombre(self):
        return self.__nombre
    
    def get_apellido(self):
        return self.__apellido

    # Setters
    def set_email(self, nuevo_email):
        if "@" in nuevo_email:
            self.__email = nuevo_email
        else:
            print("Email inválido.")

    # Mostrar info (polimorfismo base)
    def mostrar_info(self):
        print(f"Usuario: {self.__nombre} {self.__apellido} - {self.__email}")
