var express = require('express');
var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');
var { connectionFromArray, fromGlobalId, toGlobalId } = require('graphql-relay');
var { makeExecutableSchema} = require('graphql-tools');
var cors = require('cors');

const entities = async (
  parent,
  args,
  context,
) => {
  let arr = [] // TODO

  if (args.types) arr = entitiesData.filter(item => item.parentId === parent.id && args.types.includes(item.typeId));

  const conn = connectionFromArray(arr, args);

  return {
    ...conn,
    nodes: conn.edges.map(edge => edge.node) || [],
    totalCount: arr.length,
  };
};

const entitiesData = [
  {
    id: "eca25310-ab99-432b-beb3-20628ed14f1d",
    parentId: null,
    name: "Foo1",
    typeId: "5e5474f6-6c13-48ed-8202-d19ed1209857",
  },
  {
    id: "9b273a67-16cf-4ae7-9652-ee40ae1543f2",
    parentId: "eca25310-ab99-432b-beb3-20628ed14f1d",
    name: "Bar1",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "13386116-4d78-4687-b10a-2d175ac915c2",
    parentId: "9b273a67-16cf-4ae7-9652-ee40ae1543f2",
    name: "Baz1",
    typeId: "8fa5bf17-2162-49f9-a00c-8c5460c865bf",
  },
  {
    id: "9c451eb7-c91a-448a-8a08-6b108cd10c31",
    parentId: "9b273a67-16cf-4ae7-9652-ee40ae1543f2",
    name: "Baz2",
    typeId: "8fa5bf17-2162-49f9-a00c-8c5460c865bf",
  },
  {
    id: "730301b2-e3d4-4682-add3-b9d9070b8382",
    parentId: "9b273a67-16cf-4ae7-9652-ee40ae1543f2",
    name: "Baz3",
    typeId: "8fa5bf17-2162-49f9-a00c-8c5460c865bf",
  },
  {
    id: "04776c36-3c92-4a09-baa5-3cd7e91a3360",
    parentId: "eca25310-ab99-432b-beb3-20628ed14f1d",
    name: "Bar2",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "cd5d48a6-2da8-457a-b948-aa30d9d38e02",
    parentId: "04776c36-3c92-4a09-baa5-3cd7e91a3360",
    name: "Baz4",
    typeId: "8fa5bf17-2162-49f9-a00c-8c5460c865bf",
  },
  {
    id: "235f9ecf-d7eb-4c14-b7a2-e9a1d32ca4d7",
    parentId: "04776c36-3c92-4a09-baa5-3cd7e91a3360",
    name: "Baz5",
    typeId: "8fa5bf17-2162-49f9-a00c-8c5460c865bf",
  },
  {
    id: "38b432fc-12c7-47cf-bebc-680e73c6e66a",
    parentId: "eca25310-ab99-432b-beb3-20628ed14f1d",
    name: "Bar3",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "e6acdb13-43dc-4e17-a162-63510f63d8c9",
    parentId: null,
    name: "Foo2",
    typeId: "5e5474f6-6c13-48ed-8202-d19ed1209857",
  },
  {
    id: "9fcb4c9f-8e7e-4f1a-98b8-0e4dc0de137b",
    parentId: "e6acdb13-43dc-4e17-a162-63510f63d8c9",
    name: "Bar4",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "bd6b9318-cd94-412d-9047-854d99ee03dc",
    parentId: "e6acdb13-43dc-4e17-a162-63510f63d8c9",
    name: "Bar5",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "a08bfe0b-46fe-4929-a76e-7c363b461d82",
    parentId: "e6acdb13-43dc-4e17-a162-63510f63d8c9",
    name: "Bar6",
    typeId: "30302b5d-8902-40ee-8a84-4380176ee6a3",
  },
  {
    id: "523301c5-5c6a-4c45-a6ae-7c6b092e60d7",
    parentId: null,
    name: "Foo3",
    typeId: "5e5474f6-6c13-48ed-8202-d19ed1209857",
  },
]

// Construct a schema, using GraphQL schema language
var typeDefs = /* buildSchema( */`
  interface Node {
    id: ID!
  }
  
  enum EntityType {
    FOO
    BAR
    BAZ
  }
  
  interface Entity {
    id: ID!
    uuid: String!
    name: String!
    type: EntityType!
  }
  
  type EntityEdge {
    """A cursor for use in pagination"""
    cursor: String!
    """The item at the end of the edge"""
    node: Entity
  }

  """Information about pagination in a connection."""
  type PageInfo {
    """When paginating forwards, the cursor to continue."""
    endCursor: String
    """When paginating forwards, are there more items?"""
    hasNextPage: Boolean!
    """When paginating backwards, are there more items?"""
    hasPreviousPage: Boolean!
    """When paginating backwards, the cursor to continue."""
    startCursor: String
  }
    
  """A connection to a list of items."""
  type EntityConnection {
    """A list of edges."""
    edges: [EntityEdge]
    """A list of nodes."""
    nodes: [Entity]
    """Information to aid in pagination."""
    pageInfo: PageInfo!
    """Identifies the total count of items in the connection."""
    totalCount: Int!
  }

  enum AllowedFooChildEntityType {
    BAR
    BAZ
  }
  
  type Foo implements Entity & Node {
    id: ID!
    uuid: String!
    name: String!
    type: EntityType!
    entities(
      types: [AllowedFooChildEntityType!]
      first: Int,
    ): EntityConnection
  }

  enum AllowedBarChildEntityType {
    BAZ
  }
  
  type Bar implements Entity & Node {
    id: ID!
    uuid: String!
    name: String!
    type: EntityType!
    entities(
      types: [AllowedBarChildEntityType!]
      first: Int,
    ): EntityConnection
  }

  type Baz implements Entity & Node {
    id: ID!
    uuid: String!
    name: String!
    type: EntityType!
  }
  
  type Query {
    hello: String

    node(id: ID!): Node

    entities(
      types: [EntityType!]
      first: Int
    ): EntityConnection

    primaryFoo: Foo!
  }
`/* ) */;

// The root provides a resolver function for each API endpoint
var resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!';
    },
    node: (parent, args, context) => {
      const { type: __typeName, id } = fromGlobalId(args.id);
  
      console.log(__typeName)
  
      let node = null;
  
      switch (__typeName) {
        case 'Foo':
        case 'Bar':
        case 'Baz':
          node = entitiesData.find(item => item.id === id)
          break;
        default:
          throw new Error('Could not resolve Node');
      }
  
      return {
        ...node,
        __typeName,
      };
    },
    entities: (parent, args, context, info) => {
  
      console.log(args)
      console.log(entitiesData)
  
      const array = entitiesData.filter(item => args.types.includes(item.typeId))
  
      console.log(array)
  
      const conn = connectionFromArray(array, args);
  
      return {
        ...conn,
        nodes: conn.edges.map(edge => edge.node) || [],
        totalCount: array.length,
      };
    },
    primaryFoo: (parent, args, context, info) => entitiesData.find(item => item.id === context.me.primaryFoo)
  },

  EntityType: {
    FOO: '5e5474f6-6c13-48ed-8202-d19ed1209857',
    BAR: '30302b5d-8902-40ee-8a84-4380176ee6a3',
    BAZ: '8fa5bf17-2162-49f9-a00c-8c5460c865bf',
  },
  Entity: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveType(parent){
      switch (parent.typeId) {
        case '5e5474f6-6c13-48ed-8202-d19ed1209857':
          return 'Foo';
        case '30302b5d-8902-40ee-8a84-4380176ee6a3':
          return 'Bar';
        case '8fa5bf17-2162-49f9-a00c-8c5460c865bf':
          return 'Baz';
        default:
          return null;
      }
    },
  },
  AllowedFooChildEntityType: {
    BAR: '30302b5d-8902-40ee-8a84-4380176ee6a3',
    BAZ: '8fa5bf17-2162-49f9-a00c-8c5460c865bf',
  },
  Foo: {
    id: (parent)=> toGlobalId('Foo', parent.id),
    uuid: (parent) => parent.id,
    name: (parent) => parent.name,
    type: (parent) => parent.typeId,
    entities,
  },
  AllowedBarChildEntityType: {
    BAZ: '8fa5bf17-2162-49f9-a00c-8c5460c865bf',
  },
  Bar: {
    id: (parent)=> toGlobalId('Bar', parent.id),
    uuid: (parent) => parent.id,
    name: (parent) => parent.name,
    type: (parent) => parent.typeId,
    entities,
  },
  Baz: {
    id: (parent)=> toGlobalId('Baz', parent.id),
    uuid: (parent) => parent.id,
    name: (parent) => parent.name,
    type: (parent) => parent.typeId,
  },
  
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true,
  context: {
    me: { id: 1337, firstName: 'John Doe', primaryFoo: 'eca25310-ab99-432b-beb3-20628ed14f1d'}
  }
}));
app.listen(8000);
console.log('Running a GraphQL API server at http://localhost:8000/graphql');


