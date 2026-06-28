import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);

// Any unhandled API requests should return a JSON 404 error
app.all('/api/*all', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// Serve static files from the frontend dist directory
const frontendDistPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

// Fallback to index.html for React router
app.get('*all', (req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.use(errorHandler);

export default app;
