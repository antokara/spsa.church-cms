import { tests } from 'src/gql/data/tests';

export const resolvers = {
  Query: {
    tests: () => tests,
  },
};
