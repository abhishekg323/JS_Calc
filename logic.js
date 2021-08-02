let n1,n2;
let input = ()=>{
    n1=parseFloat(document.getElementById('inp1').value)
    n2=parseFloat(document.getElementById('inp2').value)
}
let output= n => {
    document.getElementById('out').value=n;
}
document.getElementById('add').addEventListener('click',()=>{
    input();
    output(n1+n2);
});
document.getElementById('sub').addEventListener('click',()=>{
    input();
    output(n1-n2);
});
document.getElementById('mul').addEventListener('click',()=>{
    input();
    output(n1*n2);
});
document.getElementById('div').addEventListener('click',()=>{
    input();
    output(n1/n2);
});