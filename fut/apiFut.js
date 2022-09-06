const http = require('http')
const { url } = require('inspector')

const URL = 'https://www.futbin.com/'
http.get(url(URL))

const buscar = () => {
    return console.log(http)
}

buscar()