const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export function getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("authToken");
}

export function authHeaders(): Record<string, string> {
    const token = getToken();
    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}

export async function apiFetch<T = any>(
    path: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(`${BACKEND_URL}${path}`, {
        ...options,
        headers: {
            ...authHeaders(),
            ...(options.headers || {}),
        },
        credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data as T;
}

export { BACKEND_URL };
