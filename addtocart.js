const product = [
    {
        id: 0,
        image: 'img/giay1.jpg',
        title: 'Giày Sneaker Low – top ',
        price: 120,
    },
    {
        id: 1,
        image: 'img/giay2.jpg',
        title: 'Sneaker nam nữ Mid – top',
        price: 60,
    },
    {
        id: 2,
        image: "img/giay3.jpg",
        title: 'Sneaker High – top',
        price: 190,
    },
    {
        id: 3,
        image: "img/giay4.jpg",
        title: 'Giày Sneaker Mule',
        price: 100,
    },
    {
        id: 4,
        image: "img/giay5.jpg",
        title: 'Nike Air Force 1',
        price: 100,
    },
    {
        id: 5,
        image: "img/giay6.jpg",
        title: 'Nike Air Jordan',
        price: 250,
    },
    {
        id: 6,
        image: "img/giay7.jpg",
        title: 'New Balance 1600',
        price: 320,
    },
    {
        id: 7,
        image: "img/giay8.jpg",
        title: 'Adidas Ultra Boost',
        price: 180,
    },
    {
        id: 8,
        image: "img/giay9.jpg",
        title: 'Vans Classics Authentic',
        price: 290,
    },
    {
        id: 9,
        image: "img/giay10.jpg",
        title: 'Nike Air Max',
        price: 300,
    },
    {
        id: 10,
        image: "img/giay11.jpg",
        title: 'Giày Jodar Panda',
        price: 160,
    },
    {
        id: 11,
        image: "img/giay12.jpg",
        title: 'Giày Nikee bản đẹp',
        price: 320,
    },
    {
        id: 12,
        image: "img/giay13.jpg",
        title: 'Giày Nike đỏ',
        price: 220,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Thêm vào giỏ hàng</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Giỏ hàng đang trống";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}