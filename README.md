# Transport Web - Landing Corporativa con Flask

Proyecto web para una empresa de transporte, inspirado en una interfaz corporativa moderna de logistica.

## Estructura

```text
transport_web/
|-- app.py
|-- requirements.txt
|-- static/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   `-- main.js
|   `-- img/
|-- templates/
|   |-- base.html
|   `-- index.html
`-- README.md
```

## Descripcion de archivos

- `app.py`: Punto de entrada del backend Flask con ruta principal `/`.
- `requirements.txt`: Dependencias Python del proyecto.
- `templates/base.html`: Plantilla base reutilizable (navbar, footer, assets y boton flotante).
- `templates/index.html`: Contenido de la landing page (hero, servicios, nosotros, contacto).
- `static/css/styles.css`: Estilos personalizados, responsive y animaciones.
- `static/js/main.js`: Interactividad en frontend (scroll suave, animaciones al aparecer, navbar dinamico).

## Requisitos

- Python 3.10+
- pip

## Instalacion y ejecucion

1. Crear entorno virtual (recomendado):
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```
2. Instalar dependencias:
   ```powershell
   pip install -r requirements.txt
   ```
3. Ejecutar aplicacion:
   ```powershell
   python app.py
   ```
4. Abrir en navegador:
   - http://127.0.0.1:5000

## Personalizacion rapida

- Cambia el numero de WhatsApp en:
  - `templates/base.html` (boton flotante)
  - `templates/index.html` (CTA de contacto)
- Reemplaza imagenes y branding en `static/img/`.
- Agrega nuevas paginas creando mas templates y rutas en `app.py`.

## Escalabilidad sugerida

Para crecer el proyecto en siguientes iteraciones:
- Migrar a estructura por blueprints (`routes/`, `services/`, etc.).
- Agregar formularios de contacto con validacion.
- Separar configuraciones por entorno (`config.py`).
