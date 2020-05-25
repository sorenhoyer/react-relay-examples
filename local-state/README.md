# Local State

![alt text](https://raw.githubusercontent.com/sorenhoyer/react-relay-examples/master/local-state/screenshot-01.PNG)

The purpose of this is trying to initialize currentFoo (local) with the value of primaryFoo (remote), so that currentFoo behaves just like if it was a remote Foo. Meaning you can query it exactly like you would if it was not local. And from anywhere in the App.

```
# primaryFoo {
#   id
#   uuid
#   name
#   type
#   entities(types: [BAR, BAZ]) {
#     totalCount
#     edges {
#       node {
#         id
#         uuid
#         name
#         type
#       }
#     }
#   }
# }
```

Since Relay indexes Records with the full connection signature and parameters of the query/fragment it seems to be quite cumbesome to have eg. connections with differrent signatures, since those are not stored in the cache initially. It also goes against the Relay philosophy to query for more data than you need in a component, but this is necessary in AppQuery and FooSwitcher, to include all fields the "application" needs (not what the component needs).

I made a few workarounds to just make it "work" for demo purposes but as you will see they have great limitations and the solution right now is very bad and I seek advice on how to do this in a proper way with Relay. I suspect that Relay might not be mature enough yet to handle local data things such as these, but please prove my fears wrong and send a PR, or create an issue and share your ideas and we can try them out :D.

## How it should work

* currentFoo should be automatically initialized to the value of primaryFoo on page load/refresh (primaryFoo should only be used for setting currentFoo initially - nothing else!)
* If currentFoo has only 1 entity of Bar or Baz it should not pop out the SubNavigation when you click "entities" but navigate directly to it (routing is deliberately left out for this example, since that is not important). If there are more than 1 entities of type Bar or Baz, the SubNavigation should pop open
* You can switch currentFoo by selecting a Foo in the FooSwitcher component, which is both available from the MainNavigation and SubNavigation
* currentFoo should behave just like any other record of type Foo from the server schema and not be limited to certain pre-defined combination of query args. If you ask for currentFoo in a query or fragment, all fields should be available - it should not only be stored under the exact query signature that it was fetched with when it got stored initially - there has to be some flexibility so we can query it like if it was the primaryFoo from the remote / server schema

## Hacks I had to make to make this "work" and the limitations that comes

### The first thing you will notice is in AppQuery

```graphql
query AppQuery {
  primaryFoo @__clientField(handle: "currentFoo") {
    id
    uuid
    name
    type
    entities(types: [BAR, BAZ]) {
      totalCount
      edges {
        node {
          id
          uuid
          name
          type
        }
      }
    }
  }
}
```

#### Problems

* This component has no direct requirement for primaryFoo, so this seems really awkward just to initialize currentFoo to primaryFoo
* Also currentFoo is stored with a key signature matching the exact parameters (and directives if there were any), and it needs to include all fields for them to get saved.
* It can only be fetched by including all fields with the exact same parameters (and directives if there were any).
* This makes it very in-flexible and impossible to do paging over the entities connection in the SubNavigation component where a @connection directive and first pareter would be needed, but is simply not possible to add, without some very very nasty hacks in handler functions.

### The next big problem is in SubNavigation

```graphql
query SubNavigationQuery {
  hello
  localState {
    currentFoo {
      name
      entities(types: [BAR, BAZ]) { # PROBLEM
        totalCount
        edges {
          node {
            uuid
            name
          }
        }
      }
    }
  }
}
```

#### Problems

* You need to include something in the query that is not local state, which is the reason for including the hello field. This is not a big problem, but still something I hope gets fixed.
* The ideal query would be something like: 
```graphql
query SubNavigationQuery {
  localState {
    currentFoo {
      name
      entities(first: 10, types: [BAR, BAZ]) @connection(key: "SubNavigation_entities") {
        totalCount
        edges {
          node {
            uuid
            name
          }
        }
      }
    }
  }
}
```
* I guess there is no way to add @connection and first: 10 to do pagination, since that is not how entities are stored in AppQuery and FooSwitcherQuery

### FooSwitcherQuery needs the exact signature and to include all fields as well

```graphql
query FooSwitcherQuery {
  entities(types: [FOO]) {
    edges {
      node {
        id
        uuid
        name
        type
        ... on Foo {
          entities(types: [BAR, BAZ]) {
            totalCount
            edges {
              node {
                id
                uuid
                name
                type
              }
            }
          }
        }
      }
    }
  }
}
```

Where instead it should just be:

```graphql
query FooSwitcherQuery {
  entities(types: [FOO]) {
    edges {
      node {
        id
        name
      }
    }
  }
}
```

## How to install and run
To install all dependencies
```
yarn
```

To start the graphql server
```
node server
```

To start the client
```
yarn get-schema
```
You will see an error saying "Syntax Error: Unexpected "$".", so just go to the schema.server.graphql file and remove the line at the top and save.` - didn't have time to fix this yet :D

```
yarn relay
yarn start
```

Sorry for the poor formatting/linting and code quality. This was done super quick to demonstrate some serious issues I'm facing with trying to set currentFoo in localState and especially to initialize it from primaryFoo. But I have no clue why?
