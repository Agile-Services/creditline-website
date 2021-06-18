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
                        var id = document.getElementById("id");
                        let errors = [];

                        if(cash.checked == false && bank_transfer.checked == false){
                            makeAlert(cash);
                            let error = "Payment Method is Required!";
                            errors.push(error)
                            flashErrors(errors)
                            makeAlert(bank_transfer);
                        }
                        else if(cash.checked == true && bank_transfer.checked == true){
                            makeAlert(cash);
                            makeAlert(bank_transfer);
                            let error = "Please mark only one of the checkboxs.";
                            errors.push(error)
                            flashErrors(errors)  
                        }
                        else if(cash.checked == true && bank_transfer.checked == false){
                            payment_method=cash.value;
                        }
                        else if(cash.checked == false && bank_transfer.checked == true){
                            payment_method=bank_transfer.value;
                            
                        }

                        //This is where I was trying to get the site to display flash messsages if the person selects bank transfer 
                        //but did not put in banking information and its not working im not sure why

                        if(payment_method === "bank_transfer"){
                            if(bank.value == "") {
                                makeAlert(bank);
                                let error = "Name of Bank is Required!";
                                errors.push(error)
                                flashErrors(errors)  

                            }
                            if(acc_number.value == ""){
                                makeAlert(acc_number);
                                let error = "Account Number is Required!";
                                errors.push(error)
                                flashErrors(errors)  
                        }
                    }


                        if(weekly.checked == false && fortnight.checked == false && monthly.checked == false){
                            makeAlert(weekly);
                            makeAlert(fortnight); 
                            makeAlert(monthly); 
                            let error = "Payment Plan is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        else if(weekly.checked == true && fortnight.checked == true && monthly.checked == true){
                            makeAlert(weekly);
                            makeAlert(fortnight); 
                            makeAlert(monthly); 
                            let error = "Please mark only one of the checkboxs.";
                            errors.push(error)
                            flashErrors(errors) 
                        }
                        else if(weekly.checked == true && fortnight.checked == false && monthly.checked == false){
                            payment_plan=weekly.value;
                        }
                        else if(weekly.checked == false && fortnight.checked == true && monthly.checked == false){
                            payment_plan=fortnight.value;
                        }
                        else if(weekly.checked == false && fortnight.checked == false && monthly.checked == true){
                            payment_plan=monthly.value;
                        }

                        if(full_time.checked == false && part_time.checked == false && self_employed.checked == false){
                            makeAlert(full_time);
                            makeAlert(part_time); 
                            makeAlert(self_employed); 
                            let error = "Employment Status is Required!";
                            errors.push(error)
                            flashErrors(errors) 
                        }
                        else if(full_time.checked == true && part_time.checked == true && self_employed.checked == true){
                            makeAlert(full_time);
                            makeAlert(part_time); 
                            makeAlert(self_employed); 
                            let error = "Please mark only one of the checkboxs.";
                            errors.push(error)
                            flashErrors(errors) 
                        }
                        else if(full_time.checked == true && part_time.checked == false && self_employed.checked == false){
                            emp_status=full_time.value;
                        }
                        else if(full_time.checked == false && part_time.checked == true && self_employed.checked == false){
                            emp_status=part_time.value;
                        }
                        else if(full_time.checked == false && part_time.checked == false && self_employed.checked == true){
                            emp_status=self_employed.value;
                        }


                        if(fname.value == ""){
                            makeAlert(fname);
                            let error = "First Name is Required!";
                            errors.push(error)
                        }
                        if(mname.value == ""){
                            makeAlert(mname);
                            let error = "Middle Name is Required!";
                            errors.push(error)
                        }
                        if(lname.value == ""){
                            makeAlert(lname);
                            let error = "Last Name is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(mobile.value == ""){
                            makeAlert(mobile);
                            let error = "Mobile Number is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(email.value == ""){
                            makeAlert(email);
                            let error = "Email is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(address1.value == ""){
                            makeAlert(address1);
                            let error = "Address 1 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(address2.value == ""){
                            makeAlert(address2);
                            let error = "Address 2 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(city.value == ""){
                            makeAlert(city);
                            let error = "City is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(employer_name.value == ""){
                            makeAlert(employer_name);
                            let error = "Employer Name is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(job_title.value == ""){
                            makeAlert(job_title);
                            let error = "Job Title is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(start_date.value == ""){
                            makeAlert(start_date);
                            let error = "Start Date is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(work_address_line_1.value == ""){
                            makeAlert(work_address_line_1);
                            let error = "Work Address 1 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(work_address_line_2.value == ""){
                            makeAlert(work_address_line_2);
                            let error = "Work Address 2 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(work_city.value == ""){
                            makeAlert(work_city);
                            let error = "Work City is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(trn.value == ""){
                            makeAlert(trn);
                            let error = "TRN is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(!/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(trn.value)){
                            makeAlert(trn);
                            let error = "TRN does not meet the format of a real TRN! Check for spaces and letters in the TRN entered...";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(work_number.value == ""){
                            makeAlert(work_number);
                            let error = "Work Number is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(draw_date.value == ""){
                            makeAlert(draw_date);
                            let error = "Draw Date is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(plan_amt.value == ""){
                            makeAlert(plan_amt);
                            let error = "Plan Amount is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(typeof id.files[0] == 'undefined'){
                            makeAlert(id);
                            let error = "Identification is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        //I sent off a doc and didnt upload any image so this doesnt work
                        // if(document.getElementById("id").fileslength == 0){
                        //     return document.getElementById("error3").innerHTML = "No Files have been selected";
                        // }
                        if(errors.length == 0){
                            var formData = new FormData();
                            formData.set("id", id.files[0]);
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
                                let text = response;
                                console.log(text);
                                if("\"Message has been sent\" ".localeCompare(text) == 0){  
                                    result = getFormPage('../php/successpage.php', 'GET');
                                    result.then(() => {
                                        flashSuccesses(["Application Submitted."]);

                                        let btn = document.getElementById("returnToHome");
                                        btn.addEventListener('click',() => {
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
                                    })
                                } else {
                                    result = getFormPage('../php/errorpage.php','GET');
                                    result.then(() => {
                                        flashErrors(["An error has occured."]);
                                        let btn = document.getElementById("returnToHome");
                                        btn.addEventListener('click',() => {
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
                                    })
                                }
                            });
                        }
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
                        var picture = document.getElementById("product_img");
                        var sig = document.getElementById("signature");
                        var trn = document.getElementById("trn");
                        var id = document.getElementById("id");
                        let errors = [];
                        if(fname.value == ""){
                            makeAlert(fname);
                            let error = "First Name is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(mname.value = ""){
                            makeAlert(mname);
                            let error = "Middle Name is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(lname.value == ""){
                            makeAlert(lname);
                            let error = "Last Name is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(mobile.value == ""){
                            makeAlert(mobile);
                            let error = "Mobile Number is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(address1.value == ""){
                            makeAlert(address1);
                            let error = "Address 1 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(address2.value == ""){
                            makeAlert(address2);
                            let error = "Address 2 is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(city.value == ""){
                            makeAlert(city);
                            let error = "City is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(email.value == ""){
                            makeAlert(email);
                            let error = "Email Address is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(description.value == ""){
                            makeAlert(description);
                            let error = "Description is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(make.value == ""){
                            makeAlert(make);
                            let error = "Make is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(model.value == ""){
                            makeAlert(model);
                            let error = "Model is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(serial_num.value == ""){
                            makeAlert(serial_num);
                            let error = "Serial Number is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(trn.value == ""){
                            makeAlert(trn);
                            let error = "TRN is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(!/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(trn.value)){
                            makeAlert(trn);
                            let error = "TRN does not meet the format of a real TRN! Check for spaces and letters in the TRN entered...";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(sig.value == ""){
                            makeAlert(sig);
                            let error = "Signature is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(errors.length == 0){        
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
                                
                            $.ajax({
                                type: "POST",
                                url: "php/verifyPawn.php",
                                data: formData,
                                processData: false,
                                contentType: false
                                }).done(function(response){
                                    let text = response;
                                    console.log(text);
                                    if(text == "\"Message has been sent\""){ 
                                        result = getFormPage('../php/successpage.php', 'GET');
                                        result.then(() => {
                                            flashSuccesses(["Application Submitted."]);

                                            let btn = document.getElementById("returnToHome");
                                            btn.addEventListener('click',() => {
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
                                        })
                                    } else {
                                        result = getFormPage('../php/errorpage.php','GET');
                                        result.then(() => {
                                            flashErrors(["An error has occured."]);
                                            let btn = document.getElementById("returnToHome");
                                        btn.addEventListener('click',() => {
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
                                        })
                                    }
                                });
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
            document.querySelector(".flash").innerHTML ="";
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
                            var loan_type = document.getElementById("type").value;
                            let errors = [];
                            if(amount.value == ""){
                                makeAlert(amount);
                                let error = "Loan Amount is Required!";
                                errors.push(error)
                                flashErrors(errors)
                            }
                            if(errors.length == 0){
                                sessionStorage.setItem("Loan Type",loan_type);
                                sessionStorage.setItem("Loan Amount",amount.value);
                                result = getFormPage('../php/forms/general-info-form.php', 'GET');
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
                                    var trn = document.getElementById("trn");
                                    var id = document.getElementById("id");
                                    var id2= document.getElementById("id2");
                                    let errors = [];
                                    if(fname.value == ""){
                                        makeAlert(fname);
                                        let error = "First Name is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }
                                    if(mname.value == ""){
                                        makeAlert(mname);
                                        let error = "Middle Name is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }  
                                    if(lname.value == ""){
                                        makeAlert(lname);
                                        let error = "Last Name is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }  
                                    if(dob.value == ""){
                                        makeAlert(dob);
                                        let error = "Date of Birth is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }  
                                    if(pob.value == ""){
                                        makeAlert(pob);
                                        let error = "Place of Birth is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }  
                                    if(mothers_maiden.value == ""){
                                        makeAlert(mothers_maiden);
                                        let error = "Mother's Maiden Name is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }  
                                    if(num_of_dependents.value == ""){
                                        makeAlert(num_of_dependents);
                                        let error = "Number of Dependents is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }     
                                    if(typeof id.files[0] === 'undefined'){
                                        makeAlert(id);
                                        let error = "ID is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }
                                    if(typeof id2.files[0] === 'undefined'){
                                        makeAlert(id2);
                                        let error = "Second ID is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }
                                    if(trn.value == ""){
                                        makeAlert(trn);
                                        let error = "TRN is Required!";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }
                                    if(!/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(trn.value)){
                                        makeAlert(trn);
                                        let error = "TRN does not meet the format of a real TRN! Check for spaces and letters in the TRN entered...";
                                        errors.push(error)
                                        flashErrors(errors)
                                    }
                                    if(errors.length == 0){
                                        var title = document.getElementById("title").value;
                                        sessionStorage.setItem("Title",title);
                            
                                        var fname = document.getElementById("fname").value;
                                        sessionStorage.setItem("First Name",fname);
                            
                                        var mname = document.getElementById("mname").value;
                                        sessionStorage.setItem("Middle Name",mname);
                            
                                        var lname = document.getElementById("lname").value;
                                        sessionStorage.setItem("Last Name",lname);
                            
                                        var gender = document.getElementById("gender").value;
                                        sessionStorage.setItem("Gender",gender);
                            
                                        var dob = document.getElementById("dob").value;
                                        sessionStorage.setItem("DOB",dob);
                            
                                        var pob = document.getElementById("pob").value;
                                        sessionStorage.setItem("POB",pob);
                            
                                        var marital_status = document.getElementById("marital_status").value;
                                        sessionStorage.setItem("Marital Status",marital_status);
                            
                                        var mothers_maiden = document.getElementById("mothers_maiden").value;
                                        sessionStorage.setItem("Mother's Maiden",mothers_maiden);
                            
                                        var dependents = document.getElementById("dependents").value;
                                        sessionStorage.setItem("Dependents",dependents);
                            
                                        var citizenship = document.getElementById("citizenship").value;
                                        sessionStorage.setItem("Citizenship",citizenship);
                            
                                        var resident_country = document.getElementById("resident_country").value;
                                        sessionStorage.setItem("Resident Country",resident_country);
                            
                                        var country_of_issue = document.getElementById("country_of_issue").value;
                                        sessionStorage.setItem("country_of_issue",country_of_issue);

                                        var trn = document.getElementById("trn").value;
                                        sessionStorage.setItem("trn",trn);

                                        var formData = new FormData();
                                        formData.append("id",id.files[0]);
                                        formData.append("id2",id2.files[0]);
                                        
                                        $.ajax({
                                            type: "POST",
                                            url: "php/id.php",
                                            data: formData,
                                            processData: false,
                                            contentType: false
                                            }).done(function(response){
                                                console.log(response);
                                            });
                                        
                                        var result = getFormPage('../php/forms/contact-details-form.php', 'GET');
                                        result.then(() => {
                                            if (document.title != "CreditLine | Contact Details") {
                                                document.title = "CreditLine | Contact Details";
                                            }
                                            //$('meta[name="description"]').attr("content", newDescription);
                                            this.document.getElementById("contactDetailsSubmit").addEventListener('click', () => {
    
                                                var mobile = document.getElementById("mobile_number");
                                                var email = document.getElementById("email");
                                                var street1 = document.getElementById("address1");
                                                var street2 = document.getElementById("address2");
                                                var city = document.getElementById("district");
                                                var country = document.getElementById("citi");
                                                var E_fname = document.getElementById("emergency_contact_fname");
                                                var E_mname = document.getElementById("emergency_contact_mname");
                                                var E_lname = document.getElementById("emergency_contact_lname");
                                                var E_mobile = document.getElementById("emergency_contact_mobile_number");
                                                let errors = []
                                                if(mobile.value == ""){
                                                    makeAlert(mobile);
                                                    let error = "Mobile Number is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(email.value == ""){
                                                    makeAlert(email);
                                                    let error = "Email Address is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(street1.value == ""){
                                                    makeAlert(street1);
                                                    let error = "Street 1 is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(street2.value == ""){
                                                    makeAlert(street2);
                                                    let error = "Street 2 is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(city.value == ""){
                                                    makeAlert(city);
                                                    let error = "City is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(country.value == ""){
                                                    makeAlert(country);
                                                    let error = "Country is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(E_fname.value == ""){
                                                    makeAlert(E_fname);
                                                    let error = "Emergency Contact First Name is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(E_mname.value == ""){
                                                    makeAlert(E_mname);
                                                    let error = "Emergency Contact Middle Name is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(E_lname.value == ""){
                                                    makeAlert(E_lname);
                                                    let error = "Emergency Contact Last Name is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(E_mobile.value == ""){
                                                    makeAlert(E_mobile);
                                                    let error = "Emergency Contact Mobile Number is Required!";
                                                    errors.push(error)
                                                    flashErrors(errors)
                                                }
                                                if(errors.length == 0){
                                                    var mphome = document.getElementById("mobile_number").value;
                                                    sessionStorage.setItem("Mobile",mphome);
                                        
                                                    var hphone = document.getElementById("home_number").value;
                                                    sessionStorage.setItem("Home Phone",hphone);
                                        
                                                    var bphone = document.getElementById("business_number").value;
                                                    sessionStorage.setItem("Business Number",bphone);
                                        
                                                    var ophone = document.getElementById("other_number").value;
                                                    sessionStorage.setItem("Other Number",ophone);
                                        
                                                    var email = document.getElementById("email").value;
                                                    sessionStorage.setItem("Email",email);
                                        
                                                    var address1 = document.getElementById("address1").value;
                                                    sessionStorage.setItem("Address Line 1",address1);
                                        
                                                    var address2 = document.getElementById("address2").value;
                                                    sessionStorage.setItem("Address Line 2",address2);
                                        
                                                    var district = document.getElementById("district").value;
                                                    sessionStorage.setItem("City/Town",district);
                                        
                                                    var rarea = document.getElementById("rarea").value;
                                                    sessionStorage.setItem("Residential Area",rarea);
                                        
                                                    var zip = document.getElementById("zip").value;
                                                    sessionStorage.setItem("Postal Code",zip);
                                        
                                                    var efname = document.getElementById("emergency_contact_fname").value;
                                                    sessionStorage.setItem("E-Contact First Name",efname);
                                        
                                                    var emname = document.getElementById("emergency_contact_mname").value;
                                                    sessionStorage.setItem("E-Contact Middle Name",emname);
                                        
                                                    var elname = document.getElementById("emergency_contact_lname").value;
                                                    sessionStorage.setItem("E-Contact Last Name",elname);
                                        
                                                    var emobile = document.getElementById("emergency_contact_mobile_number").value;
                                                    sessionStorage.setItem("E-Contact Mobile Number",emobile);
                                        
                                                    var ehome = document.getElementById("emergency_contact_home_number").value;
                                                    sessionStorage.setItem("E-Contact Home Number",ehome);
                                        
                                                    var ebusiness = document.getElementById("emergency_contact_business_number").value;
                                                    sessionStorage.setItem("E-Contact Business Number",ebusiness);
                                        
                                                    var eother = document.getElementById("emergency_contact_other_number").value;
                                                    sessionStorage.setItem("E-Contact Other Number",eother);
    
                                                    if(loan_type === "Payday Loan"){
                                                        result = getFormPage('../php/forms/employment-details-form.php', 'GET');
                                                    } else if(loan_type === "Business Loan"){
                                                        result = getFormPage('../php/forms/business-details.php', 'GET');
                                                    }
                                                    result.then(() => {
                                                        if (document.title != "CreditLine | Employment Details" && loan_type === "Payday Loan") {
                                                            document.title = "CreditLine | Employment Details";
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
                                                                var pay1 = document.getElementById("pay_slip1").files[0];
                                                                var pay2 = document.getElementById("pay_slip2").files[0];
                                                                var pay3 = document.getElementById("pay_slip3").files[0];
                                                                var letter = document.getElementById("job_letter").files[0];
                                                                var proof_of_addr = document.getElementById("proof_of_address").files[0];                  
                                                                let errors = [];
            
                                                                if(employer.value == ""){
                                                                    makeAlert(employer);
                                                                    let error = "Employer is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(title.value == ""){
                                                                    makeAlert(title);
                                                                    let error = "Title is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(start_date.value == ""){
                                                                    makeAlert(start_date);
                                                                    let error = "Start Date is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(address1.value == ""){
                                                                    makeAlert(address1);
                                                                    let error = "Address 1 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(address2.value == ""){
                                                                    makeAlert(address2);
                                                                    let error = "Address 2 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(city.value == ""){
                                                                    makeAlert(city);
                                                                    let error = "City is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(country.value == ""){
                                                                    makeAlert(country);
                                                                    let error = "Country is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(num.value == ""){
                                                                    makeAlert(num);
                                                                    let error = "Business Number is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(status.value == ""){
                                                                    makeAlert(status);
                                                                    let error = "Work Status is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if (typeof pay1 === 'undefined') {
                                                                    makeAlert(pay1);
                                                                    let error = "Pay Slip 1 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if (typeof pay2 === 'undefined') {
                                                                    makeAlert(pay2);
                                                                    let error = "Pay Slip 2 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if (typeof pay3 === 'undefined') {
                                                                    makeAlert(pay3);
                                                                    let error = "Pay Slip 3 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if (typeof letter === 'undefined') {
                                                                    makeAlert(letter);
                                                                    let error = "Job Letter is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if (typeof proof_of_addr === 'undefined') {
                                                                    makeAlert(proof_of_addr);
                                                                    let error = "Proof of Address is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(errors.length == 0){
                                                                
                                                                    sessionStorage.setItem("employer_name",employer.value);
                                                                    sessionStorage.setItem("job_title",title.value);
                                                                    sessionStorage.setItem("start_date",start_date.value);
                                                                    sessionStorage.setItem("Address1 of Work",address1.value);
                                                                    sessionStorage.setItem("Address2 of Work",address2.value);
                                                                    sessionStorage.setItem("Country of work",country.value);
                                                                    sessionStorage.setItem("Employment status",status.value);
                                                                    sessionStorage.setItem("Number of Business",num.value);
                                                                        
            
                                                                    var formData = new FormData();
                                                                    formData.append("pay_1",pay1);
                                                                    formData.append("pay_2",pay2);
                                                                    formData.append("pay_3",pay3);
                                                                    formData.append("job_letter",letter);
                                                                    formData.append("proof_of_addr",proof_of_addr);
            
                                                                    for(i=0;  i<Object.keys(sessionStorage).length; i++){
                                                                        var name = Object.keys(sessionStorage)[i]
                                                                        var val = sessionStorage.getItem(name);
                                                                        formData.append(name,val);
                                                                    }
            
                                                                    $.ajax({
                                                                        type: "POST",
                                                                        url: "php/sendPersonalLoan.php",
                                                                        data: formData,
                                                                        processData: false,
                                                                        contentType: false
                                                                        }).done(function(response){
                                                                            let text = response;
                                                                            console.log(text);
                                                                            if(text == "\"Message has been sent\""){  
                                                                                result = getFormPage('../php/successpage.php', 'GET');
                                                                                result.then(() => {
                                                                                    flashSuccesses(["Application Submitted."]);
                                                                                    let btn = document.getElementById("returnToHome");
                                                                                    btn.addEventListener('click',() => {
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
                                                                                })
                                                                            } else {
                                                                                result = getFormPage('../php/errorpage.php','GET');
                                                                                result.then(() => {
                                                                                    flashErrors(["An error has occured."]);
                                                                                    let btn = document.getElementById("returnToHome");
                                                                                    btn.addEventListener('click',() => {
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
                                                                                })
                                                                            }
                                                                        });
                                                                }
                                                            })
                                                        } else if(loan_type === "Business Loan"){
                                                            document.title = "Creditline | Business Details";
                                                            this.document.getElementById("busDetailsSubmit").addEventListener('click', () => {
                                                            
                                                                var business_name = document.getElementById("business_name");
                                                                var date_est = document.getElementById("date_established");
                                                                var desc = document.getElementById("business_desc").value;
                                                                var cert = document.getElementById("cert").files[0];
                                                                var trn = document.getElementById("trn");
                                                                var income = document.getElementById("income").files[0] ;
                                                                var address1 = document.getElementById("address1");
                                                                var address2 = document.getElementById("address2");
                                                                var city = document.getElementById("city");
                                                                var country = document.getElementById("country");
                                                                var num = document.getElementById("business_number");
                                                                let errors = [];
                                                                if(business_name.value == ""){
                                                                    makeAlert(business_name);
                                                                    let error = "Business Name is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(date_est.value == ""){
                                                                    makeAlert(date_est);
                                                                    let error = "Date Established is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(desc.value == ""){
                                                                    makeAlert(desc);
                                                                    let error = "Description is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(typeof cert == undefined){
                                                                    makeAlert(cert);
                                                                    let error = "Certificate is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(trn.value == ""){
                                                                    makeAlert(trn);
                                                                    let error = "TRN is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(!/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(trn.value)){
                                                                    makeAlert(trn);
                                                                    let error = "TRN does not meet the format of a real TRN! Check for spaces and letters in the TRN entered...";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(typeof income == undefined){
                                                                    makeAlert(income);
                                                                    let error = "Income Statement is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(address1.value == ""){
                                                                    makeAlert(address1);
                                                                    let error = "Address 1 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(address2.value == ""){
                                                                    makeAlert(address2);
                                                                    let error = "Address 2 is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(city.value == ""){
                                                                    makeAlert(city);
                                                                    let error = "City is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(country.value == ""){
                                                                    makeAlert(country);
                                                                    let error = "Country is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }
                                                                if(num.value == ""){
                                                                    makeAlert(num);
                                                                    let error = "Business Number is Required!";
                                                                    errors.push(error)
                                                                    flashErrors(errors)
                                                                }                                                          
                                                                if(errors.length == 0){
                                                                
                                                                sessionStorage.setItem("Name of Business",business_name.value);
                                                                sessionStorage.setItem("Date Established",date_est.value);
                                                                sessionStorage.setItem("Business Description",desc);
                                                                sessionStorage.setItem("Address1 of Business",address1.value);
                                                                sessionStorage.setItem("Address2 of Business",address2.value);
                                                                sessionStorage.setItem("City of Business",city.value);
                                                                sessionStorage.setItem("County of Busiess",country.value);
                                                                sessionStorage.setItem("Number of Business",num.value);
        
                                                                var formData = new FormData();
                                                                formData.append("income",income);
                                                                formData.append("cert",cert);
                                                                formData.append("trn",trn.value);
        
                                                                for(i=0;  i<Object.keys(sessionStorage).length; i++){
                                                                    var name = Object.keys(sessionStorage)[i]
                                                                    var val = sessionStorage.getItem(name);
                                                                    formData.append(name,val);
                                                                }
        
                                                                $.ajax({
                                                                    type: "POST",
                                                                    url: "php/sendEmail.php",
                                                                    data: formData,
                                                                    processData: false,
                                                                    contentType: false
                                                                    }).done(function(response){
                                                                        let text = response;
                                                                        console.log(text);
                                                                        if(text == "\"Message has been sent\""){ 
                                                                            result = getFormPage('../php/successpage.php', 'GET');
                                                                            result.then(() => {
                                                                                flashSuccesses(["Application Submitted."]);

                                                                                let btn = document.getElementById("returnToHome");
                                                                                btn.addEventListener('click',() => {
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
                                                                            })
                                                                        } else {
                                                                            result = getFormPage('../php/errorpage.php','GET');
                                                                            result.then(() => {
                                                                                flashErrors(["An error has occured."]);
                                                                                let btn = document.getElementById("returnToHome");
                                                                                btn.addEventListener('click',() => {
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
                                                                            })
                                                                        }
                                                                    });
                                                                }   
                                                            })
                                                        }
                                                    })
                                                }                                          
                                            })    
                                        })
                                    }
                                })
                            })
                        }
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

    var makeAlert = (element) =>{
        element.classList.add("border", "border-danger","rounded","border-3");
    }
    
    var flashErrors = (errors) => {
        let flash_area = document.querySelector("div.flash");
        flash_area.innerHTML = "";
        errors.forEach(error => {
            let new_flash = document.createElement("div");
            new_flash.classList.add("alert", "alert-danger");
            new_flash.innerHTML = error;
            flash_area.appendChild(new_flash);
        });
        scrollTop();
    }

    var flashSuccesses = (successes) => {
        let flash_area = document.querySelector("div.flash");
        flash_area.innerHTML = "";
        successes.forEach(success => {
            let new_flash = document.createElement("div");
            new_flash.classList.add("alert", "alert-success");
            new_flash.innerHTML = success;
            flash_area.appendChild(new_flash);
        });
        scrollTop();
    }

    var changeFilename = (Myfile) => {
        var file = myFile.files[0];  
        var filename = file.name;
        var label = document.getElementById(Myfile.id)
        label.innerHTML = filename
    }
}

