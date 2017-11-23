import { Router } from 'express';
import { getPractices, getPracticeById, getToolsByPracticId } from './handlers';

const practices = Router();

practices.get('/', getPractices);
practices.get('/:id', getPracticeById);
practices.get('/:id/tools', getToolsByPracticId);

export default practices;
