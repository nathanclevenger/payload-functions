import { Field, FieldBase, TextField } from 'payload/types'

export const Text = (name: string, options: Partial<TextField> = {}): TextField => {
  return { type: 'text', name, ...options }
}