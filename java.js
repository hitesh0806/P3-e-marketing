const prodname1=document.getElementById('productnamebread');
const prodnquantity1=document.getElementById('productquantitybread');
const prodprice1=document.getElementById('productpricebread');
const prodname2=document.getElementById('productnamebutter');
const prodnquantity2=document.getElementById('productquantitybutter');
const prodprice2=document.getElementById('productpricebutter');
const prodname3=document.getElementById('productnamecheese');
const prodnquantity3=document.getElementById('productquantitycheese');
const prodprice3=document.getElementById('productpricecheese');
let a1=1;
let a2=1;
let a3=1;
let b=20;
let c=50;
let d=80;
let e1=20;
let e2=50;
let e3=80;
function productbread()
{
    
    prodname1.textContent='Bread';
    prodnquantity1.textContent='Quantity: '+a1;
    prodprice1.textContent='Price: '+e1;
}
function productbutter()
{
    
    prodname2.textContent='Butter';
    prodnquantity2.textContent='Quantity: '+a2;
    prodprice2.textContent='Price: '+e2;
}
function productcheese()
{
    
    prodname3.textContent='Cheese';
    prodnquantity3.textContent='Quantity: '+a3;
    prodprice3.textContent='Price: '+e3;
}
function productquantityaddbread()
{
    a1++;
    e1=b*a1;
    console.log(a1);
    console.log(e1);
    prodnquantity1.textContent='Quantity: '+a1;
    prodprice1.textContent='Price: '+e1;
    
}
function productquantitysubtractbread()
{
    a1--;
    e1=b*a1;
    console.log(a1);
    console.log(e1);
    prodnquantity1.textContent='Quantity: '+a1;
    prodprice1.textContent='Price: '+e1;
    
}
function productquantityaddbutter()
{
    a2++;
    e2=c*a2;
    console.log(a2);
    console.log(e2);
    prodnquantity2.textContent='Quantity: '+a2;
    prodprice2.textContent='Price: '+e2;
    
}
function productquantitysubtractbutter()
{
    a2--;
    e2=c*a2;
    console.log(a2);
    console.log(e2);
    prodnquantity2.textContent='Quantity: '+a2;
    prodprice2.textContent='Price: '+e2;
    
}
function productquantityaddcheese()
{
    a3++;
    e3=d*a3;
    console.log(a3);
    console.log(e3);
    prodnquantity3.textContent='Quantity: '+a3;
    prodprice3.textContent='Price: '+e3;
    
}
function productquantitysubtractcheese()
{
    a3--;
    e3=d*a3;
    console.log(a3);
    console.log(e3);
    prodnquantity3.textContent='Quantity: '+a3;
    prodprice3.textContent='Price: '+e3;
    
}
function reset1()
{
    a1=1;
    a2=1;
    a3=1;
    b=20;
    c=50;
    d=80;
    e1=20;
    e2=50;
    e3=80;
    prodname1.textContent='';
    prodnquantity1.textContent='';
    prodprice1.textContent='';
}
function reset2()
{
    a1=1;
    a2=1;
    a3=1;
    b=20;
    c=50;
    d=80;
    e1=20;
    e2=50;
    e3=80;
    prodname2.textContent='';
    prodnquantity2.textContent='';
    prodprice2.textContent='';
}
function reset3()
{
    a1=1;
    a2=1;
    a3=1;
    b=20;
    c=50;
    d=80;
    e1=20;
    e2=50;
    e3=80;
    prodname3.textContent='';
    prodnquantity3.textContent='';
    prodprice3.textContent='';
}