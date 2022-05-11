export interface BookModel {
    _id?: string,
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
    category: string,
    type: 'reference' | 'text-book' | 'others',
    author: string,
    publisher: string,
    year?: string,
    edition?: string
}

export interface LimitModel {
    _id?: string,
    quantity: number,
    level: string,
    sub_quantity: {
        quantity:number,
        type: 'reference' | 'text-book' | 'others',
    }[]
}

export interface CategoryModel {
    _id?: string,
    name: string,
}

export interface RequestModel {
    _id: string,
    book: {
        bookId: string,
        name: string,
        authorName: string,
        bookType: string,
    },
    user: {
        userId: string,
        name: string,
        level: string,
    },
    request_type: 'new request' | 'renew request',
    status?: 'open' | 'verified' | 'cancelled',
    cancelled_reason?: string,
    createdAt?: string,
}