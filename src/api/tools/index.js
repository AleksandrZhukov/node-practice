import { Router } from 'express';
import { getTools, getToolById } from './handlers';

const practices = Router();

practices.get('/', getTools);
practices.get('/:id', getToolById);

export default practices;
