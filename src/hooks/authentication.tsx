
export default async function Authentication() {
    const currentUser: string | undefined = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

    if (!currentUser) {
        return { result: false }
    }
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
        });

        const data = await response.json();
        if (data.result) {
            return data
        }
        if (data.statusCode === 401) {
            return { result: false }
        }
    } catch (error) {
        console.error("Erreur lors de la requête de connexion :", error);
        return { result: false }
    }
}
