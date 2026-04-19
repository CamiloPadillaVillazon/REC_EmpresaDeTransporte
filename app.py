from flask import Flask, render_template


def create_app() -> Flask:
    """Application factory to keep the project scalable."""
    app = Flask(__name__)

    @app.route("/")
    def index():
        """Render the landing page."""
        return render_template("index.html")

    @app.route("/nosotros")
    def nosotros():
        """Página de nosotros detallada."""
        return render_template("nosotros.html")

    @app.route("/servicios")
    def servicios():
        """Página de servicios detallada."""
        return render_template("servicios.html")

    @app.route("/asesoramiento")
    def asesoramiento():
        """Página de asesoramiento."""
        return render_template("asesoramiento.html")

    return app


app = create_app()

import os

# Configuración recomendada para producción en Render (servir archivos estáticos con WhiteNoise)
try:
    from whitenoise import WhiteNoise
    static_path = os.path.join(os.path.dirname(__file__), 'static')
    app.wsgi_app = WhiteNoise(app.wsgi_app, root=static_path, prefix='static/')
except ImportError:
    pass

if __name__ == "__main__":
    from waitress import serve
    
    print("🚀 Iniciando servidor de produccion local en http://127.0.0.1:8080")
    serve(app, host="127.0.0.1", port=8080)
