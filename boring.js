setInterval(function(){
    var t = new Date();
    var hour = t.getHours();
    var minute = t.getMinutes();
    var second = t.getSeconds();
    var box = document.getElementById("t");
    box.innerHTML=hour + ((minute < 10) ? ":0" : ":") + minute + ((second < 10) ? ":0" : ":") + second;},1000);

history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL)})