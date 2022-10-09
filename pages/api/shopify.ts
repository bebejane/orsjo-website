import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req : NextApiRequest, res: NextApiResponse) {
  console.log('shopify webhook')
  const body = req.body

  console.log(body)

  res.status(200).json({success:true})

}