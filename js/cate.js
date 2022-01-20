var count = 0;
var btn = document.getElementById("btn_cu");
var disp = document.getElementById("display");

btn.onclick = function () {
    count++;
    disp.innerHTML = count;
}


const get_one = (element) => document.querySelector(element);
const product_list = get_one('#product_list')
const damoData = [
    {
        id: 0,
        name: 'لانك الله',
        title: 'كتاب الكتروني',
        price: "19.22",
        img: "img/book (1).jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'كلي ونامي ',
        price: "19.22",
        img: "img/book (2).jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: ' نون النسوه',
        price: "19.22",
        img: "img/book (3).jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'تخاريف  ',
        price: "19.22",
        img: "img/book (1).jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'علم النفس  ',
        price: "19.22",
        img: "img/book (2).jpg",
    },
    {
        id: 0,
        title: 'كتاب الكتروني',
        name: 'علم النفس  ',
        price: "19.22",
        img:"img/book (3).jpg",
    },
]
window.onload = () => {
    _fetchData(damoData)
}
const _fetchData = (arr) => {
    arr.forEach(element => {
        let li_element = document.createElement('div');
        li_element.innerHTML = `
        
        
          <div class="card_sal">
          <a href="details.html"><img src="img/book (1).jpg" ></a>  
            <h1> ${element.title}</h1>
            <p> ${element.name} </p>
            <strong class="price"> ${element.price} </strong>
            <p>شامل الضريبة</p>
            <div >
                <button class="card_icon2" ><img src="svg/svgexport-54.svg"></button>
                <button class="card_icon"  id="btn_cu"><img src="svg/cart-1.svg" ></button>
                <button class="card_icon2"><img src="svg/svgexport-55.svg" ></button>
            </div>    
</div>
      `;
        li_element.classList.add('box')
        product_list.append(li_element);
    })
    console.log('i am the loop element', arr);
}
// get_one('#search_btn').addEventListener('click', (e) => {
// })
// document.addEventListener('keydown')
get_one('#search_input').addEventListener('keydown', async (e) => {
    product_list.innerHTML = '';
    console.log(e.target.value);
    let filter = damoData.filter(element => {
        if (element.name.includes(e.target.value))
            return element
    })
    console.log('[filter ] , ', filter);
    await _fetchData(filter);
    if (e.target.value.length === '') {
        _fetchData(damoData)
    }
})







