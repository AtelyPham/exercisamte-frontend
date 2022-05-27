import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT ?? '3306'),
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
})

export default async function excuteQuery<T>(args: {
  query: string
  values?: string[] | undefined
}) {
  try {
    const results = await db.query<T>(args.query, args.values)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}
