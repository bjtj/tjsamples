import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { FormStrategy } from "remix-auth-form";

type User = {
    id: string;
    email: string;
    role: 'admin' | 'user';
};

export let authenticator = new Authenticator<User>(sessionStorage);

function login(email: string, password: string): User {
    // This is where you would check the email and password against your database
    // and return the user if they are valid.
    if (email === 'steve@mymail.com' && password === 'password') {
        return {
            id: '1',
            email,
            role: 'admin',
        };
    }
    throw new Error('Invalid email or password');
}

authenticator.use(new FormStrategy(async ({ form }) => {
    let email = form.get('email');
    let password = form.get('password');
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    let user = await login(email.toString(), password.toString());
    return user;
}), 'user-pass');