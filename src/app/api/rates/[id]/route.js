import { NextResponse } from "next/server";
import db from '@/app/db.json'

export async function GET(_,{params}){
    const {id} = params
    const rate = db.rates.find((rate)=> rate.id === parseInt(id))
    if(!rate){
        return NextResponse.json({message: "Rate not found"}, {status: 404})
    }
    return NextResponse.json({message:"success", data: rate})
}