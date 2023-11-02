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
    subjectOf: [ $.Edges.subject ],
    objectOf: [ $.Edges.object ],
    data: Json5,
  },
  Edges: {
    name: $ => `${subject.name} ${predicate} ${object.name}`,
    subject: $.Edges.subject,
    predicate: Text,
    object: $.Edges.object,
    data: Json5,
  },
})



```