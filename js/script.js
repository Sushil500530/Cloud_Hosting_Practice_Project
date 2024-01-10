
$(document).ready(function handleClick() {
    $("#icon").click(function () {
        $("ul").toggleClass("show");
    });
});


async function handleHosting(event) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const get = loadData(data.slice(0, 10))

}

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

function handlePricing() {
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

