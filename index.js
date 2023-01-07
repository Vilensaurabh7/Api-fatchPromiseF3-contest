
let p=fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
// fatch return promise under a promis that's why we use two then to get the resolveld values.
p.then((value1)=>{
    return value1.json(); // it will convert string object array to simple object array.
}).then((value2)=>{
    var html = "<table class='btr' >";
     value2.map((ele)=>{

        html+="<tr class='btr1'> ";
        html+=`<td><img src=${ele.image} width="25"></td>`;
    html+=`<td >${ele.name}</td>`;
    html+=`<td style="text-transform: uppercase";>${ ele.symbol
    }</td>`;

    html+=`<td>$${ele.current_price}</td>`;
    html+=`<td>$${ele.total_volume}</td>`;
    var perChng=ele.price_change_percentage_24h;
    if(perChng>0)
    html+=`<td style="color:green">${perChng}%</td>`;
    else
    html+=`<td style="color:red">${perChng}%</td>`;
    html+=`<td>Mkt Cap : $${ele.market_cap}</td>`;
    html+="</tr >";
    // html+="<tr >";
    html+=" <td colspan='7'><hr class='hr-style'  >  </td>" 
    // html+="</tr >";
     })
     console.log(value2)

html+="</table>";
var table=document.getElementById('table').innerHTML=html;
})
