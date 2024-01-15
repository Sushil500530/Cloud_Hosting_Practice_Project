
const data = [
    {   
        "id":1,
        "category": "com",
        "card":"Entry",
        "price":9.26,
        "card_expired":"monthly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":20,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM"
        }

    },
    {   
        "id":2,
        "category": "sg",
        "card":"Texicon",
        "price":7.91,
        "card_expired":"yearly",
        "card_suggetion":"Optional Cloud Experience",
        "bonus":10,
        "facility":{
            "first":"Seamless Scaling",
            "second":"Global Reach",
            "third":" 100 GB SSD Storage",
            "fourth":" Enhanced Security",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":3,
        "category": "info",
        "card":"Entry",
        "price":12.15,
        "card_expired":"monthly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":10,
        "facility":{
            "first":"Free SSL Certificates",
            "second":"Unlimited Bandwidth",
            "third":" 24/7 Customer Support",
            "fourth":"Global Reach",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":4,
        "category": "xyz",
        "card":"Business",
        "price":10.15,
        "card_expired":"yearly",
        "card_suggetion":"Easy start on the cloud",
        "bonus":20,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":5,
        "category": "space",
        "card":"Entry",
        "price":9.26,
        "card_expired":"monthly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":10,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":6,
        "category": "com",
        "card":"Business",
        "price":13.36,
        "card_expired":"monthly",
        "card_suggetion":"Easy start on the cloud",
        "bonus":10,
        "facility":{
            "first":"2 CPU Cores",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" Global Reach"
        }

    },
    {   
        "id":7,
        "category": "sg",
        "card":"Entry",
        "price":7.91,
        "card_expired":"monthly",
        "card_suggetion":"Easy start on the cloud",
        "bonus":12,
        "facility":{
            "first":"Enhanced Security",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" Enhanced Security",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":8,
        "category": "info",
        "card":"Business",
        "price":12.15,
        "card_expired":"monthly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":10,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 24/7 Customer Support",
            "fourth":"Global Reach",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":9,
        "category": "xyz",
        "card":"Business",
        "price":17.15,
        "card_expired":"yearly",
        "card_suggetion":"Optional Cloud Experience",
        "bonus":20,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":10,
        "category": "space",
        "card":"Texicon",
        "price":14.26,
        "card_expired":"monthly",
        "card_suggetion":"Easy start on the cloud",
        "bonus":10,
        "facility":{
            "first":"Global Reach",
            "second":"Unlimited Bandwidth",
            "third":" Enhanced Securitye",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":11,
        "category": "com",
        "card":"Entry",
        "price":28.26,
        "card_expired":"yearly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":20,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM"
        }

    },
    {   
        "id":12,
        "category": "sg",
        "card":"Texicon",
        "price":5.91,
        "card_expired":"monthly",
        "card_suggetion":"Optional Cloud Experience",
        "bonus":10,
        "facility":{
            "first":"Seamless Scaling",
            "second":"Global Reach",
            "third":" 100 GB SSD Storage",
            "fourth":" Enhanced Security",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":13,
        "category": "info",
        "card":"Entry",
        "price":32.15,
        "card_expired":"yearly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":10,
        "facility":{
            "first":"Free SSL Certificates",
            "second":"Unlimited Bandwidth",
            "third":" 24/7 Customer Support",
            "fourth":"Global Reach",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":14,
        "category": "xyz",
        "card":"Business",
        "price":8.15,
        "card_expired":"monthly",
        "card_suggetion":"Easy start on the cloud",
        "bonus":20,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    },
    {   
        "id":15,
        "category": "space",
        "card":"Entry",
        "price":29.26,
        "card_expired":"yearly",
        "card_suggetion":"Get Starte to like mind",
        "bonus":10,
        "facility":{
            "first":"Unlimited Websites",
            "second":"Unlimited Bandwidth",
            "third":" 100 GB SSD Storage",
            "fourth":" 3 GB RAM",
            "five":"Specifique Quantity"
        }

    }
]


$(document).ready(function handleClick() {
    $("#icon").click(function () {
        $("ul").toggleClass("show");
    });
});

 
async function handleCom() {
    const cardHeader = document.getElementById('card-container');
    const findData = data?.filter(item => item.category === 'com');
    console.log('clicked button on hosting',findData);
    for(const item of findData){
        const div = document.createElement("div");
        div.classList.add('card');
        div.innerHTML = `
         <div class="">
        <div class="card-header">
          <h1 class="card-for">${item?.card_expired}</h1>
          <h1 class="card-price">
            $${item?.price} <span class="card-expired">/month</span>
            <button class="off-btn">${item?.bonus}% OFF</button>
          </h1>
          <p class="card-suggetion">Easy start on the cloud</p>
        </div>
        <div class="card-item">
          <div class="card-facilites">
            <p><i class="fa-solid fa-check"></i>${item?.facility?.first}</p>
            <p><i class="fa-solid fa-check"></i>${item?.facility?.second}</p>
            <p><i class="fa-solid fa-check"></i>${item?.facility?.third}</p>
            <p><i class="fa-solid fa-check"></i>${item?.facility?.fourth}</p>
          </div>
          <div class="btn-cart">
            <button class="card-btn">BUY NOW</button>
          </div>
        </div>
      </div>
        
        `;
        cardHeader.appendChild(div);
    }

}
handleCom()
function loadData(items) {
    console.log(items);
    const main = document.getElementById('main');
    for (const item of items) {
        console.log(item);
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <div class="details-s">
            <h5 class='hdline'>Post: ${item.title}</h5>
            <p class="dscr">Post Description: ${item.body}</p>
            </div>    
            `;
        main.appendChild(div);
    }
}
function handleVPS() {
    alert('I not understand to click this button how to work?')
}
function handleDomain() {
    alert('I not understand to click this button how to work?')
}
function handlePricing() {
    alert('I not understand to click this button how to work?')
    const main = document.getElementById('l-main');
    console.log('pricing clicked');
    const div = document.createElement('div');
    div.classList.add("item");
    div.innerHTML = `
    <div class="style="disple:none">
    </div>    
    `;
    main.appendChild(div);
}

