var xhttp = new XMLHttpRequest(); //跟伺服器要求資料的物件
xhttp.open("GET", "./data.txt");  //開啟檔案("取得'，"檔案路徑"，非同步處理)
xhttp.send();                     //傳送

//載入完成後會執行
xhttp.onload = () => {
    document.getElementById("content").innerHTML = xhttp.responseText;
}


//JSON
var product = document.getElementById("product");
var price = document.getElementById("price")

var xhrJson = new XMLHttpRequest();

xhrJson.open("GET", "./data.json");
xhrJson.send();

xhrJson.onload = () => {
    //JOSN.格式(想轉為 JSON 內容)
    JSON.parse(xhrJson.responseText);

    product.innerText = json["product"];
    price.innerText = json["price"];
    
}