window.onload=function(){
    let name=prompt("lütfen adınızı giriniz");
    if(name)
    {
        document.getElementById("myName").innerText=name;
        alert("merhaba"+name+", hoşgeldin!");

    }else{
        document.getElementById("myName").innerText="ziyaretçi";
        alert("merhaba ziyaretçi,hoş geldin!");
    }
}