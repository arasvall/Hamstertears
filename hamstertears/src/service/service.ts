export default function FetchOptions<T>(method: string, body: T) {
    return {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    }
} 