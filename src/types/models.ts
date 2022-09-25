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
    edition?: string,
    in_queue: {
        userId: string,
        name: string,
        level: string,
        queue_ticket_number: number,
        canVisit: boolean,
    }[]
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
    level: string,
}
export interface OptionCategoryModel {
    value: string,
    option: string,
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

export interface QueueModel {
    book: BookModel,
}

export interface SingleQueueModel {
    bookId: string,
    bookName: string,
    bookType: 'reference' | 'text-book' | 'others',
    authorName: string,
    userId: string,
}

export interface FineModel {
    _id?: string,
    fine: number,
}

export interface BorrowModel {
    _id: string,
    bookId: string,
    bookName: string,
    bookType: string,
    authorName: string,
    uniqueId: string,
    issuedDate: string,
    dueDate: string,
    userName: string,
    level: string,
    userId: string,
}

export interface UserModel {
    id?: string,
    name: string,
    email?: string,
    semester: string,
    batch?: string,
    faculty?: string,
    regNo?: string,
    phone?: string,
    password?: string,
    borrowed_books?: {
          bookId: string,
          bookName: string,
          authorName: string,
          bookType: string,
          uniqueId: string,
          issuedDate: string,
          dueDate: string,
          fineAmount: number,
        }[],
    in_queue?: {
          bookId: string,
          bookName: string,
          ticketNumber?: number,
        }[],
    totalFine?: number,
}

export interface DashBoardInfo {
    totalBorrows: string,
    totalBooks: string,
    totalStudents: string,
    hasFine: boolean,
    hasSemesters: boolean,
    hasLimits: boolean,
}