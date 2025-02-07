export interface LoginResponse {
	user_id: string;
	refresh: string;
	access: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}
