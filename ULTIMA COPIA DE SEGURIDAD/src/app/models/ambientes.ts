export interface Ambientes {
    id: number;
    name: string;
    state: string;
    usability: string;
    userId?: any;
    user?: any;
}

export interface User {
    id: number;
    name: string;
    username: string;
}