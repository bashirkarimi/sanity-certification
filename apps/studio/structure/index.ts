import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.divider().title('Events'),
      S.listItem()
        .id('upcoming-event')
        .title('Upcoming')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events').filter('date > now()')),
      S.listItem()
        .id('past-event')
        .title('Past')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events').filter('date <= now()')),
      S.divider(),
      S.listItem()
        .id('siteSettings')
        .schemaType('siteSettings')
        .title('Site Settings')
        .child( // this part opens the siteSettings in editor mode
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'siteSettings'].includes(item.getId()!),
      ),
    ])
