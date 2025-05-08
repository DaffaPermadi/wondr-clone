export const revalidate = 60;

async function getExchangeRates(){
    const res = await fetch('http://localhost:3000/api/exchange');
    return res.json();
}

export default async function ExchangeRates(){
    const data = await getExchangeRates();

    return(
        <div>
            <h1>kurs Hari ini</h1>
            <ul>
                {data.map(rate=>(
                    <li key={rate.id}>{rate.currency} : {rate.value}</li>
                ))}
            </ul>
        </div>
    )
}