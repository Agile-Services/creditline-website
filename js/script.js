window.onload = function(){

    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
    var url = "PHP-folder/verify.php";
    var formRequest = document.getElementById("page_Id").value;
    httpRequest.open('PUSH',url+"?form="+formRequest);
    httpRequest.send();
    })
}
