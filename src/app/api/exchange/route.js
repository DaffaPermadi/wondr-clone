import db from '@/app/db.json'
import { NextResponse } from 'next/server'

export async function GET(){
    return NextResponse.json(db.exchange)
}