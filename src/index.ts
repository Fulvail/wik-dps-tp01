import express, { Request, Response } from "express";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

const PORT = process.env.PING_LISTEN_PORT || 3000;
const app = express();

// Route GET /ping qui retourne les headers de la requête
app.get("/ping", (req: Request, res: Response) => {
  res.json(req.headers);
});

// Réponse 404 pour toutes les autres routes
app.use((req: Request, res: Response) => {
  res.status(404).send();
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
