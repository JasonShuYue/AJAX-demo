// 这是我们以前自己封装jQuery的例子
window.jQuery = function(nodeOrSelector) {
    let nodes = {};
    nodes.addClass = function() {};
    nodes.html = function() {};
    return nodes;
}

window.$ = window.jQuery;

//  接下来我们自己封装下AJAX
window.jQuery.ajax = function(obj) {
    let { url, method, header, body, success, fail} = obj;
    let request = new XMLHttpRequest();
    request.open(method, url);    //  配置request
    // 设置header部分
    for(let key in header) {
        request.setRequestHeader(key, headers[key]);
    }
    request.setRequestHeader('content-type','x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if(request.readyState === 4) {  //  加载完成
            if(request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText);
            } else if(request.status > 400) {
                console.log("请求失败！");
                fail.call(undefined, request);
            }
        }
    };
    request.send(body);
};




myButton.addEventListener("click", function() {
    $.ajax({
            url: "/xxx",
            method: "GET",
            body: "name=Jason&age=23",
            success: (text) => console.log(text),
            fail: (request) => console.log(request)

    });
});