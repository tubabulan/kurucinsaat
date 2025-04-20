from flask import Flask # type: ignore
from flask_cors import CORS # type: ignore
from config import Config
from models import db
from routes import project_routes

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)

app.register_blueprint(project_routes, url_prefix="/api/projects")

# 🚀 Veritabanı tablolarını burada oluştur
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    print("Flask başlatılıyor...")
    app.run(debug=True)
