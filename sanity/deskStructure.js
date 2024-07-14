export const myStructure = (S) =>
    S.list()
      .title('Content')
      .items([
        // Company Content Menu
        S.listItem()
          .title('Company Content')
          .child(
            S.list()
              .title('Company Content')
              .items([
                // List for Navigation Settings documents
                S.listItem()
                  .title('Navigation')
                  .child(
                    S.documentTypeList('navigation')
                      .title('Navigation')
                  ),
                // Singleton Home Page
                S.listItem()
                  .title('Home Page')
                  .child(
                    S.editor()
                      .id('homePage')
                      .schemaType('homePage')
                      .documentId('homePage')
                      .title('Home Page')
                  ),
              ])
          ),
        // Optional: Add other document lists or items here
      ]);