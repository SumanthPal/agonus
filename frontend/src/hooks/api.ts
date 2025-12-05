//stored shared API logic

export const API_URL = 'https://puppyish-unjubilantly-jennine.ngrok-free.dev'
export function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}
