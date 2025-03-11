"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Charger les variables d'environnement
dotenv_1.default.config();
const PORT = process.env.PING_LISTEN_PORT || 3000;
const app = (0, express_1.default)();
// Route GET /ping qui retourne les headers de la requête
app.get("/ping", (req, res) => {
    res.json(req.headers);
});
// Réponse 404 pour toutes les autres routes
app.use((req, res) => {
    res.status(404).send();
});
// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
