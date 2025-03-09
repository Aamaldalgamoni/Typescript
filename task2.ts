// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

//****task1*******/
// interface person{
// name:string;
// age:number;
// }

// const p:person={name:"amal",age:22};
// if(p.age>18)
// {
//     console.log("Adult");
// }else{
//     console.log("Minor")
// }
//******task2*****/
// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// interface Teacher{
//     name:string;
//     subject:string[];
// }

// const t:Teacher={
// name:"marah",
// subject:["math","sience","english"]
// }
 
// console.log(t);

//*****task3*******/
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface products{
//     name:string;
//     price:number;
//     quantity:number;
// }
// const product:products[]=[
//     {name:"a",price:10,quantity:12},
//     {name:"b",price:20,quantity:15},
//     {name:"c",price:30,quantity:18}
// ]
// // product.forEach(product=>){
// //     if(product.quantity=0.015)
// // }
// for(let i=0;i<product.length;i++){
//     if(product[i].quantity>5){
//         product[i].price -= product[i].price * 0.15;


//     }
// }
// console.log(product);

//********task4******/
// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product 


interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
}


let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");


function displayProducts(): void {
  const container = document.getElementById("product-cards-container");
  if (container) {
    container.innerHTML = ""; 

 
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

     
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Quantity:</strong> ${product.quantity}</p>
      `;

      container.appendChild(card); 
    });
  }
}


const form = document.getElementById("product-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  
  const name = (document.getElementById("product-name") as HTMLInputElement).value;
  const description = (document.getElementById("product-description") as HTMLInputElement).value;
  const price = parseFloat((document.getElementById("product-price") as HTMLInputElement).value);
  const quantity = parseInt((document.getElementById("product-quantity") as HTMLInputElement).value);


  const newProduct: Product = { name, description, price, quantity };

  
  products.push(newProduct);

 
  localStorage.setItem("products", JSON.stringify(products));

  
  form.reset();

  
  displayProducts();
});


displayProducts();

  