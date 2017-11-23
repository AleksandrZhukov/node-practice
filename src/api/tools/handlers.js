import { Tool } from '../../db/models';

const limit = 3;

export const getTools = async (req, res, next) => {
  const page = req.query.page || 1;
  try {
    const tools = await Tool.paginate({}, { select: 'name description', page, limit});
    if (!tools.docs.length) return res.status(404).send('Tools not found');
    res.send(tools.docs);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getToolById = async (req, res, next) => {
  const toolId = req.params.id;
  if (!toolId.match(/^[0-9a-fA-F]{24}$/)) return res.sendStatus(400);

  try {
    const tool = await Tool.findOne({ _id: toolId }, { name: 1, description: 1 });
    if (!tool) {
      res.status(404).send('Tool not found');
    } else {
      res.send(tool);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
