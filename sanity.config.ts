import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'dimgray-zebra',

  projectId: 'yk8ngneh',
  dataset: 'production',

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
