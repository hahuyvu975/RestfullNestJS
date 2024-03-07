import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService { 
    register() {
        return {
            success: true,
            message: "Register successfully"
        };
    }

    login() {
        return {
            success: true,
            message: "Login successfully"
        };
    }
}
