# `payload-functions`

This package is still very early in development, and the API is not yet stable.

```bash
yarn add payload-functions
```

## Usage

```typescript
import { $Context, Json5, Text } from 'payload-fields'

export default $: $Context => ({
  Nodes: {
    name: Text,
    subjectOf: [ $.巛.Edges.subject ],
    objectOf: [ $.巛.Edges.object ],
    data: Json5,
  },
  Edges: {
    name: ({ subject, predicate, object }) => `${subject.name} ${predicate} ${object.name}`,
    subject: $.Edges.subject,
    predicate: Text,
    object: $.Edges.object,
    data: Json5,
  },
})



```