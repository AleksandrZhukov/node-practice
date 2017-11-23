import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  tools: [{ type: Schema.Types.ObjectId, ref: 'Tool' }],
});

schema.plugin(mongoosePaginate);

const Practice = mongoose.model('Practice', schema);

export default Practice;
