import { Field, RowField } from 'payload/types'

export const Row = (fields: Field[], options: Partial<RowField> = {}): RowField => {
  return { type: 'row', fields, ...options }
}