// МОДУЛЬ ХРАНИЛИЩА ДЛЯ КАТАЛОГА

export const CatalogModule = {
    state: () => ({
        products: [
            {id: 1, name: 'Product One'},
            {id: 2, name: 'Product Two'},
            {id: 3, name: 'Product Three'},
            {id: 4, name: 'Product Four'},
            {id: 5, name: 'Product Five'},
            {id: 6, name: 'Product Six'},
            {id: 7, name: 'Product Seven'},
            {id: 8, name: 'Product Eight'},
        ]
    }),
    namespaced: true,
}