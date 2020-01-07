import * as mongoose from 'mongoose';

export const Test = new mongoose.Schema({
  title: String,
  author: String,
});
