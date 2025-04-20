from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

class Project(db.Model):
    __tablename__ = "project"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    location = db.Column(db.String(100))
    status = db.Column(db.String(50))
    image = db.Column(db.String(200))
