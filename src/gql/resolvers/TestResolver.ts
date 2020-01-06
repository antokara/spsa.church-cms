import { Resolver, Query } from '@nestjs/graphql';
import { tests } from 'src/gql/data/tests';

@Resolver('Test')
export class TestResolver {
  @Query()
  async getTests() {
    return tests;
  }
}
