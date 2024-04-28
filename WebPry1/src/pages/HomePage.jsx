import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../index.css";

// Componentes
const Header = () => {
  return <header className="blog-header">BLOG POKEMON</header>;
};

const Footer = () => {
  return <footer className="blog-footer">Copyright 2024 UVG - Edwin Ortega Kou</footer>;
};

const Post = ({
  title,
  content,
  pokemon_name,
  tipo_pokemon,
  grupo,
  cualidad,
  region,
  descripcion,
}) => {
  return (
    <div className="blog-post">
      <div className="blog-img-ball">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
          alt={pokemon_name}
        />
      </div>
      <div className="blog-cards">
        <h1>{title}</h1>
        <p>Contenido: {content}</p>
        <p>Nombre: {pokemon_name}</p>
        <p>Tipo: {tipo_pokemon}</p>
        <p>Grupo: {grupo}</p>
        <p>Cualidad: {cualidad}</p>
        <p>Región: {region}</p>
        <p>Descripción: {descripcion}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pokemon_name: PropTypes.string.isRequired,
  tipo_pokemon: PropTypes.string.isRequired,
  grupo: PropTypes.string.isRequired,
  cualidad: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      const apiResponse = await fetch("https://api.tiburoncin.lat/22305/posts");

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`); // Lanza un error si la respuesta no es exitosa
      }

      const jsonPosts = await apiResponse.json();

      if (!Array.isArray(jsonPosts)) {
        // Verifica si jsonPosts es un arreglo
        throw new Error("Formato de datos incorrecto"); // Lanza un error si no lo es
      }

      const formattedPosts = jsonPosts.map(
        ({
          title,
          content,
          pokemon_name,
          tipo_pokemon,
          grupo,
          cualidad,
          region,
          descripcion,
        }) => ({
          title,
          content,
          pokemon_name,
          tipo_pokemon,
          grupo,
          cualidad,
          region,
          descripcion,
        })
      );

      setPosts(formattedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="blog-error-message">Error: {error}</div>;
  }

  if (posts.length === 0 && !loading) {
    return <EmptyState />;
  }

  return (
    <div className="blog-posts-container">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          pokemon_name={post.pokemon_name}
          tipo_pokemon={post.tipo_pokemon}
          grupo={post.grupo}
          cualidad={post.cualidad}
          region={post.region}
          descripcion={post.descripcion}
        />
      ))}
    </div>
  );
};

const Loading = () => {
  return <div className="blog-loader">Cargando...</div>;
};

const EmptyState = () => {
  return (
    <div className="blog-empty-state">
      <h2>No hay posts para mostrar</h2>
      <p>Parece que no hay contenido en este momento. ¡Regresa más tarde!</p>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png"
        alt="No hay posts disponibles"
      />
    </div>
  );
};

// Componente principal
const HomePage = () => {
  return (
    <>
      <Header />
      <main className="blog-main">
        <Posts />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;