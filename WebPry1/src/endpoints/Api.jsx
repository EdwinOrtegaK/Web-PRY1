const API_URL = "https://api.tiburoncin.lat/22305/posts";

// Obtener todas las publicaciones
export const getPosts = async () => {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    const errorText = await response.text(); // o response.json() si la respuesta es JSON
    throw new Error(
      `HTTP error! status: ${response.status}, body: ${errorText}`
    );
  }
  return response.json();
};

// Crear una nueva publicación
export const createPost = async (postData) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    const errorText = await response.text(); // o response.json() si la respuesta es JSON
    throw new Error(
      `HTTP error! status: ${response.status}, body: ${errorText}`
    );
  }
  return response.json();
};

// Actualizar una publicación existente
export const updatePost = async (id, postData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    const errorText = await response.text(); // o response.json() si la respuesta es JSON
    throw new Error(
      `HTTP error! status: ${response.status}, body: ${errorText}`
    );
  }
  return response.json();
};

// Eliminar una publicación
export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorText = await response.text(); // o response.json() si la respuesta es JSON
    throw new Error(
      `HTTP error! status: ${response.status}, body: ${errorText}`
    );
  }
  return response.json();
};
