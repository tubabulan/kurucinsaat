from flask import Blueprint, request, jsonify # type: ignore
from models import db, Project
project_routes = Blueprint("project_routes", __name__)
@project_routes.route("/selam", methods=["GET"])
def selam_ver():
    return jsonify({"mesaj": "Merhaba frontend!"})

@project_routes.route("/", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    return jsonify([
        {
            "id": p.id,
            "title": p.title,
            "description": p.description,
            "location": p.location,
            "status": p.status,
            "image": p.image
        } for p in projects
    ])

@project_routes.route("/", methods=["POST"])
def add_project():
    data = request.get_json()
    project = Project(
        title=data["title"],
        description=data["description"],
        location=data["location"],
        status=data["status"],
        image=data.get("image", "")
    )
    db.session.add(project)
    db.session.commit()
    return jsonify({"message": "Proje başarıyla eklendi!"}), 201
