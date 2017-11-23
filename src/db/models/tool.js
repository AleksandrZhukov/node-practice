import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

schema.plugin(mongoosePaginate);

const Tool = mongoose.model('Tool', schema);

export default Tool;
