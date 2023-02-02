let i = Math.round(Math.random(0,1)*100) - 1
//console.log(i);
let person = prompt("Nhập số ngẫu nhiên",0)
console.log(person);
if(person > i){
    console.log("Cần nhập số nhỏ hơn")
}
else if(person < i){
    console.log("Cần nhập số lớn hơn")
}
else{
    console.log("Đúng");
}
