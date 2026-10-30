const PRODUCTS=[
{id:1,c:'masalas',name:'Kerala Chicken Curry',size:'100 g',price:5.90,desc:'A warm, rounded blend for comforting Kerala-style chicken curry.',ing:['Coriander','Red chilli','Turmeric','Black pepper','Cumin','Fennel','Fenugreek','Cinnamon','Clove','Cardamom']},
{id:2,c:'masalas',name:'Kerala Roast & Fry',size:'100 g',price:5.90,desc:'Bold savoury spice for roasts, pan fries and quick marinades.',ing:['Red chilli','Coriander','Black pepper','Turmeric','Fennel','Cumin','Ginger','Garlic','Curry leaf']},
{id:3,c:'masalas',name:'Sambar Masala',size:'100 g',price:4.90,desc:'A balanced South Indian blend for lentil and vegetable sambar.',ing:['Coriander','Red chilli','Cumin','Fenugreek','Mustard seed','Black pepper','Asafoetida','Curry leaf','Turmeric']},
{id:4,c:'masalas',name:'Garam Masala',size:'100 g',price:4.90,desc:'A fragrant finishing blend for curries, rice, vegetables and lentils.',ing:['Coriander','Cumin','Cinnamon','Clove','Cardamom','Black pepper','Fennel','Nutmeg','Mace','Star anise']},
{id:5,c:'masalas',name:'Fish Curry Masala',size:'100 g',price:5.90,desc:'Tangy, aromatic depth for Kerala fish curry and seafood dishes.',ing:['Coriander','Red chilli','Turmeric','Fenugreek','Black pepper','Cumin','Ginger','Curry leaf']},
{id:6,c:'masalas',name:'Meat Masala',size:'100 g',price:5.90,desc:'Full-bodied spice for slow-cooked meat curries and roasts.',ing:['Coriander','Red chilli','Black pepper','Cumin','Fennel','Cinnamon','Clove','Cardamom','Turmeric']},
{id:7,c:'masalas',name:'Beef Ularthiyathu Masala',size:'100 g',price:5.90,desc:'Peppery Kerala-style seasoning for rich dry-fried beef.',ing:['Black pepper','Coriander','Red chilli','Fennel','Cumin','Cinnamon','Clove','Cardamom','Curry leaf']},
{id:8,c:'masalas',name:'Vegetable Kurma Masala',size:'100 g',price:4.90,desc:'Gentle aromatic spice for creamy vegetable kurma.',ing:['Coriander','Fennel','Cumin','Cardamom','Cinnamon','Clove','Turmeric','Nutmeg']},
{id:9,c:'masalas',name:'Rasam Powder',size:'100 g',price:4.50,desc:'Bright peppery seasoning for comforting rasam.',ing:['Coriander','Cumin','Black pepper','Red chilli','Fenugreek','Turmeric','Asafoetida','Curry leaf']},
{id:10,c:'masalas',name:'Kerala Biriyani Masala',size:'100 g',price:5.90,desc:'Layered whole-spice warmth for Kerala biriyani and fragrant rice.',ing:['Cardamom','Cinnamon','Clove','Star anise','Mace','Nutmeg','Fennel','Cumin','Black pepper','Bay leaf']},
{id:11,c:'masalas',name:'Egg Roast Masala',size:'100 g',price:4.90,desc:'A savoury blend for Kerala egg roast and onion masala.',ing:['Coriander','Red chilli','Fennel','Black pepper','Turmeric','Cumin','Cinnamon']},
{id:12,c:'masalas',name:'Avial Spice Blend',size:'100 g',price:4.90,desc:'Gentle seasoning for Kerala mixed vegetables and coconut.',ing:['Cumin','Turmeric','Curry leaf','Green chilli powder','Fenugreek','Dried coconut']},
{id:13,c:'spices',name:'Black Pepper',size:'75 g',price:5.90,desc:'Bold aromatic pepper for grinding, tempering and finishing.',ing:['Black pepper']},
{id:14,c:'spices',name:'Green Cardamom',size:'50 g',price:6.90,desc:'Floral green cardamom pods for curries, rice, tea and desserts.',ing:['Green cardamom']},
{id:15,c:'spices',name:'Cloves',size:'50 g',price:4.90,desc:'Warm whole cloves for rice, curries, tea and baking.',ing:['Cloves']},
{id:16,c:'spices',name:'Cinnamon',size:'50 g',price:4.50,desc:'Sweet woody cinnamon for savoury and sweet cooking.',ing:['Cinnamon']},
{id:17,c:'spices',name:'Cumin',size:'100 g',price:3.90,desc:'Earthy cumin for tempering, roasting and grinding.',ing:['Cumin']},
{id:18,c:'spices',name:'Coriander',size:'100 g',price:3.90,desc:'Citrusy coriander for curry bases and spice blends.',ing:['Coriander']},
{id:19,c:'spices',name:'Turmeric',size:'100 g',price:3.90,desc:'Golden turmeric powder for colour and earthy warmth.',ing:['Turmeric']},
{id:20,c:'spices',name:'Fennel',size:'100 g',price:3.90,desc:'Sweet aromatic fennel seed for Kerala meat and vegetable dishes.',ing:['Fennel seed']},
{id:21,c:'spices',name:'Fenugreek',size:'100 g',price:3.50,desc:'Distinctive fenugreek seed for curries, pickles and tempering.',ing:['Fenugreek seed']},
{id:22,c:'spices',name:'Mustard Seed',size:'100 g',price:3.50,desc:'Black mustard seed for classic South Indian tempering.',ing:['Black mustard seed']},
{id:23,c:'spices',name:'Red Chilli',size:'100 g',price:4.50,desc:'Full-flavoured red chilli powder for heat and depth.',ing:['Red chilli']},
{id:24,c:'spices',name:'Kashmiri Chilli',size:'100 g',price:4.90,desc:'Vibrant mild chilli for rich colour and rounded warmth.',ing:['Kashmiri chilli']},
{id:25,c:'spices',name:'Star Anise',size:'50 g',price:4.90,desc:'Sweet liquorice-like whole spice for rice and slow cooking.',ing:['Star anise']},
{id:26,c:'spices',name:'Nutmeg',size:'50 g',price:4.50,desc:'Warm whole nutmeg for masalas, desserts and drinks.',ing:['Nutmeg']},
{id:27,c:'spices',name:'Mace',size:'25 g',price:6.90,desc:'Delicate aromatic mace for biriyani and premium blends.',ing:['Mace']},
{id:28,c:'spices',name:'Asafoetida',size:'50 g',price:4.50,desc:'A pungent savoury seasoning for lentils and vegetable dishes.',ing:['Asafoetida','Rice flour']},
{id:29,c:'specialities',name:'Dried Curry Leaves',size:'25 g',price:3.90,desc:'Fragrant dried curry leaves for tempering and finishing.',ing:['Dried curry leaves']},
{id:30,c:'specialities',name:'Malabar Tamarind / Kudampuli',size:'100 g',price:5.90,desc:'Smoky souring fruit traditionally used in Kerala fish curry.',ing:['Dried Malabar tamarind (Garcinia cambogia)']},
{id:31,c:'specialities',name:'Ginger Powder',size:'100 g',price:4.50,desc:'Convenient warming ginger for cooking, baking and drinks.',ing:['Dried ginger']},
{id:32,c:'specialities',name:'Garlic Powder',size:'100 g',price:4.50,desc:'Savoury garlic flavour for marinades and everyday cooking.',ing:['Dried garlic']},
{id:33,c:'specialities',name:'Dried Coconut Flakes',size:'150 g',price:3.90,desc:'Dried coconut flakes for curries, chutneys and desserts.',ing:['Coconut']},
{id:34,c:'specialities',name:'Idiyappam Flour',size:'500 g',price:4.90,desc:'Fine rice flour prepared for soft Kerala string hoppers.',ing:['Rice flour']},
{id:35,c:'specialities',name:'Puttu Podi',size:'500 g',price:4.90,desc:'Roasted rice flour prepared for traditional steamed puttu.',ing:['Roasted rice flour']},
{id:36,c:'specialities',name:'Appam Mix',size:'500 g',price:4.90,desc:'A convenient base for soft-centred, crisp-edged appam.',ing:['Rice flour','Yeast','Sugar','Salt']},
{id:37,c:'specialities',name:'Kerala Banana Chips',size:'150 g',price:3.90,desc:'Crisp Nendran banana chips inspired by Kerala tea-time snacking.',ing:['Nendran banana','Coconut oil','Turmeric','Salt']},
{id:38,c:'specialities',name:'Tapioca Chips',size:'150 g',price:3.90,desc:'Crunchy Kerala-style tapioca chips with gentle chilli warmth.',ing:['Tapioca','Coconut oil','Red chilli','Salt']},
{id:39,c:'specialities',name:'Kerala Tea Masala',size:'75 g',price:4.90,desc:'A warming aromatic blend for spiced milk tea.',ing:['Cardamom','Cinnamon','Clove','Ginger','Black pepper','Nutmeg']},
{id:40,c:'specialities',name:'Payasam Spice Blend',size:'75 g',price:4.90,desc:'A fragrant finishing blend for Kerala-style payasam.',ing:['Cardamom','Cinnamon','Clove','Nutmeg','Dried ginger']}
];

const categoryNames={masalas:'Signature masala',spices:'Spice essential',specialities:'Kerala speciality'};
const productById=id=>PRODUCTS.find(p=>p.id===Number(id));
const money=value=>new Intl.NumberFormat('en-FR',{style:'currency',currency:'EUR'}).format(value);
let cart=JSON.parse(localStorage.getItem('feastLabCart')||'{}');
let activeFilter='all';

function renderShop(){
  document.querySelectorAll('.catalogue-group').forEach(group=>{
    const category=group.dataset.category;
    const list=group.querySelector('ul');
    list.className='shop-list';
    list.innerHTML=PRODUCTS.filter(p=>p.c===category).map(p=>`<li class="shop-product" data-product-id="${p.id}" data-search="${(p.name+' '+p.ing.join(' ')).toLowerCase()}"><div class="shop-product-top"><span class="shop-product-number">${String(p.id).padStart(2,'0')}</span><span class="shop-product-category">${categoryNames[p.c]}</span></div><h4>${p.name}</h4><div class="shop-product-meta">${p.size} · ${p.ing.length===1?'Single ingredient':p.ing.length+' spices & ingredients'}</div><div class="shop-product-price">${money(p.price)}</div><div class="shop-product-actions"><button class="view-product" data-id="${p.id}" type="button">Ingredients</button><button class="add-cart" data-id="${p.id}" type="button">Add to cart</button></div></li>`).join('');
  });
  document.querySelectorAll('.product-card').forEach((card,index)=>{if(index<4&&!card.querySelector('.featured-add')){card.insertAdjacentHTML('beforeend',`<button class="featured-add" data-id="${index+1}" type="button">Add to cart · ${money(PRODUCTS[index].price)}</button>`);}});
}

function openProduct(id){
  const p=productById(id); if(!p)return;
  document.querySelector('#product-dialog-content').innerHTML=`<div class="product-detail"><div class="detail-pack"><span>FEAST<br>LAB</span></div><div class="detail-copy"><p class="detail-cat">${categoryNames[p.c]} · ${p.size}</p><h2>${p.name}</h2><div><span class="detail-price">${money(p.price)}</span><span class="detail-size">per pack</span></div><p>${p.desc}</p><div class="ingredient-box"><h3>Spices & ingredients</h3><p>${p.ing.join(' · ')}</p></div><p class="detail-note">Ingredient information is a product summary. The final package label governs the exact recipe and allergen information.</p><button class="checkout-button dialog-add" data-id="${p.id}" type="button">Add to cart · ${money(p.price)}</button></div></div>`;
  document.querySelector('#product-dialog').showModal();
}

function saveCart(){localStorage.setItem('feastLabCart',JSON.stringify(cart));renderCart();}
function addToCart(id){cart[id]=(cart[id]||0)+1;saveCart();openCart();}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];saveCart();}
function cartEntries(){return Object.entries(cart).map(([id,qty])=>({p:productById(id),qty})).filter(x=>x.p);}
function renderCart(){
  const entries=cartEntries(); const total=entries.reduce((sum,x)=>sum+x.p.price*x.qty,0); const count=entries.reduce((sum,x)=>sum+x.qty,0);
  document.querySelector('#cart-count').textContent=count;
  document.querySelector('#cart-total').textContent=money(total);
  document.querySelector('#cart-empty').hidden=entries.length>0;
  document.querySelector('#checkout-button').disabled=entries.length===0;
  document.querySelector('#cart-items').innerHTML=entries.map(({p,qty})=>`<div class="cart-line"><div><h3>${p.name}</h3><p>${p.size} · ${money(p.price)} each</p><div class="cart-controls"><button data-qty="-1" data-id="${p.id}" aria-label="Remove one">−</button><strong>${qty}</strong><button data-qty="1" data-id="${p.id}" aria-label="Add one">+</button><button class="remove-item" data-remove="${p.id}">Remove</button></div></div><div class="cart-line-total">${money(p.price*qty)}</div></div>`).join('');
}
function openCart(){document.querySelector('#drawer-backdrop').hidden=false;document.querySelector('#cart-drawer').classList.add('open');document.querySelector('#cart-drawer').setAttribute('aria-hidden','false');}
function closeCart(){document.querySelector('#drawer-backdrop').hidden=true;document.querySelector('#cart-drawer').classList.remove('open');document.querySelector('#cart-drawer').setAttribute('aria-hidden','true');}
function orderText(){const entries=cartEntries();const total=entries.reduce((sum,x)=>sum+x.p.price*x.qty,0);return `FEAST LAB ORDER REQUEST\n\n${entries.map(({p,qty})=>`${qty} × ${p.name} (${p.size}) — ${money(p.price*qty)}`).join('\n')}\n\nSubtotal: ${money(total)}\nDelivery: to be confirmed`}
function applyFilters(){const q=document.querySelector('#shop-search').value.trim().toLowerCase();document.querySelectorAll('.catalogue-group').forEach(group=>{let visible=0;group.querySelectorAll('.shop-product').forEach(card=>{const show=(activeFilter==='all'||group.dataset.category===activeFilter)&&(!q||card.dataset.search.includes(q));card.hidden=!show;if(show)visible++;});group.classList.toggle('is-hidden',visible===0);});}

renderShop();renderCart();
document.addEventListener('click',event=>{
  const view=event.target.closest('.view-product'); if(view)openProduct(view.dataset.id);
  const add=event.target.closest('.add-cart,.featured-add,.dialog-add'); if(add){addToCart(add.dataset.id);const dialog=event.target.closest('dialog');if(dialog)dialog.close();}
  const qty=event.target.closest('[data-qty]'); if(qty)changeQty(qty.dataset.id,Number(qty.dataset.qty));
  const remove=event.target.closest('[data-remove]'); if(remove){delete cart[remove.dataset.remove];saveCart();}
  if(event.target.matches('[data-dialog-close]'))document.querySelector('#product-dialog').close();
  if(event.target.matches('[data-checkout-close]'))document.querySelector('#checkout-dialog').close();
  if(event.target.matches('[data-close-cart]'))closeCart();
});
document.querySelector('#open-cart').addEventListener('click',openCart);document.querySelector('#close-cart').addEventListener('click',closeCart);document.querySelector('#drawer-backdrop').addEventListener('click',closeCart);
document.querySelector('#shop-search').addEventListener('input',applyFilters);
document.querySelectorAll('.shop-filters button').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;document.querySelectorAll('.shop-filters button').forEach(b=>b.classList.toggle('active',b===button));applyFilters();}));
document.querySelector('#checkout-button').addEventListener('click',()=>{const text=orderText();document.querySelector('#order-summary').textContent=text;closeCart();document.querySelector('#checkout-dialog').showModal();});
document.querySelector('#copy-order').addEventListener('click',async()=>{await navigator.clipboard.writeText(orderText());document.querySelector('#copy-status').textContent='Order summary copied. Send it to Feast Lab through your preferred contact channel.';});
