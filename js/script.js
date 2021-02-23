window.onload = function(){
    /*
    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
    var url = "PHP-folder/verify.php";
    var formRequest = document.getElementById("page_Id").value;
    httpRequest.open('PUSH',url+"?form="+formRequest);
    httpRequest.send();
    })*/

    getPage('../php/home.php', 'GET');

    const logoLink = this.document.querySelector("header nav a");
    const navBarLinks = this.document.querySelectorAll("header nav div div a");

    logoLink.addEventListener('click',() => {
        getPage('../php/home.php', 'GET');
    })

    navBarLinks.item(0).addEventListener('click', () => {
        const result = getPage('../php/personalLoansPage.php', 'GET');
        this.console.log(result);
        result.then(()=>{
            this.document.getElementById("personalLoansApply").addEventListener('click', () => {
                getPage('../php/forms/partnerPlan-form.php', 'GET');
            if (document.title != "CreditLine | Partner Plan") {
                document.title = "CreditLine | Partner Plan";
            }
            //$('meta[name="description"]').attr("content", newDescription);
        })
        })
    })

    navBarLinks.item(1).addEventListener('click', () => {
        getPage('../php/businessLoansPage.php', 'GET');
    })

    navBarLinks.item(2).addEventListener('click', () => {
        const result = getPage('../php/partnerPlanPage.php', 'GET');
        this.console.log(result);
        result.then(()=>{
            this.document.getElementById("partnerPlanApply").addEventListener('click', () => {
                getPage('../php/forms/partnerPlan-form.php', 'GET');
            if (document.title != "CreditLine | Partner Plan") {
                document.title = "CreditLine | Partner Plan";
            }
            //$('meta[name="description"]').attr("content", newDescription);
        })
        })
    })

    navBarLinks.item(3).addEventListener('click', () => {
        getPage('../php/pawnPage.php', 'GET');
    })

    navBarLinks.item(4).addEventListener('click', () => {
        getPage('../php/servicesPage.php', 'GET');
    })


    async function getPage(url, method){
        const result = await this.fetch(url,{
            method: method
        }).then(response => response.text())
        .then(data => {
            this.document.querySelector('main div').innerHTML = data;
            return 0;
        })
        .catch(error => {
            this.alert(error);
            return -1;
        });
        return result;
    }
}


