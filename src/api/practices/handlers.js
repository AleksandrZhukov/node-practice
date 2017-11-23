import { Practice, Tool } from '../../db/models';

const limit = 3;

export const getPractices = async (req, res, next) => {
  const page = req.query.page || 1;
  try {
    const practices = await Practice.paginate({}, { select: 'name description', page, limit });
    console.log(practices.docs);
    if (!practices.docs.length) return res.status(404).send('Practices not found');
    res.send(practices.docs);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getPracticeById = async (req, res, next) => {
  const practiceId = req.params.id;
  if (!practiceId.match(/^[0-9a-fA-F]{24}$/)) return res.sendStatus(400);

  try {
    const practice = await Practice.findOne({ _id: practiceId }, { name: 1, description: 1 });
    if (!practice) {
      res.status(404).send('Practice not found');
    } else {
      res.send(practice);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getToolsByPracticId = async (req, res, next) => {
  const practiceId = req.params.id;
  if (!practiceId.match(/^[0-9a-fA-F]{24}$/)) return res.sendStatus(400);

  try {
    const practice = await Practice.findOne({ _id: practiceId });

    if (!practice) return res.status(404).send('Practice not found');

    const page = req.query.page || 1;
    const tools = await Tool.paginate({ _id: { $in: practice.tools } }, { select: 'name description', page, limit });

    if (!tools.docs.length) return res.status(404).send('Tools not found');

    const toolsWithPracticeId = tools.docs.map(t => ({ ...t._doc, practice_id: practiceId }));
    res.send(toolsWithPracticeId);
  } catch (err) {
    res.status(500).send(err);
  }
};
