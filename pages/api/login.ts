import { setCookies } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from '../../lib/executeQuery'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  gender: string
  birthday: string
  daysPerWeek: number
  level: number
  createdAt: null
  updatedAt: null
  dayPerWeek: number
  loginToken: null
  loginTokenExpiresAt: null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const email = JSON.parse(req.body).email

  setCookies('email', email, { req, res })

  if (email === 'tinpham1412000@gmail.com') {
    return res.send({ route: '/profile' })
  }

  if (email === 'voduykhang312001@gmail.com') {
    return res.send({ route: '/dashboard' })
  }

  res.send({ route: '/' })
}
