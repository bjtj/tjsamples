import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-3">
      <main>
        <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </main>
    </div>
  );
}
