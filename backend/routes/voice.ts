import express from "express";

const router = express.Router();

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      console.error("ELEVENLABS_API_KEY is not set in backend/.env");
      return res.status(500).json({ error: "ElevenLabs API key is missing. Please add it to .env" });
    }

    // Using a default voice ID (Sarah is free tier compatible)
    const voiceId = "EXAVITQu4vr4xnSDxMaL"; 

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "Accept": "audio/mpeg",
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ElevenLabs API Error:", errorText);
      return res.status(response.status).json({ error: "Failed to generate speech from ElevenLabs" });
    }

    // Stream the audio back to the client
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": buffer.length,
    });
    
    res.send(buffer);

  } catch (error) {
    console.error("Error in /voice/tts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
