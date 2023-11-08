import express from 'express';
import { getTask, postTask, requesPing } from '../controllers/index.controller.js';

const route = express();
route.use(express.json())

route.get('/ping', requesPing)

route.get('/task', getTask)

route.post('/task', postTask)


export default route;