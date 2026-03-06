import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://seed-bank-five.vercel.app/", 
  credentials: true,
}));

app.use(express.json());

app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 30,
}));

app.post("/api/chatkit/session", async (req, res) => {
  try {
    const { deviceId } = req.body;
    if (!deviceId || typeof deviceId !== "string") {
      return res.status(400).json({
        error: "deviceId é obrigatório.",
      });
    }

    const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "OpenAI-Beta": "chatkit_beta=v1",
      },
      body: JSON.stringify({
        user: deviceId,
        workflow: {
          id: process.env.OPENAI_WORKFLOW_ID,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro ao criar sessão ChatKit:", data);

      return res.status(response.status).json({
        error: data?.error?.message || "Falha ao criar sessão ChatKit.",
      });
    }

    return res.json({
      client_secret: data.client_secret,
      session_id: data.id,
      expires_at: data.expires_at,
    });
  } catch (error) {
    console.error("Erro interno no endpoint /api/chatkit/session:", error);

    return res.status(500).json({
      error: "Erro interno do servidor.",
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});