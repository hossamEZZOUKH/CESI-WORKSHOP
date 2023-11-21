import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Route to list images
app.get('/images', (req, res) => {
	const imagesDirectory = path.join(__dirname, 'assets');

	fs.readdir(imagesDirectory, (err, files) => {
		if (err) {
			return res.status(500).json({ message: 'Unable to scan files!' });
		}
		// Filter files to ensure they are images
		const imageFiles = files.filter((file) =>
			/\.(jpg|jpeg|png|gif)$/i.test(file)
		);
		res.json(imageFiles);
	});
});

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
