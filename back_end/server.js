import express from 'express';

import userRoutes from './routes/user.js';
import productsRoutes from './routes/products.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use("/api/users", userRoutes);

app.use("/api/products", productsRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

export default app;