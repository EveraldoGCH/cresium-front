import { sleep } from '@/utils/ApiUtils'
import { NextResponse } from 'next/server'
import mock from "./transactionsMock.json"




export async function GET(req: Request, { params }: { params: { type: string; } }) {
    const { type } = params;
    await sleep(700)
    if (type == "all") {
        return NextResponse.json(mock, { status: 200 })
    }
    else if (type === "income") {
        return NextResponse.json(mock, { status: 200 })
    }
    else if (type === "outcome") {
        return NextResponse.json(mock, { status: 200 })
    }
}