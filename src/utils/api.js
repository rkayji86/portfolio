const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Contact Form API
export const sendContactForm = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (!response.ok) {
            if (data.errors) {
                throw new Error(data.errors.map(err => err.msg).join(", "));
            } else {
                throw new Error(data.message || "Something went wrong");
            }
        }

        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
