import { createCookieSessionStorage } from '@remix-run/node';

export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '__session',
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        secrets: ['s3cr3t'],
        secure: process.env.NODE_ENV === 'production',
    },
});

export let { getSession, commitSession, destroySession } = sessionStorage;