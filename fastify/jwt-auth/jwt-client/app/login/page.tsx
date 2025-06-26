'use client'

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // important!
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/profile');
    } else {
      alert('Login failed');
    }
  }

  return (
    <div className="p-3">
      <a className="underline" href="/">Home</a>
      <form onSubmit={handleLogin}>
        <ul className="mt-1">
          <li>
            <input className="p-3 border" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
          </li>
          <li>
            <input className="p-3 border" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
          </li>
        </ul>
        <button className="p-3 border hover:bg-gray-800" type="submit">Login</button>
      </form>
    </div>
  );
}
