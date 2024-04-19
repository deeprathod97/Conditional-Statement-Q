let amount = 100;
let rate = 10;

if(amount > 100 && rate >= 10){
    let int = (rate/100) * amount;
    let total = amount + int
    let dis = total * (10/100)
    console.log(dis)
    console.log("payable amount ", total - dis)
}else{
    let int = (rate/100) * amount;
    let total = amount + int
    console.log(total)
}