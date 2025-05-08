export const dynamic = 'force-dynamic'; 

async function getRates(){
    const res = await fetch('http:/localhost:3000/api/rates',{
        // cache: 'force-cache'
    });
    return res.json();
}

export default async function InterestRates(){
    const rates = await getRates();

    return (
        <div>
            <h1>Suku Bunga Tabungan</h1>
            <ul>
                {rates.map(rate=>(
                    <li key={rate.id}>{rate.name} : {rate.value}%</li>
                ))}
            </ul>
        </div>
    )

}