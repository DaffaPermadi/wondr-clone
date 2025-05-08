export const dynamic = 'force-dynamic';

async function getUser() {
    const res = await fetch('http://localhost:3000/user', {
        cache: 'no-store'
    });
    return res.json();
}

export default async function User(){
    const user = await getUser();

    return (
        <div>
            <h1 className="text-2xl font-semibold">Welcome, {user[0]?.name}</h1>
            <p>Saldo: Rp {user[0]?.balance.toLocaleString()}</p>
        </div>
    )
}