# Acortador de URL - Frontend

Este es el frontend de la aplicación Acortador de URL, diseñado para permitir a los usuarios acortar y recuperar URLs de forma sencilla. Cuando un usuario ingresa una URL, esta aplicación la acorta y, posteriormente, permite la recuperación de la URL original.

## Funcionalidad

1. **Acortar URL**: El usuario ingresa una URL en el campo correspondiente, y la aplicación genera una versión corta.
2. **Recuperar URL original**: Al hacer clic en la URL corta generada, se recupera la URL original y se muestra un botón que permite redirigir al sitio web original.

## Tecnologías Utilizadas

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular logo" width="20" height="20"/> Angular 18
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap logo" width="20" height="20"/> Bootstrap - para el diseño responsivo
- <img src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png" alt="RXJS logo" width="20" height="20"/> RXJS - para manejar las operaciones asincrónicas y la programación reactiva

## Prerrequisitos

Asegúrate de tener instalados los siguientes elementos en tu sistema:

- **Node.js** (v14 o superior)
- **Angular CLI** (v18 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/mbr100/acortadorUrlFrontEnd.git
    ```
2. Navega al directorio del proyecto:
    ```bash
   cd acortadorUrlFrontEnd
    ```
3. Instala las dependencias:
    ```bash
   npm install
    ```

## Ejecución
Para ejecutar el proyecto en un entorno de desarrollo:
```bash
ng serve
```

Accede a la aplicación en tu navegador a través de http://localhost:4200.

## Enlace al Backend
Este proyecto requiere un backend en Spring Boot para funcionar correctamente. Puedes encontrar el backend del proyecto [aquí](https://github.com/mbr100/acortadorUrlBackEnd).

## Contribuciones
Las contribuciones son bienvenidas. Para contribuir:

- Haz un fork del proyecto.
- Crea una rama para tu función (feature/nueva-funcion).
- Realiza un pull request con una descripción clara de tu contribución.

## Licencia
Este proyecto está licenciado bajo la Licencia Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0). Puedes usar, modificar y distribuir el código para fines no comerciales siempre que otorgues el crédito correspondiente a su autor, Mario Borrego. Para cualquier uso comercial de este software, por favor, contacta previamente con el autor.

Para más detalles, visita: CC BY-NC 4.0.

<div style="margin-top: 20px;">
    <div class="footer" style="text-align: center;">
        &copy; 2024 Mario Borrego
    </div>
</div>
