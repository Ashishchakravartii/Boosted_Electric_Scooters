let p8Products1List = document.querySelector(".p8-products1-list");

let arr = [
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/08_05b1fee2-706b-4089-88da-e87820d5e8c0_200x.jpg?v=1610483133",
        name: "Boosted Rev Kickstand",
        price: "$25.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/revmotorcontroller_200x.jpg?v=1610483001",
        name: "Boosted Rev Motor Driver (ESC)",
        price: "$399.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Boosted-USA-Boosted-Rev-Brake-Caliper-Only-No-Hardware_400x.jpg?v=1610483609",
        name: "Boosted Rev Caliper Kit",
        price: "$45.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/10_200x.jpg?v=1610482284",
        name: "Boosted Stealth Deck and Wires",
        price: "$299.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boostedmotor_200x.jpg?v=1610484214",
        name: "Boosted Motor Kit",
        price: "$119.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/kyson-dana-accessories-web-39_200x.jpg?v=1610485546",
        name: "Boosted Charger",
        price:"$159.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/kyson-dana-accessories-web-28_200x.jpg?v=1610485653",
        name: "Boosted Belt Kit",
        price: "$25.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/ShredlightComboPack_200x.jpg?v=1610479288",
        name: "Shred Lights for Boosted Boards",
        price: "$109.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/kyson-dana-accessories-web-32_200x.jpg?v=1610482643",
        name: "Boosted Skid Plates",
        price: "$20.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Boosted-Standard-Range-Battery_2000x.jpg?v=1610479045",
        name: "Boosted Standard Range Battery Pack",
        price: "$299.00"
    },

]

let clutter="";
arr.forEach((clutter)=>{
     clutter+=` <div>
     <img src="${arr.img}" alt="">
     <h5>${arr.name}</h5>
     <h5>${arr.price}</h5>
 </div>`
})

p8Products1List.innerHTML=clutter;

