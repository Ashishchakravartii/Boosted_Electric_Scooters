// let p8Products1List = document.querySelector(".p8-products1-list");
let productList2 = document.querySelector(".productList2");
let productList3 = document.querySelector(".productList3");

// -----------------------------Product Swiper 1---------------------------------------- 

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
        price: "Sold Out"
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
        price: "Sold Out"
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
        price: "Sold Out"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Boosted-Standard-Range-Battery_2000x.jpg?v=1610479045",
        name: "Boosted Standard Range Battery Pack",
        price: "$299.00"
    },

]

let clutter = "";
arr.forEach((clut) => {
    clutter += ` <div >
    <img src="${clut.img}" alt="">
    <h5>${clut.name}</h5>
    <h5>${clut.price}</h5>
 </div>`
})
document.querySelector(".p8-products1-list").innerHTML = clutter;

// -----------------------------Product Swiper 2---------------------------------------- 

let arr1 = [
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/ScreenShot2021-09-21at3.57.38PM_e987837e-eab4-4948-accf-a5d23ef674cd_200x.png?v=1646150961",
        name: "Evolve 6 Inch Inner Tube",
        price: "$15.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Ytool_2000x.webp?v=1648155312",
        name: "Evolve Y Wrench",
        price: "$9.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/GTR_Bamboo_Battery_Large_2048x2048_adc2ea60-3b44-4ee1-a61e-740abebc3ed5_200x.png?v=1646150379",
        name: "Evolve Battery - Bamboo GTR 14AH",
        price: "Sold Out"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/SmallBat_2000x.webp?v=1648152431",
        name: "Evolve Battery - Bamboo GTR 4AH",
        price: "$50.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Hadean107_200x.webp?v=1652898792",
        name: "Evolve Hadean Series Kits",
        price: "$280.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Phaze_Remote_1_2048x2048_350x350_fdbde080-25e4-45bd-9ed7-6b8d5d65b1e1_2000x.png?v=1663627512",
        name: "Evolve Phaze Remote",
        price: "$150.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Calikites-LastMilesSF-Evolve-GTR-Street-Wheels-97-Purple_927f3635-f9a1-420d-89ad-6c8b91346980_2000x.jpg?v=1646149772",
        name: "Evolve GTR Street Wheels",
        price: "Sold Out"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Calikites-LastMileSF-Evolve-Electric-Skateboard-38T-Upgrade-Kit_189a039a-39bb-4153-a8cb-6d81c095732f_2000x.png?v=1651699431",
        name: "Evolve Aluminum Kit 38T",
        price: "$94.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Calikites-LastMileSF-Evolve-Electric-Skateboard-Carbon-GT-Deck_2590593b-e543-4f36-8aa1-fe95e78bb94e_2000x.jpg?v=1646149298",
        name: "Evolve Decks",
        price: "$550.00"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/BashGuards_2000x.webp?v=1677780822",
        name: "Evolve Bash Guard Kit",
        price: "$75.00"
    },


]

let clutter2 = "";
arr1.forEach((elem) => {
    clutter2 += ` <div >
    <img src="${elem.img}" alt="">
    <h5>${elem.name}</h5>
    <h5>${elem.price}</h5>
</div>`
})

productList2.innerHTML = clutter2;

// -----------------------------Product Swiper 3---------------------------------------- 

arr3 = [
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/dualtron_thunder_brake_pads_2000x.jpg?v=1655245395",
        name: "Brake Pads",
        price: "$15.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Dualtron_Fast_Charger_2000x.jpg?v=1655245402",
        name: "MiniMotors Fast Chargers",
        price: "Sold Out"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Daultron_Thunder_Tire_2000x.jpg?v=1655245634",
        name: "Mini Motors Replacement Tires",
        price: "$50.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Carbon_Revo_Tow_Handle_2000x.jpg?v=1655245509",
        name: "Carbon Revo Dualtron Tow Handle",
        price: "$75.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Standard_Charger_2000x.jpg?v=1655245646",
        name: "Mini Motors Charger",
        price: "$745.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Dualtron_Fingerprint_Reader_2000x.png?v=1655245989",
        name: "Dualtron Fingerprint Reader",
        price: "Sold Out"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/CarbonRevo_Rear_Mudguard_Top_Thunder_DT3_2000x.jpg?v=1655245995",
        name: "CarbonRevo Dualtron",
        price: "$485.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/CarbonRevo_Washers_2000x.jpg?v=1655245881",
        name: "CarbonRevo",
        price: "$10.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Carbonrevo_Upper_Kiddy_Bar_profile_2000x.jpg?v=1655245747",
        name: "Upper Kiddy Bar",
        price: "$80.00"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/CarbonRevo_Sliders_2000x.jpg?v=1655245772",
        name: "CarbonRevo Dualtron Sliders",
        price: "$20.00"
    },
]

let clutter3 = "";
arr3.forEach((elem) => {
    clutter3 += ` <div >
  <img src="${elem.img}" alt="">
  <h5>${elem.name}</h5>
  <h5>${elem.price}</h5>
</div>`
})

productList3.innerHTML = clutter3;


// ================================================================================

let menu= document.querySelector(".menu");
let menuI= document.querySelector(".menuI");
let cross= document.querySelector(".cross");
let moreInfo= document.querySelector(".moreInfo");
let moreInfo2= document.querySelector(".moreInfo2");
let menuOptions= document.querySelector(".menuOptions");

menuI.addEventListener("click",()=>{
    menuOptions.style.left="0";
    menuI.style.display="none";
    cross.style.display="block"
})

cross.addEventListener("click",()=>{
    menuOptions.style.left="-100%";
    menuI.style.display="block";
    cross.style.display="none"
    
})
moreInfo.addEventListener("click",()=>{
    menuOptions.style.left="-100%";
    menuI.style.display="block";
    cross.style.display="none"

})
moreInfo2.addEventListener("click",()=>{
    menuOptions.style.left="-100%";
    menuI.style.display="block";
    cross.style.display="none"

})









