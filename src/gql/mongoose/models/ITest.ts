import { Document } from 'mongoose';
import { Test } from 'src/gql/schema';

export interface ITest extends Test, Document {}
