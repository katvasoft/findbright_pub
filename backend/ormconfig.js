module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST || "localhost",
    "port": process.env.DB_PORT || 5432,
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": "findbright",
    "synchronize": true,
    "logging": true,
    "entities": ["dist/entities/**/*.js"]
 }