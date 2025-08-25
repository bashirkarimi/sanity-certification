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
      S.divider().title('Artists and Venues'),
      S.documentTypeListItem('artist').title('Artists'),
      S.documentTypeListItem('venue').title('Venues'),
      S.divider().title('Feedback'),
      S.documentTypeListItem('feedback').title('Feedback'),
    ])
