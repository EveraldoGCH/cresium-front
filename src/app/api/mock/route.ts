import { sleep } from '@/utils/ApiUtils'
import { NextResponse } from 'next/server'

export async function GET() {
    await sleep(2000)
    return NextResponse.json({
        message: 'Hello from Next.js!'
    })
}