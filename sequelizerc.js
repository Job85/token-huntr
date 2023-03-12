const path = require('path')
require('dotenv').config()

module.exports = {
    'config': path.resolve('./config', 'config.js'),
    'models-path': path.resolve('./models', 'models'),
    'seeders-path': path.resolve('./seeders', 'seeders'),
    'migrations-path': path.resolve('./migrations', 'migrations'),
}