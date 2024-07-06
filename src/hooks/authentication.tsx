
export default async function Authentication() {
    const currentUser: string | undefined = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

    if (!currentUser) {
        return false
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
            return true
        }
        if (data.statusCode === 401) {
            console.log(data)
            return false
        }
    } catch (error) {
        console.error("Erreur lors de la requête de connexion :", error);
        return false
    }
}
