import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Menu section
      S.listItem()
        .title('Menu Items')
        .child(S.documentTypeList('menuItem').title('Menu Items')),
      S.listItem()
        .title('Menu Categories')
        .child(S.documentTypeList('category').title('Menu Categories')),
      S.divider(),

      // Keep other documents (if any) dynamically
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !['menuItem', 'category'].includes(item.getId()!),
      ),
    ])
