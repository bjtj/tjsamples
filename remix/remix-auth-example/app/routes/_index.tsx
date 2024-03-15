import { redirect, type MetaFunction } from "@remix-run/node";

export function loader() {
  return redirect('/dashboard');
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

    </div>
  );
}
