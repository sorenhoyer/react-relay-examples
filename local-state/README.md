![alt text](https://raw.githubusercontent.com/sorenhoyer/react-relay-examples/master/local-state/screenshot.PNG)

The purpose of this is trying to initialize primaryFoo (remote) to currentFoo (local) so that it behaves just like if it was a remove Foo. Meaning you can query it exactly like you would if it was not local. And from anywhere in the App.

So it should be possible to pick one or many fields from currentFoo just like it is possible for primaryFoo.
```
# primaryFoo {
#   id
#   uuid
#   name
#   type
#   entities(first: 9999, types: [BAR, BAZ]) {
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

Unfortunately right now there's a lot of these errors: 
```
Tried reading fragment `Navigation_currentFoo` declared in `useFragment()`, but it has missing data and its parent query `AppQuery` is not being fetched.
This might be fixed by by re-running the Relay Compiler.  Otherwise, make sure of the following:
* You are correctly fetching `AppQuery` if you are using a "store-only" `fetchPolicy`.
* Other queries aren't accidentally fetching and overwriting the data for this fragment.
* Any related mutations or subscriptions are fetching all of the data for this fragment.
* Any related store updaters aren't accidentally deleting data for this fragment.
```

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
