export interface User {
    mailUser : string;
    password : string;
    pseudo? : string;
    promotion? : string;
    credit?: number;
    id?: string;
    isAdmin?: boolean;
}