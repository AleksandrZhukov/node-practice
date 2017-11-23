import mongoose from 'mongoose';
import '../index';

import { Practice, Tool } from '../models';

mongoose.set('debug', true);

const practices = [
  new Practice({ name: 'Node.js', description: 'Build custom Node.js projects' }),
  new Practice({ name: 'ROR', description: 'Build custom ROR projects' }),
  new Practice({ name: 'Django', description: 'Build custom Django projects' }),
  new Practice({ name: 'Yii', description: 'Build custom Yii projects' }),
  new Practice({ name: 'Flask', description: 'Build custom Flask projects' }),
  new Practice({ name: 'Sinatra', description: 'Build custom Sinatra projects' })
];

const tools = [
  new Tool({ name: 'Express.js', description: 'Express.js FE' }),
  new Tool({ name: 'React.js', description: 'Node.js for BE API, React.js for FE' }),
  new Tool({ name: 'Angular.js', description: 'Node.js for BE API, Angular.js for FE' }),
  new Tool({ name: 'Angular 2', description: 'Node.js for BE API, Angular 2 for FE' }),
  new Tool({ name: 'Vue.js', description: 'Node.js for BE API, Vue.js for FE' }),
  new Tool({ name: 'Backbone.js', description: 'Node.js for BE API, Backbone.js for FE' }),
  new Tool({ name: 'Marionette.js', description: 'Node.js for BE API, Marionette.js for FE' })
];

(async function seed() {
  const toolsIds = await Promise.all(tools.map(t => t.save().then(() => t._id)));
  await Promise.all(practices.map(p => {
    p.tools.push(...toolsIds);
    return p.save();
  }));

  mongoose.disconnect();
})();
