// For Kyle,
// Remember to put the required attribute before the input tags on forms.
// Also use oninvalid for custom validation methods.
window.onload = function(){
        function addClass(element, className) {
        const arrayClasses = element.className.split(" ");
        if (arrayClasses.indexOf(className) === -1) {
            element.className += " " + className;
        }
    }

    function removeClass(element, className) {
        const arrayClasses = element.className.split(" ");
        console.log(arrayClasses);
        arrayClasses.pop(arrayClasses.indexOf(className));
        console.log(arrayClasses);

    }

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    let result = getPage('../php/home.php', 'GET');
    this.console.log(result)
    result.then(()=>{
            this.document.getElementById("applyNow").addEventListener('click', () => {
                apply_loan("Apply | Creditline", result)
            })

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
    })

    const logoLink = this.document.querySelector("header a");
    const navBarLinks = this.document.querySelectorAll("header div ul li a");

    logoLink.addEventListener('click',() => {
        let result = getPage('../php/home.php', 'GET');
        result.then(() => {
            if (document.title != "Home | CreditLine") {
                document.title = "Home | CreditLine";
            }
            this.document.getElementById("applyNow").addEventListener('click', () => {
                apply_loan("Apply | Creditline", result)
            })
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

                        var fname = document.getElementById("fname");
                        var lname = document.getElementById("lname");
                        var mname = document.getElementById("mname");
                        var mobile = document.getElementById("mobile_number");
                        var email = document.getElementById("email");
                        var address1 = document.getElementById("address1");
                        var address2 = document.getElementById("address2");
                        var city = document.getElementById("city");
                        var employer_name = document.getElementById("employer_name");
                        var job_title = document.getElementById("job_title");
                        var start_date = document.getElementById("start_date");
                        var work_address_line_1 = document.getElementById("work_address1");
                        var work_address_line_2 = document.getElementById("work_address2");
                        var work_city = document.getElementById("work_city");
                        var trn = document.getElementById("trn");
                        var work_number = document.getElementById("work_business_number");
                        var emp_status;
                        var draw_date = document.getElementById("draw_Date");
                        var plan_amt = document.getElementById("plan_amt");
                        var payment_plan = document.getElementById("");
                        var payment_method;
                        var bank = document.getElementById("bank");
                        var acc_number = document.getElementById("acc_num");
                        var cash = document.getElementById("cash");
                        var bank_transfer = document.getElementById("bank_transfer");
                        var weekly = document.getElementById("weekly");
                        var fortnight = document.getElementById("fort_nightly");
                        var monthly = document.getElementById("monthly");
                        var full_time = document.getElementById("employement_status");
                        var part_time = document.getElementById("employement_status_Time")
                        var self_employed = document.getElementById("self_employement_status")

                        // if(cash.checked == false && bank_transfer.checked == false){
                        //     document.getElementById("error1").innerHTML = "Please mark one of the checkboxs";  
                        // }
                        // else if(cash.checked == true && bank_transfer.checked == true){
                        //     document.getElementById("error1").innerHTML = "Please mark only one of the checkboxs";  
                        // }
                        // else if(cash.checked == true && bank_transfer.checked == false){
                        //     payment_method=cash.value;
                        // }
                        // else if(cash.checked == false && bank_transfer.checked == true){
                        //     payment_method=bank_transfer.value;
                        // }


                        // if(weekly.checked == false && fortnight.checked == false && monthly.checked == false){
                        //     return document.getElementById("error").innerHTML = "Please mark one of the checkboxs";  
                        // }
                        // else if(weekly.checked == true && fortnight.checked == true && monthly.checked == true){
                        //     return document.getElementById("error").innerHTML = "Please mark only one of the checkboxs";  
                        // }
                        // else if(weekly.checked == true && fortnight.checked == false && monthly.checked == false){
                        //     payment_plan=weekly.value;
                        // }
                        // else if(weekly.checked == false && fortnight.checked == true && monthly.checked == false){
                        //     payment_plan=fortnight.value;
                        // }
                        // else if(weekly.checked == false && fortnight.checked == false && monthly.checked == true){
                        //     payment_plan=monthly.value;
                        // }

                        // if(full_time.checked == false && part_time.checked == false && self_employed.checked == false){
                        //     return document.getElementById("error2").innerHTML = "Please mark one of the checkboxs";  
                        // }
                        // else if(full_time.checked == true && part_time.checked == true && self_employed.checked == true){
                        //     return document.getElementById("error2").innerHTML = "Please mark only one of the checkboxs";  
                        // }
                        // else if(full_time.checked == true && part_time.checked == false && self_employed.checked == false){
                        //     emp_status=full_time.value;
                        // }
                        // else if(full_time.checked == false && part_time.checked == true && self_employed.checked == false){
                        //     emp_status=part_time.value;
                        // }
                        // else if(full_time.checked == false && part_time.checked == false && self_employed.checked == true){
                        //     emp_status=self_employed.value;
                        // }


                        // if(fname.value == ""){
                        //     fname.style.borderColor = "red";
                        // }
                        // else if(mname.value == ""){
                        //     mname.style.borderColor = "red";
                        // }
                        // else if(lname.value == ""){
                        //     lname.style.borderColor = "red";
                        // }
                        // else if(mobile.value == ""){
                        //     mobile.style.borderColor = "red";
                        // }
                        // else if(email.value == ""){
                        //     email.style.borderColor = "red";
                        // }
                        // else if(address1.value == ""){
                        //     address1.style.borderColor = "red";
                        // }
                        // else if(address2.value == ""){
                        //     address2.style.borderColor = "red";
                        // }
                        // else if(city.value == ""){
                        //     city.style.borderColor = "red";
                        // }
                        // else if(employer_name.value == ""){
                        //     employer_name.style.borderColor = "red";
                        // }
                        // else if(job_title.value == ""){
                        //     job_title.style.borderColor = "red";
                        // }
                        // else if(start_date.value == ""){
                        //     start_date.style.borderColor = "red";
                        // }
                        // else if(work_address_line_1.value == ""){
                        //     work_address_line_1.style.borderColor = "red";
                        // }
                        // else if(work_address_line_2.value == ""){
                        //     work_address_line_2.style.borderColor = "red";
                        // }
                        // else if(work_city.value == ""){
                        //     work_city.style.borderColor = "red";
                        // }
                        // else if(trn.value == ""){
                        //     trn.style.borderColor = "red";
                        // }
                        // else if(work_number.value == ""){
                        //     work_number.style.borderColor = "red";
                        // }
                        // else if(draw_date.value == ""){
                        //     draw_date.style.borderColor = "red";
                        // }
                        // else if(plan_amt.value == ""){
                        //     plan_amt.style.borderColor = "red";
                        // }
                        // else if( document.getElementById("id").fileslength == 0){
                        // return document.getElementById("error3").innerHTML = "No Files have been selected";
                        // }
                        // else{
                        var id = document.getElementById("id").files[0];
                        console.log(id);
                        var formData = new FormData();
                        formData.set("id", id);
                        formData.append("fname",fname.value);
                        formData.append("mname",mname.value);
                        formData.append("lname",lname.value);
                        formData.append("address1",address1.value);
                        formData.append("email",email.value);
                        formData.append("address2",address2.value);
                        formData.append("city",city.value);
                        formData.append("employer_name",employer_name.value);
                        formData.append("job_title",job_title.value);
                        formData.append("start_date",start_date.value);
                        formData.append("work_address_line_1",work_address_line_1.value);
                        formData.append("work_address_line_2",work_address_line_2.value);
                        formData.append("work_city",work_city.value);
                        formData.append("trn",trn.value);
                        formData.append("work_number",work_number.value);
                        formData.append("draw_date",draw_date.value);
                        formData.append("payment_plan",payment_plan);
                        formData.append("payment_method",payment_method);
                        formData.append("acc_number",acc_number.value);
                        formData.append("bank",bank.value);
                        formData.append("emp_status",emp_status);
                        formData.append("mobile",mobile.value);
                        formData.append("plan_amt",plan_amt.value);
                        formData.append("area",document.getElementById("area").value);
                        formData.append("post",document.getElementById("post").value);
                        formData.append("country",document.getElementById("country").value);
                        formData.append("work_area",document.getElementById("work_area").value);
                        formData.append("work_post",document.getElementById("work_post").value);
                        formData.append("work_country",document.getElementById("work_country").value);

                        $.ajax({
                            type: "POST",
                            url: "php/verify.php",
                            data: formData,
                            processData: false,
                            contentType: false
                          }).done(function(response){
                                console.log(response);
                          });
                   //  }
                        result = getPage('../php/forms/partnerPlan-form.php', 'POST');
                      //  }
       
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

                        var fname = document.getElementById("fname");
                        var lname = document.getElementById("lname");
                        var mname = document.getElementById("mname");
                        var mobile = document.getElementById("mobile_number");
                        var email = document.getElementById("email");
                        var address1 = document.getElementById("address1");
                        var address2 = document.getElementById("address2");
                        var city = document.getElementById("city");
                        var description = document.getElementById("product_description");
                        var make = document.getElementById("make");
                        var model = document.getElementById("model")
                        var serial_num = document.getElementById("serial_num");
                        var invoice = document.getElementById("invoice");
                        var  picture = document.getElementById("product_img");
                        var  sig = document.getElementById("signature");
                        var  trn = document.getElementById("trn");
                        var  id = document.getElementById("id");

                        if(fname.value == ""){
                            fname.style.borderColor = "red";
                        }
                        else if(mname.value = ""){
                            mname.style.borderColor = "red";
                        }
                        else if(lname.value == ""){
                            lname.style.borderColor = "red";
                        }
                        else if(mobile.value == ""){
                            mobile.style.borderColor = "red";
                        }
                        else if(address1.value == ""){
                            address1.style.borderColor = "red";
                        }
                        else if(address2.value == ""){
                            address2.style.borderColor = "red";
                        }
                        else if(city.value == ""){
                            city.style.borderColor = "red";
                        }
                        else if(email.value == ""){
                            email.style.borderColor = "red";
                        }
                        else if(description.value == ""){
                            description.style.borderColor = "red";
                        }
                        else if(make.value == ""){
                            make.style.borderColor = "red";
                        }
                        else if(model.value == ""){
                            model.style.borderColor = "red";
                        }
                        else if(serial_num.value == ""){
                            serial_num.style.borderColor = "red";
                        }
                        else if(trn.value == ""){
                            trn.style.borderColor = "red";
                        }
                        else if(sig.value == ""){
                            sig.style.borderColor = "red";
                        }
                        else { 
                        
                        var id = document.getElementById("id").files[0];
                        console.log(id);
                        var invoice = document.getElementById("invoice").files[0];
                        console.log(invoice);
                        var product_img = document.getElementById("product_img").files[0];
                        console.log(product_img);
                        var formData = new FormData();
                        formData.set("invoice",invoice);
                        formData.set("product_img",product_img);
                        formData.append("fname",fname.value);
                        formData.append("mname",mname.value);
                        formData.append("lname",lname.value);
                        formData.append("address1",address1.value);
                        formData.append("email",email.value);
                        formData.append("address2",address2.value);
                        formData.append("city",city.value);
                        formData.append("mobile",mobile.value);
                        formData.append("description",description.value);
                        formData.append("serial_num",serial_num.value);
                        formData.append("trn",trn.value);
                        formData.append("model",model.value);
                        formData.append("make",make.value);
                        formData.append("sig",sig.value);
                        formData.set("id",id);

                        for(var pair of formData.entries()) {
                            console.log(pair[0]+ ', '+ pair[1]);
                         }
                            
                        $.ajax({
                            type: "POST",
                            url: "php/verifyPawn.php",
                            data: formData,
                            processData: false,
                            contentType: false
                            }).done(function(response){
                                console.log(response);
                            });
                        result = getPage('../php/forms/pawn-form.php', 'POST');
                         }
                    
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
            let space = this.document.querySelector('main div.active-page');
            let newspace = space.cloneNode(true);
            space.parentNode.replaceChild(newspace, space);
            removeClass(newspace, "appearRight");
            newspace.innerHTML = data;
            addClass(newspace, "appearRight");
            scrollTop();
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
            let space = this.document.querySelector('.main-content.container');
            let newspace = space.cloneNode(true);
            space.parentNode.replaceChild(newspace,space);
            removeClass(newspace, "appearRight");
            newspace.innerHTML = data;
            addClass(newspace, "appearRight");
            scrollTop();
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
                            var amount = document.getElementById("loan_amt");
                            if(amount.value == ""){
                                amount.style.borderColor = "red";
                            } else {
                                result = getFormPage('../php/forms/general-info-form.php', 'GET');
                            }
                            
                            result.then(() => {
                                if (document.title != "CreditLine | General Info") {
                                    document.title = "CreditLine | General Info";
                                }
                                //$('meta[name="description"]').attr("content", newDescription);
                                this.document.getElementById("generalInfoSubmit").addEventListener('click', () => {
                                    var fname = document.getElementById("fname");
                                    var mname = document.getElementById("mname");
                                    var lname = document.getElementById("lname");
                                    var dob = document.getElementById("dob");
                                    var pob = document.getElementById("pob");
                                    var mothers_maiden = document.getElementById("mothers_maiden");
                                    var num_of_dependents = document.getElementById("dependents");
                                    var id_type = document.getElementById("id_type");
                                    var id_num = document.getElementById("id_num");
                                    var id_expiration = document.getElementById("id_expire");
                            
                                    if(fname.value == ""){
                                        fname.style.borderColor = "red";
                                    }
                                    else if(mname.value == ""){
                                        mname.style.borderColor = "red";
                                    }  
                                    else if(lname.value == ""){
                                        lname.style.borderColor = "red";
                                    }  
                                    else if(dob.value == ""){
                                        dob.style.borderColor = "red";
                                    }  
                                    else if(pob.value == ""){
                                        pob.style.borderColor = "red";
                                    }  
                                    else if(mothers_maiden.value == ""){
                                        mothers_maiden.style.borderColor = "red";
                                    }  
                                    else if(num_of_dependents.value == ""){
                                        num_of_dependents.style.borderColor = "red";
                                    }  
                                    else if(id_type.value == ""){
                                        id_type.style.borderColor = "red";
                                    }  
                                    else if(id_expiration.value == ""){
                                        id_expiration.style.borderColor = "red";
                                    }  
                                    else if(id_num.value == ""){
                                        id_num.style.borderColor = "red";
                                    }  
                                    else{
                                        result = getFormPage('../php/forms/contact-details-form.php', 'GET');
                                    }    
                                    result.then(() => {
                                        if (document.title != "CreditLine | Contact Details") {
                                            document.title = "CreditLine | Contact Details";
                                        }
                                        //$('meta[name="description"]').attr("content", newDescription);
                                        this.document.getElementById("contactDetailsSubmit").addEventListener('click', () => {

                                            var moblie = document.getElementById("mobile_number");
                                            var email = document.getElementById("email");
                                            var street1 = document.getElementById("address1");
                                            var street2 = document.getElementById("address2");
                                            var city = document.getElementById("district");
                                            var country = document.getElementById("citi");
                                            var E_fname = document.getElementById("emergency_contact_fname");
                                            var E_mname = document.getElementById("emergency_contact_mname");
                                            var E_lname = document.getElementById("emergency_contact_lname");
                                            var E_mobile = document.getElementById("emergency_contact_mobile_number");

                                            if(moblie.value == ""){
                                                moblie.style.borderColor = "red";
                                            }
                                            else if(email.value == ""){
                                                email.style.borderColor = "red";
                                            }
                                            else if(street1.value == ""){
                                                street1.style.borderColor = "red";
                                            }
                                            else if(street2.value == ""){
                                                street2.style.borderColor = "red";
                                            }
                                            else if(city.value == ""){
                                                city.style.borderColor = "red";
                                            }
                                            else if(country.value == ""){
                                                country.style.borderColor = "red";
                                            }
                                            else if(E_fname.value == ""){
                                                E_fname.style.borderColor = "red";
                                            }
                                            else if(E_mname.value == ""){
                                                E_mname.style.borderColor = "red";
                                            }
                                            else if(E_lname.value == ""){
                                                E_lname.style.borderColor = "red";
                                            }
                                            else if(E_mobile.value == ""){
                                                E_mobile.style.borderColor = "red";
                                            }
                                            else{
                                                result = getFormPage('../php/forms/employment-details-form.php', 'GET');
                                            }

                                          
                                            result.then(() => {
                                                if (document.title != "CreditLine | Employment Details") {
                                                    document.title = "CreditLine | Employment Details";
                                                }
                                                //$('meta[name="description"]').attr("content", newDescription);
                                                this.document.getElementById("empDetailsSubmit").addEventListener('click', () => {
                                                    
                                                    var employer = document.getElementById("employer_name");
                                                    var title = document.getElementById("job_title");
                                                    var start_date = document.getElementById("start_date");
                                                    var address1 = document.getElementById("address1");
                                                    var address2 = document.getElementById("address2");
                                                    var city = document.getElementById("city");
                                                    var country = document.getElementById("country");
                                                    var num = document.getElementById("business_number");
                                                    var status = document.getElementById("status");

                                                    if(employer.value == ""){
                                                        employer.style.borderColor = "red";
                                                    }
                                                    else if(title.value == ""){
                                                        title.style.borderColor = "red";
                                                    }
                                                    else if(start_date.value == ""){
                                                        start_date.style.borderColor = "red";
                                                    }
                                                    else if(address1.value == ""){
                                                        address1.style.borderColor = "red";
                                                    }
                                                    else if(address2.value == ""){
                                                        address2.style.borderColor = "red";
                                                    }
                                                    else if(city.value == ""){
                                                        city.style.borderColor = "red";
                                                    }
                                                    else if(country.value == ""){
                                                        country.style.borderColor = "red";
                                                    }
                                                    else if(num.value == ""){
                                                        num.style.borderColor = "red";
                                                    }
                                                    else if(status.value == ""){
                                                        status.style.borderColor = "red";
                                                    }
                                                    else{
                                                        result = getFormPage('../php/forms/employment-details-form.php', 'POST');
                                                    }

                                                    
                                                    
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
    var scrollTop = function() {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    };

    var changeFilename = (Myfile) => {
        var file = myFile.files[0];  
        var filename = file.name;
        var label = document.getElementById(Myfile.id)
        label.innerHTML = filename
    }
}

