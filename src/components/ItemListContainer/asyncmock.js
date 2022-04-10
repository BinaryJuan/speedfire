const products = [
    // PC GAMES
    {id: 0, description: 'Grand Theft Auto V', price: 15, currency: ' USD', category: 'pc', img: 'https://i.3djuegos.com/juegos/5065/grand_theft_auto_v/fotos/ficha/grand_theft_auto_v-2654943.jpg', stock: 20},
    {id: 1, description: 'RDR2', price: 32, currency: ' USD', category: 'pc', img: 'https://i.3djuegos.com/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg', stock: 20},
    {id: 2, description: 'Rainbow Six Siege', price: 10.99, currency: ' USD', category: 'pc', img: 'https://www.ecured.cu/images/7/7b/Rainbow_Six_Siege_Cover.jpg', stock: 20},
    {id: 3, description: 'Death Stranding', price: 59.99, currency: ' USD', category: 'pc', img: 'https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_Tall-1280x1440-5a96ed93665756b28f6d70e65266e64c.jpg', stock: 20},
    {id: 4, description: 'Resident Evil 3 Remake', price: 35, currency: ' USD', category: 'pc', img: 'https://www.hd-tecnologia.com/imagenes/articulos/2019/12/Encuentran-las-portadas-de-Resident-Evil-3-Remake-en-la-PlayStation-Store-1.jpg', stock: 20},
    {id: 5, description: 'Dying Light 2', price: 55, currency: ' USD', category: 'pc', img: 'https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png', stock: 20},
    // PLAYSTATION GAMES
    {id: 6, description: 'The Last Of Us 2', price: 39.99, currency: ' USD', category: 'ps', img: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png', stock: 20},
    {id: 7, description: 'Resident Evil: Village', price: 59.99, currency: ' USD', category: 'ps', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png', stock: 20},
    {id: 8, description: 'Hitman 3', price: 35.99, currency: ' USD', category: 'ps', img: 'https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg', stock: 20},
    {id: 9, description: 'God of War', price: 49.99, currency: ' USD', category: 'ps', img: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png', stock: 20},
    {id: 10, description: 'Uncharted 4', price: 40, currency: ' USD', category: 'ps', img: 'https://www.kollectorsarmy.com/wp-content/uploads/2021/02/The-Art-of-Uncharted-4-A-Thiefs-End-1.jpg', stock: 20},
    {id: 11, description: 'Days Gone', price: 37.99, currency: ' USD', category: 'ps', img: 'https://puregaming.es/wp-content/uploads/2019/04/days-gone-destacada-1.jpg', stock: 20},
    // XBOX GAMES
    {id: 12, description: 'Sea of Thieves', price: 18.98, currency: ' USD', category: 'xbox', img: 'https://uvejuegos.com/img/caratulas/55799/sea_PC.jpg', stock: 20},
    {id: 13, description: 'Gears of War', price: 22, currency: ' USD', category: 'xbox', img: 'https://media.redadn.es/imagenes/gears-of-war-ultimate-edition_266876.jpg', stock: 20},
    {id: 14, description: 'The Ascent', price: 23.99, currency: ' USD', category: 'xbox', img: 'https://store-images.s-microsoft.com/image/apps.50939.65332188737297236.e956bc32-e423-4920-b547-86181e7ed68d.5d1e69b9-96f7-4cd1-b87e-1e694ac71ee2', stock: 20},
    {id: 15, description: 'Halo 5: Guardians', price: 33.99, currency: ' USD', category: 'xbox', img: 'https://as01.epimg.net/meristation/imagenes/2015/04/29/noticia/1430290800_106326_1532453813_sumario_normal.jpg', stock: 20},
    {id: 16, description: 'Forza Horizon 4', price: 16.74, currency: ' USD', category: 'xbox', img: 'https://media.vandal.net/m/59799/forza-horizon-4-2018102103227_1.jpg', stock: 20},
    {id: 17, description: 'State of Decay 2', price: 13.59, currency: ' USD', category: 'xbox', img: 'https://uvejuegos.com/img/caratulas/57085/State-of-Decay-2-Key-Art.jpg', stock: 20}
]

export const getProducts = (categoryID) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(() => {if (categoryID !== 'all') {
                return products.filter(prod => prod.category === categoryID)
            } else {
                return products
            }})
        }, 300)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 300)
    })
}