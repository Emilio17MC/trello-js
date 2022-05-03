require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY) {
    throw new Error('No hay configuración con API Key y con Token');
}