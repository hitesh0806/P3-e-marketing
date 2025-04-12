const prodname=document.getElementById('productname');
const prodnquantity=document.getElementById('productquantity');
const prodprice=document.getElementById('productprice');
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
    
    prodname.textContent='Bread';
    prodnquantity.textContent='Quantity: '+a1;
    prodprice.textContent='Price: '+e1;
}
function productbutter()
{
    
    prodname.textContent='Butter';
    prodnquantity.textContent='Quantity: '+a2;
    prodprice.textContent='Price: '+e2;
}
function productcheese()
{
    
    prodname.textContent='Cheese';
    prodnquantity.textContent='Quantity: '+a3;
    prodprice.textContent='Price: '+e3;
}
function productquantityaddbread()
{
    a1++;
    e1=b*a1;
    console.log(a1);
    console.log(e1);
    prodnquantity.textContent='Quantity: '+a1;
    prodprice.textContent='Price: '+e1;
    
}
function productquantitysubtractbread()
{
    a1--;
    e1=b*a1;
    console.log(a1);
    console.log(e1);
    prodnquantity.textContent='Quantity: '+a1;
    prodprice.textContent='Price: '+e1;
    
}
function productquantityaddbutter()
{
    a2++;
    e2=c*a2;
    console.log(a2);
    console.log(e2);
    prodnquantity.textContent='Quantity: '+a2;
    prodprice.textContent='Price: '+e2;
    
}
function productquantitysubtractbutter()
{
    a2--;
    e2=c*a2;
    console.log(a2);
    console.log(e2);
    prodnquantity.textContent='Quantity: '+a2;
    prodprice.textContent='Price: '+e2;
    
}
function productquantityaddcheese()
{
    a3++;
    e3=d*a3;
    console.log(a3);
    console.log(e3);
    prodnquantity.textContent='Quantity: '+a3;
    prodprice.textContent='Price: '+e3;
    
}
function productquantitysubtractcheese()
{
    a3--;
    e3=d*a3;
    console.log(a3);
    console.log(e3);
    prodnquantity.textContent='Quantity: '+a3;
    prodprice.textContent='Price: '+e3;
    
}
function reset()
{
    a1=0;
    a2=0;
    a3=0;
    b=0;
    c=0;
    d=0;
    e1=0;
    e2=0;
    e3=0;
    prodname.textContent='';
    prodnquantity.textContent='';
    prodprice.textContent='';
}