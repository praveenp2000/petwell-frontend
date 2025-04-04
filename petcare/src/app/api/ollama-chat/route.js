export async function POST(req) {
    try {
        const { message } = await req.json();

        const response = await fetch("http://127.0.0.1:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3",        // Make sure this is the model you're running
                prompt: message,        // User message
                stream: false           // Stream false for simpler parsing
            }),
        });

        const data = await response.json();
        console.log('resp', data)

        return Response.json({ response: data.response });
    } catch (error) {
        console.error("Ollama API error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
