module.exports = {
    APPLICATION_ID: process.env.APPLICATION_ID || UNPLASH_ACCESS_KEY,
    SECRET: process.env.SECRET || UPNPLASH_SECRET_KEY,
    CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
}