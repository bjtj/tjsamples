'use client'

import { useEffect, useState } from 'react';

type User = {
  username: string;
};

export default function Profile() {
  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/me', {
      credentials: 'include', // send cookie
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Unauthorized');
      })
      .then(data => setUser(data.user))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <div>Loading or not authorized...</div>;

  return (
    <div className="p-3">
      <a className="underline" href="/">Home</a>
      <h1>Welcome {user.username}</h1>
    </div>
  );
}
