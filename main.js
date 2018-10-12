myButton.addEventListener("click", function() {
    let request = new XMLHttpRequest();
    request.open("GET", "/xxx");    //  配置request
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState === 4) {  //  加载完成
            if(request.status >= 200 && request.status < 300) {
                let obj = JSON.parse(request.responseText);
                console.log(obj)
            } else if(request.status > 400) {
                console.log("请求失败！");
            }
        }
    };
});