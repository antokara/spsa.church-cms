import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Test } from 'src/gql/schema';

interface ITest extends Test, Document {}

const TestSchema = new mongoose.Schema({
  title: String,
  author: String,
});

export { TestSchema, ITest };
