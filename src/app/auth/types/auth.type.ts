export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    response: {
        access_token: string;
        refresh_token: string;
    };
}
