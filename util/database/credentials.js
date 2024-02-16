require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

exports.DatabaseCredentials={
    host:dbHost,
    user: dbUser,
    password: dbPass
}