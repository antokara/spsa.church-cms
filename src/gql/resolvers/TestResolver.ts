import { Resolver, Query } from '@nestjs/graphql';
import { TestsService } from 'src/services/TestsService';

@Resolver('Test')
export class TestResolver {
  constructor(private readonly testsService: TestsService) {}

  @Query()
  async getTests() {
    return this.testsService.findAll();
  }
}
