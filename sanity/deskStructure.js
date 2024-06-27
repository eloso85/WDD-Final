export const myStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            // List for Navigation Settings documents
            S.listItem()
                .title('Navigation Settings')
                .child(
                    S.documentTypeList('navigation')
                        .title('Navigation Settings')
                ),
            // Optional: Add other document lists or items here
        ]);