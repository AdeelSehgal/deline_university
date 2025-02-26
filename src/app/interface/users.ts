export interface Users {
    id?: number
    userName: string
    email: string
    password: string
    userType: string
}

export interface LoginUser {
    email: string
    password: string
}


export interface LoginResponse {
    message: string
    token: string
}

