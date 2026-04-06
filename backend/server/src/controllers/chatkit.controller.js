import logger from "../utils/logger.js";

export async function createChatkitSession(req, res, next) {
  try {
    if (!process.env.OPENAI_API_KEY || !process.env.OPENAI_WORKFLOW_ID) {
      return res.status(500).json({
        error: "Server configuration for ChatKit is incomplete.",
      });
    }

    const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "OpenAI-Beta": "chatkit_beta=v1",
      },
      body: JSON.stringify({
        user: req.body.deviceId,
        workflow: {
          id: process.env.OPENAI_WORKFLOW_ID,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      logger.error("Failed to create ChatKit session:", data);

      return res.status(response.status).json({
        error: data?.error?.message || "Failed to create ChatKit session.",
      });
    }

    return res.status(201).json({
      client_secret: data.client_secret,
      session_id: data.id,
      expires_at: data.expires_at,
    });
  } catch (error) {
    logger.error("Unexpected error in createChatkitSession controller:", error);
    return next(error);
  }
}
