let BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
if (BACKEND_URL && !BACKEND_URL.startsWith("http")) {
  BACKEND_URL = BACKEND_URL.includes("localhost") ? `http://${BACKEND_URL}` : `https://${BACKEND_URL}`;
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  const localToken = localStorage.getItem("token");
  if (localToken) return localToken;
  
  // Fallback to cookie
  const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
  return match ? match[1] : null;
}

export function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

type ErrorResponse = { message?: string };

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    headers: {
      ...authHeaders(),
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  const data = (await res.json()) as T | ErrorResponse;

  if (!res.ok) {
    const message = (data as ErrorResponse).message;
    throw new Error(message || "Something went wrong");
  }

  return data as T;
}

export { BACKEND_URL };
