import express from 'express';
import * as ctrl_index from '../controllers/index';

const router = express.Router();

router.get("/",ctrl_index.showIndex)

export default router