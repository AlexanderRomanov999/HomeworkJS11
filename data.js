const data = `[
    {
        "img": "1.png",
        "name": "ELLERY X M'O CAPSULE",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
        "img": "2.png",
        "name": "ELLERY X M'O CAPSULE",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
        "img": "3.png",
        "name": "ELLERY X M'O CAPSULE",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
        "img": "4.png",
        "name": "ELLERY X M'O CAPSULE",
        "link": "product4.html",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
        "img": "5.png",
        "name": "ELLERY X M'O CAPSULE",
        "link": "product5.html",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
        "img": "6.png",
        "name": "ELLERY X M'O CAPSULE",
        "price": "$52.00",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    }
]`
const products = document.querySelector('.content');
const datajson = JSON.parse(data)
datajson.forEach(element => {
    const product = document.createElement('div');
    const img = document.createElement('img');
    const content = document.createElement('div');
    const name = document.createElement('h1');
    const price = document.createElement('h1');
    const description = document.createElement('h1');
    img.src = element.img;
    name.textContent = element.name;
    price.textContent = element.price;
    description.textContent = element.description;
    product.classList.add('product');
    img.classList.add('image');
    name.classList.add('heading');
    price.classList.add('price');
    description.classList.add('description');
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(price);
    product.appendChild(img);
    product.appendChild(content);
    products.appendChild(product);
});