import React, { useEffect, useState } from "react";

function Projeler() {
  const [projectList, setProjectList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    status: "",
    image: ""
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/projects/")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Veri geldi:", data);
        setProjectList(data);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/api/projects/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Eklendi!");
        setFormData({
          title: "",
          description: "",
          location: "",
          status: "",
          image: ""
        });
        return fetch("http://127.0.0.1:5000/api/projects/");
      })
      .then((res) => res.json())
      .then((data) => setProjectList(data));
  };

  return (
    <div style={{ padding: "2rem" }}>
      { <h2>Projelerimiz</h2>
/*
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input type="text" name="title" placeholder="Başlık" value={formData.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Açıklama" value={formData.description} onChange={handleChange} />
        <input type="text" name="location" placeholder="Lokasyon" value={formData.location} onChange={handleChange} />
        <input type="text" name="status" placeholder="Durum" value={formData.status} onChange={handleChange} />
        <input type="text" name="image" placeholder="Resim URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Proje Ekle</button>
      </form>

      <div>
        {projectList.map((proj, i) => (
          <div key={i} style={{ border: "1px solid #ddd", marginBottom: "1rem", padding: "1rem" }}>
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Projeler;
