import { application, Router } from 'express';
import bookRoutes from './books'
const router = Router();

router.use('/books', bookRoutes);

router.use('/', (req, res) => {
    res.send('Welcome to Node API');
})



export default router;