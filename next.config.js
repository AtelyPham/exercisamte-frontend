/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MYSQL_HOST: 'us-cdbr-east-05.cleardb.net',
    MYSQL_PORT: '3306',
    MYSQL_DATABASE: 'heroku_e439c2863663b0f',
    MYSQL_USER: 'b938efaa11f280',
    MYSQL_PASSWORD: '0ad688fa',
  },
}

module.exports = nextConfig
