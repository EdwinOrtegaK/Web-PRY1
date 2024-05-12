import { useState, useEffect } from "react";
const API_URL = "https://api.tiburoncin.lat/22305/posts";

export function useApi() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'token') {
        setToken(localStorage.getItem('token'));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Obtener todas las publicaciones
  const getPosts = async () => {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`
      );
    }
    return response.json();
  };

  // Crear una nueva publicación
  const createPost = async (postData) => {
    const response = await fetch(`${API_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      localStorage.setItem("isAuth", false);
      localStorage.removeItem("token");
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`
      );
    }
    return response.json();
  };

  // Actualizar una publicación existente
  const updatePost = async (id, postData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      localStorage.setItem("isAuth", false);
      localStorage.removeItem("token");
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`
      );
    }
    return response.json();
  };

  // Eliminar una publicación
  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      localStorage.setItem("isAuth", false);
      localStorage.removeItem("token");
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`
      );
    }
    if (response.status === 204) {
      return;
    }
   if (response){
    return response.json();
   }
  };

  return { getPosts, createPost, updatePost, deletePost };
}
