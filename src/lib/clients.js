import {createClient} from '@sanity/client'
export const client = createClient({
  projectId: 'ft7q0qju',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-08-03',
})