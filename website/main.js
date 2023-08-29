let shop =document.getElementById ('shop');

let shopItemsData = [{

    id: "qwe",
    name: "Casual Shirt",
    price:45,
    desc:"lorem ipsum dolr sit amet consectetur adipisicing.",
    img:"Picture 10.jpg",
},{
    id: "asd",
    name: "Office shirt",
    price:100,
    desc:"lorem ipsum dolr sit amet consectetur adipisicing.",
    img:"Picture 4.jpg",  
},{
    id: "yuu",
    name: "T-shirt",
    price:25,
    desc:"lorem ipsum dolr sit amet consectetur adipisicing.",
    img:"Picture 12.jpg",
},{
    id: "tyu",
    name: "Mens suits",
    price:300,
    desc:" sit amet consectetur adipisicing.",
    img: "Picture 14.jpg",
}];

 let basket =JSON.parse(localStorage.getItem("data")) || [];



 
// console.log(shop);

let generateShop = () => {
    return (shop.innerHTML =shopItemsData.map((x)=>{
        let {id, name, price,desc,img} = x
        let search = basket.find((x) => x.id === id) || []
       return `
    
       <div id=Product-id-${id} class="item">
       <img width="220" src="${img}" />
       <div class="details">
         <h3>${name}</h3>
   
         <!-- how to write word using lorem plus number of -->
         <p>${desc}</p>
         <div class="price-quantity">
           <h2>$ ${price}</h2>
           <div class="buttons">
             <i onclick="decrement(${id})"class="bi bi-dash-lg"></i>
             <div id= ${id} class="quantity">
             ${search.item === undefined? 0: search.item}
             </div>
   
             <i onclick ="increment(${id})" class="bi bi-plus-lg"></i>
           </div>
         </div>
       </div>
     </div>`;
    }).join(""));
}
generateShop();

let increment = (id) =>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
     
    if (search === undefined) {
        basket.push({
            id:selectedItem.id,
            item: 1,
        });
    } 
    else{
        search.item += 1;

     };
     localStorage.setItem
   

    // console.log (basket);
    update(selectedItem.id); 
};



let decrement = (id) =>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
     
    if (search.item === 0) return;
        
    
    else{
        search.item -= 1;
    };
// localStorage.setItem("data", JSON.stringify(basket));
  
    // console.log (basket); 
    update (selectedItem.id);
};

    
// code for the update of the quantity

let update =(id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");

    // adding all the item to basket top

    cartIcon. innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);

   
   
};
