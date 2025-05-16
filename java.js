const prodname1=document.getElementById('productnamebread');
const prodnquantity1=document.getElementById('productquantitybread');
const prodprice1=document.getElementById('productpricebread');
const prodname2=document.getElementById('productnamebutter');
const prodnquantity2=document.getElementById('productquantitybutter');
const prodprice2=document.getElementById('productpricebutter');
const prodname3=document.getElementById('productnamecheese');
const prodnquantity3=document.getElementById('productquantitycheese');
const prodprice3=document.getElementById('productpricecheese');
const bread=document.getElementById('bread');
const butter=document.getElementById('butter');
const cheese=document.getElementById('cheese');
let details=JSON.parse(localStorage.getItem('details'))||
{
    a1:0,
    a2:0,
    a3:0,
    b:20,
    c:50,
    d:80,
    e1:0,
    e2:0,
    e3:0,
};
function productbread()
{
    
    prodname1.textContent='Bread';
    prodnquantity1.textContent='Quantity: '+details.a1;
    prodprice1.textContent='Price: '+details.e1;
}
function productbutter()
{
    
    prodname2.textContent='Butter';
    prodnquantity2.textContent='Quantity: '+details.a2;
    prodprice2.textContent='Price: '+details.e2;
}
function productcheese()
{
    
    prodname3.textContent='Cheese';
    prodnquantity3.textContent='Quantity: '+details.a3;
    prodprice3.textContent='Price: '+details.e3;
}
function productquantityaddbread()
{
    e1=20
    details.a1++;
    details.e1=details.b*details.a1;
    prodnquantity1.textContent='Quantity: '+details.a1;
    prodprice1.textContent='Price: '+details.e1;
    
}
function productquantitysubtractbread()
{
    e1=20;
    details.a1--;
    details.e1=details.b*details.a1;
    prodnquantity1.textContent='Quantity: '+details.a1;
    prodprice1.textContent='Price: '+details.e1;
    
}
function productquantityaddbutter()
{
    e2=50;
    details.a2++;
    details.e2=details.c*details.a2;
    prodnquantity2.textContent='Quantity: '+details.a2;
    prodprice2.textContent='Price: '+details.e2;
    
}
function productquantitysubtractbutter()
{
    e2=50;
    details.a2--;
    details.e2=details.c*details.a2;
    prodnquantity2.textContent='Quantity: '+details.a2;
    prodprice2.textContent='Price: '+details.e2;
    
}
function productquantityaddcheese()
{
    e3=80;
    details.a3++;
    details.e3=details.d*details.a3;
    prodnquantity3.textContent='Quantity: '+details.a3;
    prodprice3.textContent='Price: '+details.e3;
    
}
function productquantitysubtractcheese()
{
    e3=80;
    details.a3--;
    details.e3=details.d*details.a3;
    prodnquantity3.textContent='Quantity: '+details.a3;
    prodprice3.textContent='Price: '+details.e3;
    
}
function reset1()
{
    details.a1=0;
    details.a2=0;
    details.a3=0;
    details.b=20;
    details.c=50;
    details.d=80;
    details.e1=0;
    details.e2=0;
    details.e3=0; 
    localStorage.removeItem('details');
    prodname1.textContent='';
    prodnquantity1.textContent='';
    prodprice1.textContent='';
}
function reset2()
{
    details.a1=0;
    details.a2=0;
    details.a3=0;
    details.b=20;
    details.c=50;
    details.d=80;
    details.e1=0;
    details.e2=0;
    details.e3=0;
    localStorage.removeItem('details');
    prodname2.textContent='';
    prodnquantity2.textContent='';
    prodprice2.textContent='';
}
function reset3()
{
    details.a1=0;
    details.a2=0;
    details.a3=0;
    details.b=20;
    details.c=50;
    details.d=80;
    details.e1=0;
    details.e2=0;
    details.e3=0;
    localStorage.removeItem('details');
    prodname3.textContent='';
    prodnquantity3.textContent='';
    prodprice3.textContent='';
}
function addtocart()
{
 localStorage.setItem('details',JSON.stringify(details));
 alert('Added to cart!!');   
}
function viewcart()
{
 window.location.href='index1.html';
}