import { NextResponse } from 'next/server'

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));

export async function GET() {
    await sleep(2000)
    return NextResponse.json({
        message: 'Hello from Next.js!'
    })
}