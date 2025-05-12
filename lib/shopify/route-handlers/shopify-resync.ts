'use server'

import { NextRequest, NextResponse } from 'next/server'
import { syncAll } from '../sync';
import { parseDatoCMSApiError } from 'next-dato-utils/utils';

export default async function resync(req: NextRequest) {

  try {
    const now = Date.now()
    await syncAll()
    return NextResponse.json({ success: true, time: Date.now() - now })

  } catch (error) {
    //console.log(JSON.stringify(error))
    console.log(error)
    console.log(parseDatoCMSApiError(error))

    return NextResponse.json({ success: false, error: parseDatoCMSApiError(error) })
  }
}
