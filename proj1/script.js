// async function getData(){
//     try{
//         const response = await fetch('https://dummyjson.com/products')
//         if(!response.ok) throw new Error('Cannot fetch Products');
//         const data = await response.json();
//         const list = document.getElementById("products");
//         list.innerHTML = ""
//         data.products.forEach(product => {
//             const li = document.createElement("li");
//           li.textContent = ${product.title} - Rs${product.price}- ${product.category} - ${product.rating};
//           list.appendChild(li);
//         });
//     }
//     catch(error){
//         console.log("Error: ", error.message)
//     }
// }

// getData();

// async function getData() {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) throw new Error('Cannot fetch Products');

//         const data = await response.json();
//         const list = document.getElementById("products");
//         list.innerHTML = "";

//         data.products.forEach(product => {
//             const li = document.createElement("li");
//             li.textContent = `${product.title} - Rs${product.price} - ${product.category} - ${product.rating}`;
//             list.appendChild(li);
//         });
//     } catch (error) {
//         console.log("Error: ", error.message);
//     }
// }

// getData();

async function getData() {
    const grid = document.getElementById("products");
    const status = document.getElementById("status");

    try {
        status.textContent = "Loading products…";
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Cannot fetch Products');

        const data = await response.json();
        grid.innerHTML = "";
        status.style.display = "none"; // Hide the loading message

        data.products.forEach(product => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="card-content">
                    <h2>${product.title}</h2>
                    <div class="price">Rs ${product.price}</div>
                    <p>${product.description}</p>
                </div>
            `;

            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error.message);
        status.textContent = "Failed to load products. Please try again later.";
        status.style.color = "#e55353";
    }
}

getData();
