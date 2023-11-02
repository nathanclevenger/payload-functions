import { Field, TabsField } from 'payload/types'

export const Tabs = (tabs: Record<string, Field[]>, options: Partial<TabsField> = {}): TabsField => {
  return { 
    type: 'tabs', 
    tabs: Object.entries(tabs).map(([ name, fields ]) => ({ name, fields })), 
    ...options 
  }
}