export interface BookModel {
    _id: string,
    title: string,
    secondary_title?: string,
    ISBN_number?: string,
    Barcode_number?: string,
    quantity: number,
    borrowed_quantity: number,
    book_copies: {
        bookId: string,
        in_queue: {
            name: string,
            level: string,
            queue_ticket_number: number,
        }[],
    }[],
    category: {
        categoryId: string,
        name: string,
    },
    type: 'reference' | 'text-book',
    author: string,
    publisher: string,
    year?: string,
    edition?: string
}

export interface LimitModel {
    _id: string,
    quantity: number,
    level: string,
    sub_quantity: {
        quantity:number,
        type: 'reference' | 'text-book' | 'others',
    }[]
}