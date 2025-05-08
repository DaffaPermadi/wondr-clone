import db from '@/app/db.json'
import { NextResponse } from 'next/server'

export async function GET(_,{params}){
    const {slug} = await params;
    const promo = db.promo.find((promo) => promo.slug === slug)
    if(!promo){
        return NextResponse.json({message: "Promo not found"}, {status: 404})
    }
    return NextResponse.json(promo)
}