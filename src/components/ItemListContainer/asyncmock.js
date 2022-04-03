const products = [
    {id: 0, description: 'Grand Theft Auto V', price: 15, currency: ' USD', category: 'PC', img: 'https://i.3djuegos.com/juegos/5065/grand_theft_auto_v/fotos/ficha/grand_theft_auto_v-2654943.jpg', stock: 20},
    {id: 1, description: 'RDR2', price: 32, currency: ' USD', category: 'PC', img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3', stock: 20},
    {id: 2, description: 'Rainbow Six Siege', price: 10.99, currency: ' USD', category: 'PC', img: 'https://www.ecured.cu/images/7/7b/Rainbow_Six_Siege_Cover.jpg', stock: 20},
    {id: 3, description: 'Death Stranding', price: 59.99, currency: ' USD', category: 'PC', img: 'https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_Tall-1280x1440-5a96ed93665756b28f6d70e65266e64c.jpg', stock: 20},
    {id: 4, description: 'Resident Evil 3 Remake', price: 35, currency: ' USD', category: 'PC', img: 'https://www.hd-tecnologia.com/imagenes/articulos/2019/12/Encuentran-las-portadas-de-Resident-Evil-3-Remake-en-la-PlayStation-Store-1.jpg', stock: 20},
    {id: 5, description: 'Dying Light 2', price: 55, currency: ' USD', category: 'PC', img: 'https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png', stock: 20}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}