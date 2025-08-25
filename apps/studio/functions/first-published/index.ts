import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {
  try {
    await createClient({
      ...context.clientOptions,
      useCdn: false,
      apiVersion: '2025-05-08'
    })
      .patch(event.data._id)
      .setIfMissing({
        firstPublished: new Date().toISOString(),
      })
      .commit({dryRun: context.local})
    console.log(context.local? 'dry run:' : 'Updated: ', `firstPublished set on ${event.data._id}`)
  } catch (error) {
    console.error('Error fetching events:', error)
  }
})