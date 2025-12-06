
const imageSets = {
azul:["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900","https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900","https://images.unsplash.com/photo-1587814962807-6c040d1645dd?w=900"],
negro:["https://images.unsplash.com/photo-1590431259503-3ad3c99c0403?w=900","https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=900","https://images.unsplash.com/photo-1600185365899-2ff9fe7a9325?w=900"],
gris:["https://images.unsplash.com/photo-1618354691637-a7b88e843f90?w=900","https://images.unsplash.com/photo-1581291519195-ef11498d1cf9?w=900","https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=900"],
rojo:["https://images.unsplash.com/photo-1581091215367-59ab6a9bd122?w=900","https://images.unsplash.com/photo-1572635196237-11d0f93d0f30?w=900","https://images.unsplash.com/photo-1598401754979-780da8d3d11e?w=900"]
};
function loadThumbnails(colorKey){
const container=document.getElementById("thumb-container");container.innerHTML="";
imageSets[colorKey].forEach((src,i)=>{
const img=document.createElement("img");img.src=src;img.className="thumb"+(i===0?" active":"");img.onclick=()=>changeMainImage(src,img);container.appendChild(img);
});
document.getElementById("main-image").src=imageSets[colorKey][0];
}
function changeMainImage(src,el){const main=document.getElementById("main-image");main.style.opacity=0;setTimeout(()=>{main.src=src;main.style.opacity=1;},200);document.querySelectorAll(".thumb").forEach(t=>t.classList.remove("active"));el.classList.add("active");}
loadThumbnails("azul");

let basePrice=22705,sizeExtra=0,quantity=1,couponActive=null;
function selectColor(el){document.querySelectorAll(".color-option").forEach(c=>c.classList.remove("active"));el.classList.add("active");basePrice=Number(el.dataset.price);document.getElementById("selected-color").textContent=el.dataset.color;loadThumbnails(el.dataset.images);updatePrice();}
function selectSize(el){document.querySelectorAll(".size-option").forEach(s=>s.classList.remove("active"));el.classList.add("active");sizeExtra=Number(el.dataset.priceExtra);document.getElementById("selected-size").textContent=el.dataset.size;updatePrice();}
function increaseQuantity(){quantity++;document.getElementById("quantity").textContent=quantity;updatePrice();}
function decreaseQuantity(){if(quantity>1){quantity--;document.getElementById("quantity").textContent=quantity;updatePrice();}}

const coupons={ "MAGIC10":{type:"percent",value:10}, "BELLEZA15":{type:"percent",value:15}, "SUPER25":{type:"percent",value:25}, "DESCUENTO5000":{type:"fixed",value:5000}};
function applyCoupon(){const code=document.getElementById("coupon-input").value.trim().toUpperCase();const msg=document.getElementById("coupon-message");if(!coupons[code]){msg.style.display="block";msg.style.color="red";msg.textContent="Cupón inválido.";return;}couponActive=coupons[code];msg.style.display="block";msg.style.color="green";msg.textContent="Cupón aplicado ✔";updatePrice();}

function updatePrice(){let subtotal=(basePrice+sizeExtra)*quantity;let final=subtotal;let discountInfo="";if(couponActive){if(couponActive.type==="percent"){let d=subtotal*(couponActive.value/100);final-=d;discountInfo=`Ahorras ${couponActive.value}% ($${Math.round(d).toLocaleString("es-CO")})`;}else{final-=couponActive.value;discountInfo=`Ahorras $${couponActive.value.toLocaleString("es-CO")}`;}}document.getElementById("total-price").textContent="$"+Math.round(final).toLocaleString("es-CO");const s=document.getElementById("savings-info");s.textContent=discountInfo;s.style.display=discountInfo?"block":"none";}
updatePrice();

function openTab(btn,id){document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));btn.classList.add("active");document.getElementById(id).classList.add("active");}

const toggle=document.getElementById("darkToggle");if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark");toggle.textContent="☀️";}toggle.onclick=()=>{document.body.classList.toggle("dark");const isDark=document.body.classList.contains("dark");toggle.textContent=isDark?"☀️":"🌙";localStorage.setItem("theme",isDark?"dark":"light");};
