import React, { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../endpoints/Api";
import "../index.css";
import "./CrudPage.css";

const CrudPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    pokemon_name: "",
    tipo_pokemon: "",
    grupo: "",
    cualidad: "",
    region: "",
    descripcion: "",
  });
  const [updateInfo, setUpdateInfo] = useState({
    id: "",
    title: "",
    content: "",
    pokemon_name: "",
    tipo_pokemon: "",
    grupo: "",
    cualidad: "",
    region: "",
    descripcion: "",
  });

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadPosts();
    fetchPosts();
  }, []);

  const handleCreatePost = async (newPostData) => {
    event.preventDefault();
    try {
      const createdData = await createPost(newPost);
      setPosts([...posts, createdData]);
      setNewPost({
        title: "",
        content: "",
        pokemon_name: "",
        tipo_pokemon: "",
        grupo: "",
        cualidad: "",
        region: "",
        descripcion: "",
      });
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleUpdatePost = async (id, updatedPostData) => {
    event.preventDefault();
    try {
      const updatedData = await updatePost(updateInfo.id, updateInfo);
      setPosts(
        posts.map((post) => (post.id === updatedData.id ? updatedData : post))
      );
    } catch (e) {
      console.error("Error al actualizar la publicación:", e);
    }
  };

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    setUpdateInfo({ ...updateInfo, [name]: value });
  };

  const handleDeletePost = async (event) => {
    event.preventDefault();
    if (!deleteId) {
      alert("Por favor ingresa el ID de la publicación que quieres eliminar.");
      return;
    }
    try {
      await deletePost(idToDelete);
      setPosts(posts.filter((post) => post.id !== idToDelete));
    } catch (error) {
        console.error('Error al eliminar la publicación:', error);
    } finally {
      setDeleteId("");
    }
  };

  // Función para eliminar una publicación directamente desde la lista
  const handleDeleteClick = async (id) => {
    if (
      window.confirm("¿Estás seguro de que deseas eliminar esta publicación?")
    ) {
      try {
        await deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) return <div className="blog-loader">Cargando...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="crud-page">
      <h1>Panel de Administración General</h1>
      <section>
        <h2>Crear Nueva Publicación</h2>
        <form onSubmit={handleCreatePost}>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Título"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Contenido"
            value={newPost.content}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="pokemon_name"
            placeholder="Nombre"
            value={newPost.pokemon_name}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="tipo_pokemon"
            placeholder="Tipo"
            value={newPost.tipo_pokemon}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="grupo"
            placeholder="Grupo"
            value={newPost.grupo}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="cualidad"
            placeholder="Cualidad"
            value={newPost.cualidad}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="region"
            placeholder="Region"
            value={newPost.region}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            value={newPost.descripcion}
            onChange={handleInputChange}
            required
          />
          <div className="form-button mt-3">
            <button id="submit" type="submit" className="btn btn-primary">
              Crear Publicación
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Actualizar Publicación</h2>
        <form onSubmit={handleUpdatePost}>
          <input
            className="form-control"
            type="text"
            name="id"
            placeholder="ID de la Publicación"
            value={updateInfo.id}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Título"
            value={updateInfo.title}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Contenido"
            value={updateInfo.content}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="pokemon_name"
            placeholder="Nombre"
            value={updateInfo.pokemon_name}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="tipo_pokemon"
            placeholder="Tipo"
            value={updateInfo.tipo_pokemon}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="grupo"
            placeholder="Grupo"
            value={updateInfo.grupo}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="cualidad"
            placeholder="Cualidad"
            value={updateInfo.cualidad}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="region"
            placeholder="Region"
            value={updateInfo.region}
            onChange={handleUpdateChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            value={updateInfo.descripcion}
            onChange={handleUpdateChange}
            required
          />
          <div className="form-button mt-3">
            <button id="submit" type="submit" className="btn btn-primary">
              Crear Publicación
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Eliminar Publicación</h2>
        <form onSubmit={handleDeletePost}>
          <input
            className="form-control"
            type="text"
            name="deleteId"
            placeholder="ID de la Publicación a Eliminar"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
          <div className="form-button mt-3">
            <button id="delete" type="submit" className="btn btn-danger">
              Eliminar Publicación
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Publicaciones Existentes</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>Contenido: {post.content}</p>
              <p>Nombre:{post.pokemon_name}</p>
              <p>Tipo: {post.tipo_pokemon}</p>
              <p>Grupo: {post.grupo}</p>
              <p>Cualidad: {post.cualidad}</p>
              <p>Región: {post.region}</p>
              <p>Descripción: {post.descripcion}</p>
              <button
                onClick={() => handleDeleteClick(post.id)}
                className="btn btn-primary"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CrudPage;
