import { Field, ArrayField, BlockField, CheckboxField, CodeField, CollapsibleField, DateField, EmailField, GroupField, JSONField, NumberField, PointField, RadioField, RelationshipField, RichTextField, RowField, SelectField, TabsField, TextField, TextareaField, UIField, UploadField, Block } from 'payload/types'
import camelCase from 'camelcase'

export const FieldProxy = <T extends Field>(type: T['type'], defaults: Partial<T>): Record<string, (props?: Omit<T, 'type' | 'name'>) => T> => new Proxy({}, {
  get: function(target, name) {
    if (typeof name !== 'string') return undefined
    return (props: Omit<T,'name' | 'type'>): T => {
      return { type, name, ...props } as T
    }
  }
})



export const Array = (fields: Field[], props: Partial<ArrayField> = {}) => FieldProxy<ArrayField>('array', { fields, ...props })
export const Blocks = (blocks: Block[] = [], props: Partial<BlockField> = {}) => FieldProxy<BlockField>('blocks', { blocks, ...props })
export const Checkbox = FieldProxy<CheckboxField>('checkbox', {})
export const Code = (language: string = 'javascript', props: Partial<CodeField> = {}) => FieldProxy<CodeField>('code', { ...props, admin: { language, ...props.admin }})
export const Collapsible = (fields: Field[], props: Partial<CollapsibleField> = {}) => FieldProxy<CollapsibleField>('collapsible', { fields, ...props })
export const Date = FieldProxy<DateField>('date', {})
export const Email = FieldProxy<EmailField>('email', {})
export const Group = (fields: Field[], props: Partial<GroupField> = {}) => FieldProxy<GroupField>('group', { fields, ...props })
export const JSON = FieldProxy<JSONField>('json', {})
export const Number = FieldProxy<NumberField>('number', {})
export const Point = FieldProxy<PointField>('point', {})
export const Radio = FieldProxy<RadioField>('radio', {})
export const Relationship = (relationTo: string | string[], props: Partial<RelationshipField> = {}) => FieldProxy<RelationshipField>('relationship', { relationTo, ...props })
export const RichText = FieldProxy<RichTextField>('richText', {})
export const Select = (options: string[], props: Partial<SelectField> = {}) => FieldProxy<SelectField>('select', { options: options.map(label => ({ label, value: camelCase(label) })), ...props })
export const Text = FieldProxy<TextField>('text', {})
export const Textarea = FieldProxy<TextareaField>('textarea', {})
export const UI = FieldProxy<UIField>('ui', {})
export const Upload = FieldProxy<UploadField>('upload', {})

export const Row = (fields: Field[], props: Partial<RowField> = {}) => FieldProxy<RowField>('row', { fields, ...props })
export const Tabs = (tabs: Record<string, Field[]>, props: Partial<TabsField> = {}) => FieldProxy<TabsField>('tabs', { tabs: Object.entries(tabs).map(([ name, fields ]) => ({ name, fields })), ...props })

export const JavaScript = (props: Partial<CodeField> = {}) => Code('javascript', props)
export const TypeScript = (props: Partial<CodeField> = {}) => Code('typescript', props)

// TODO: Add JSON5 and YAML support to JSON field instead of CodeField
export const JSON5 = (props: Partial<CodeField> = {}) => Code('json5', props)
export const YAML = (props: Partial<CodeField> = {}) => Code('yaml', props)

export const RelationshipMany = (relationTo: string | string[], props: Partial<RelationshipField> = {}) => Relationship(relationTo, { ...props, hasMany: true })