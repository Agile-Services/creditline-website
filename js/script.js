window.onload = function(){
    /*
    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
    var url = "PHP-folder/verify.php";
    var formRequest = document.getElementById("page_Id").value;
    httpRequest.open('PUSH',url+"?form="+formRequest);
    httpRequest.send();
    })*/

    var navBarLinks = this.document.querySelectorAll("header nav div div a");
    this.console.log(navBarLinks);
    navBarLinks.item(0).addEventListener('click', () => {
        getPage('../php/personalLoansPage.php', 'GET');
    })

    navBarLinks.item(1).addEventListener('click', () => {
        getPage('../php/businessLoansPage.php', 'GET');
    })

    navBarLinks.item(2).addEventListener('click', () => {
        getPage('../php/partnerPlanPage.php', 'GET');
    })

    navBarLinks.item(3).addEventListener('click', () => {
        getPage('../php/pawnPage.php', 'GET');
    })

    navBarLinks.item(4).addEventListener('click', () => {
        getPage('../php/servicesPage.php', 'GET');
    })



    function getPage(url, method){
        this.fetch(url,{
            method: method
        }).then(response => response.text())
        .then(data => {
            this.document.querySelector('main div').innerHTML = data;
        })
        .catch(error => {
            this.alert(error);
        });
    }
}


