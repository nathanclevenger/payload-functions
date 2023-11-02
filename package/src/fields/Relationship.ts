export const inverseHook = ({ relationTo, inverseOf }: { relationTo: string, inverseOf: string }) => {
  return {
    hooks: {
      afterChange: async ({ doc, req, operation }) => {
        if (operation === 'create') {
          const { db } = req.payload
          const { _id } = doc
          const collection = db.collection(relationTo)
          await collection.updateMany({ [inverseOf]: { $in: [ null, undefined ] } }, { $set: { [inverseOf]: _id } })
        }
      },
      afterDelete: async ({ doc, req }) => {
        const { db } = req.payload
        const { _id } = doc
        const collection = db.collection(relationTo)
        await collection.updateMany({ [inverseOf]: _id }, { $set: { [inverseOf]: null } })
      }
    }
  }
}

export const Relationship = new Proxy({}, {
  get: function(_, relationTo) {
    return new Proxy({}, {
      // Inverse Relationship
      get: function(_, inverseOf) {
        return 
      },
      // If calling function here instead of getting property, then we can't use the proxy to get the inverseOf property
      // apply
    })
  }
})

