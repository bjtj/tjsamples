import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
    let user = await authenticator.isAuthenticated(request);
    if (user) {
        return json({ user });
    } else {
        return json({ user: null });
    }
}

export default function Dashboard() {

    const { user } = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>Dashboard</h1>
            {user ? (<div>
                <p>Welcome, {user.email} (Role: {user.role})</p>
                <form method="POST" action="/logout">
                    <button>Logout</button>
                </form>
            </div>) : (<div>
                <p>You are not logged in</p>
                <Link to="/login">Login</Link>
            </div>)}

        </div>
    );
}