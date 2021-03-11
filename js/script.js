window.onload = function(){
    /*
    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
    var url = "PHP-folder/verify.php";
    var formRequest = document.getElementById("page_Id").value;
    httpRequest.open('PUSH',url+"?form="+formRequest);
    httpRequest.send();
    })*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    let result = getPage('../php/home.php', 'GET');
    this.console.log(result)
    result.then(()=>{
            document.addEventListener("scroll", function(event) {
                let animatedBoxes = Array.prototype.slice.call(document.querySelectorAll(".tag"));
                animatedBoxes.push.apply(animatedBoxes, Array.prototype.slice.call(document.querySelectorAll(".carousel")));
                
                let leftAnimatedBoxes = Array.prototype.slice.call(document.querySelectorAll(".ad1"));
                const windowOffsetTop = window.innerHeight + window.scrollY;
        
                Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
                    const animatedBoxOffsetTop = animatedBox.offsetTop;
        
                    if (windowOffsetTop >= animatedBoxOffsetTop) {
                        addClass(animatedBox, "appear");
                    }
                });

                let i = 0;
                Array.prototype.forEach.call(leftAnimatedBoxes, (animatedBox) => {
                    const animatedBoxOffsetTop = animatedBox.offsetTop;
        
                    if (windowOffsetTop >= animatedBoxOffsetTop && i <= 0) {
                        addClass(animatedBox, "appearLeft");
                        i = i + 1;
                    } else if(windowOffsetTop >= animatedBoxOffsetTop && i > 0) {
                        addClass(animatedBox, "appearRight");
                        i = i - 1;
                    }
                });
        });

        this.document.getElementById("applyNow").addEventListener('click', () => {
            apply_loan("Apply | Creditline", result)
        })
        
        function addClass(element, className) {
            const arrayClasses = element.className.split(" ");
            if (arrayClasses.indexOf(className) === -1) {
                element.className += " " + className;
            }
        }
    })

    const logoLink = this.document.querySelector("header a");
    const navBarLinks = this.document.querySelectorAll("header div ul li a");

    logoLink.addEventListener('click',() => {
        let result = getPage('../php/home.php', 'GET');
        result.then(() => {
            if (document.title != "Home | CreditLine") {
                document.title = "Home | CreditLine";
            }
        })
    })

    navBarLinks.item(0).addEventListener('click', () => {
        let result = getPage('../php/personalLoansPage.php', 'GET');
        this.console.log(result);
        p_and_b_loan("Personal Loan | CreditLine", result);
    })

    navBarLinks.item(1).addEventListener('click', () => {
        let result = getPage('../php/businessLoansPage.php', 'GET');
        p_and_b_loan("Business Loan | CreditLine", result)
    })

    navBarLinks.item(2).addEventListener('click', () => {
        let result = getPage('../php/partnerPlanPage.php', 'GET');
        this.console.log(result);
        result.then(()=>{
            if (document.title != "Partner Plan | CreditLine") {
                document.title = "Partner Plan | CreditLine";
            }
            //$('meta[name="description"]').attr("content", newDescription);
            this.document.getElementById("partnerPlanApply").addEventListener('click', () => {
                result = getPage('../php/forms/partnerPlan-form.php', 'GET');
                result.then(()=>{
                    if (document.title != "Partner Plan | CreditLine") {
                        document.title = "Partner Plan | CreditLine";
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
            if (document.title != "Pawn | CreditLine") {
                document.title = "Pawn | CreditLine";
            }
            //$('meta[name="description"]').attr("content", newDescription);
            this.document.getElementById("pawnApply").addEventListener('click', () => {
                result = getPage('../php/forms/pawn-form.php', 'GET');
                result.then(()=>{
                    if (document.title != "Pawn | CreditLine") {
                        document.title = "Pawn | CreditLine";
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
        let result = getPage('../php/servicesPage.php', 'GET');
        result.then(() => {
            if (document.title != "Services | CreditLine") {
                document.title = "Services | CreditLine";
            }
        })
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

    async function getFormPage(url, method){
        const result = await this.fetch(url,{
            method: method
        }).then(response => response.text())
        .then(data => {
            this.document.querySelector(".main-content.container").innerHTML = data;
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
                result = getPage('../php/formBody.php', 'GET');
                result.then(()=>{
                    result = getFormPage('../php/forms/loan-purpose-form.php', 'GET');
                    this.console.log(result)
                    result.then(() => {
                        if (document.title != "CreditLine | Loan Purpose") {
                            document.title = "CreditLine | Loan Purpose";
                        }
                        //$('meta[name="description"]').attr("content", newDescription);
                        this.document.getElementById("loanPurposeSubmit").addEventListener('click', () => {
                            result = getFormPage('../php/forms/general-info-form.php', 'GET');
                            this.console.log(result);
                            result.then(() => {
                                if (document.title != "CreditLine | General Info") {
                                    document.title = "CreditLine | General Info";
                                }
                                //$('meta[name="description"]').attr("content", newDescription);
                                this.document.getElementById("generalInfoSubmit").addEventListener('click', () => {
                                    result = getFormPage('../php/forms/contact-details-form.php', 'GET');
                                    result.then(() => {
                                        if (document.title != "CreditLine | Contact Details") {
                                            document.title = "CreditLine | Contact Details";
                                        }
                                        //$('meta[name="description"]').attr("content", newDescription);
                                        this.document.getElementById("contactDetailsSubmit").addEventListener('click', () => {
                                            result = getFormPage('../php/forms/employment-details-form.php', 'GET');
                                            result.then(() => {
                                                if (document.title != "CreditLine | Employment Details") {
                                                    document.title = "CreditLine | Employment Details";
                                                }
                                                //$('meta[name="description"]').attr("content", newDescription);
                                                this.document.getElementById("empDetailsSubmit").addEventListener('click', () => {
                                                    result = getFormPage('../php/forms/employment-details-form.php', 'POST');
                                                    
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
        })
    } 

    function apply_loan(title, result){
        result.then(()=>{
            if (document.title != title) {
                document.title = title;
            }
            result = getPage('../php/formBody.php', 'GET');
            result.then(() => {
                result = getFormPage('../php/forms/loan-purpose-form.php', 'GET');
                this.console.log(result)
                result.then(() => {
                    if (document.title != "CreditLine | Loan Purpose") {
                        document.title = "CreditLine | Loan Purpose";
                    }
                    //$('meta[name="description"]').attr("content", newDescription);
                    this.document.getElementById("loanPurposeSubmit").addEventListener('click', () => {
                        result = getFormPage('../php/forms/general-info-form.php', 'GET');
                        this.console.log(result);
                        result.then(() => {
                            if (document.title != "CreditLine | General Info") {
                                document.title = "CreditLine | General Info";
                            }
                            //$('meta[name="description"]').attr("content", newDescription);
                            this.document.getElementById("generalInfoSubmit").addEventListener('click', () => {
                                result = getFormPage('../php/forms/contact-details-form.php', 'GET');
                                result.then(() => {
                                    if (document.title != "CreditLine | Contact Details") {
                                        document.title = "CreditLine | Contact Details";
                                    }
                                    //$('meta[name="description"]').attr("content", newDescription);
                                    this.document.getElementById("contactDetailsSubmit").addEventListener('click', () => {
                                        result = getFormPage('../php/forms/employment-details-form.php', 'GET');
                                        result.then(() => {
                                            if (document.title != "CreditLine | Employment Details") {
                                                document.title = "CreditLine | Employment Details";
                                            }
                                            //$('meta[name="description"]').attr("content", newDescription);
                                            this.document.getElementById("empDetailsSubmit").addEventListener('click', () => {
                                                result = getFormPage('../php/forms/employment-details-form.php', 'POST');
                                                
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
