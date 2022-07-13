export const bookstoreService = {
    getBooks() {
        return [ {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        }, {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Ni',
            price: 44,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX258_BO1,204,203,200_.jpg'
        },
        ]
    }
}