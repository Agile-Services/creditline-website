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

    const logoLink = this.document.querySelector("header a");
    const navBarLinks = this.document.querySelectorAll("header div ul li");

    logoLink.addEventListener('click',() => {
        getPage('../php/home.php', 'GET');
    })

    navBarLinks.item(0).addEventListener('click', () => {
        let result = getPage('../php/personalLoansPage.php', 'GET');
        this.console.log(result);
        p_and_b_loan("CreditLine | Personal Loan", result);
    })

    navBarLinks.item(1).addEventListener('click', () => {
        let result = getPage('../php/businessLoansPage.php', 'GET');
        p_and_b_loan("CreditLine | Business Loan", result)
    })

    navBarLinks.item(2).addEventListener('click', () => {
        let result = getPage('../php/partnerPlanPage.php', 'GET');
        this.console.log(result);
        result.then(()=>{
            if (document.title != "CreditLine | Partner Plan") {
                document.title = "CreditLine | Partner Plan";
            }
            //$('meta[name="description"]').attr("content", newDescription);
            this.document.getElementById("partnerPlanApply").addEventListener('click', () => {
                result = getPage('../php/forms/partnerPlan-form.php', 'GET');
                result.then(()=>{
                    if (document.title != "CreditLine | Partner Plan") {
                        document.title = "CreditLine | Partner Plan";
                    }
                    //$('meta[name="description"]').attr("content", newDescription);
                    this.document.getElementById("partnerPlanSubmit").addEventListener('click', () => {
                        result = getPage('../php/forms/partnerPlan-form.php', 'POST');
                    
                    })
                })
            })
        })
    })

    navBarLinks.item(3).addEventListener('click', () => {
        let result = getPage('../php/pawnPage.php', 'GET');
        this.console.log(result);
        result.then(()=>{
            if (document.title != "CreditLine | Pawn") {
                document.title = "CreditLine | Pawn";
            }
            //$('meta[name="description"]').attr("content", newDescription);
            this.document.getElementById("pawnApply").addEventListener('click', () => {
                result = getPage('../php/forms/pawn-form.php', 'GET');
                result.then(()=>{
                    if (document.title != "CreditLine | Pawn") {
                        document.title = "CreditLine | Pawn";
                    }
                    //$('meta[name="description"]').attr("content", newDescription);
                    this.document.getElementById("pawnSubmit").addEventListener('click', () => {
                        result = getPage('../php/forms/pawn-form.php', 'POST');
                    
                    })
                })
            })
        })
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

    function p_and_b_loan(title, result){
        result.then(()=>{
            if (document.title != title) {
                document.title = title;
            }
            //$('meta[name="description"]').attr("content", newDescription);
            this.document.getElementById("LoansApply").addEventListener('click', () => {
                result = getPage('../php/forms/loan-purpose-form.php', 'GET');
                this.console.log(result)
                result.then(() => {
                    if (document.title != "CreditLine | Loan Purpose") {
                        document.title = "CreditLine | Loan Purpose";
                    }
                    //$('meta[name="description"]').attr("content", newDescription);
                    this.document.getElementById("loanPurposeSubmit").addEventListener('click', () => {
                        result = getPage('../php/forms/general-info-form.php', 'GET');
                        this.console.log(result);
                        result.then(() => {
                            if (document.title != "CreditLine | General Info") {
                                document.title = "CreditLine | General Info";
                            }
                            //$('meta[name="description"]').attr("content", newDescription);
                            this.document.getElementById("generalInfoSubmit").addEventListener('click', () => {
                                result = getPage('../php/forms/contact-details-form.php', 'GET');
                                result.then(() => {
                                    if (document.title != "CreditLine | Contact Details") {
                                        document.title = "CreditLine | Contact Details";
                                    }
                                    //$('meta[name="description"]').attr("content", newDescription);
                                    this.document.getElementById("contactDetailsSubmit").addEventListener('click', () => {
                                        result = getPage('../php/forms/employment-details-form.php', 'GET');
                                        result.then(() => {
                                            if (document.title != "CreditLine | Employment Details") {
                                                document.title = "CreditLine | Employment Details";
                                            }
                                            //$('meta[name="description"]').attr("content", newDescription);
                                            this.document.getElementById("empDetailsSubmit").addEventListener('click', () => {
                                                result = getPage('../php/forms/employment-details-form.php', 'POST');
                                                
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
