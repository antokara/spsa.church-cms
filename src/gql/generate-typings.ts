import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/**
 * Generates the GraphQL schema using the type definitions provided
 *
 * run `$npm run genTypings` every time you change the typeDefs to regenerate the schema
 * @see https://docs.nestjs.com/graphql/quick-start
 */
const definitionsFactory: GraphQLDefinitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['src/gql/typeDefs/*.graphql'],
  path: join(process.cwd(), 'src/gql/schema.ts'),
});
