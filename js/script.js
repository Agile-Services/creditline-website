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
                        var id_image = document.getElementById("id");
                        var work_number = document.getElementById("work_business_number");
                        var emp_status = document.getElementById("employement_status");
                        var draw_date = document.getElementById("draw_Date");
                        var plan_amt = document.getElementById("plan_amt");
                        var payment_plan = document.getElementById("");
                        var payment_method = document.getElementById("");
                        var bank = document.getElementById("bank");
                        var acc_number = document.getElementById("acc_num");
                        let errors = []
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
                        if(errors.length == 0){
                            result = getPage('../php/forms/partnerPlan-form.php', 'POST');
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
                        var  picture = document.getElementById("product_img");
                        var  sig = document.getElementById("signature");
                        var  trn = document.getElementById("trn");
                        var  id = document.getElementById("id");
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
                        if(sig.value == ""){
                            makeAlert(sig);
                            let error = "Signature is Required!";
                            errors.push(error)
                            flashErrors(errors)
                        }
                        if(errors.length == 0){        
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
                                        var id_type = document.getElementById("id_type");
                                        var id_num = document.getElementById("id_num");
                                        var id_expiration = document.getElementById("id_expire");
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
                                        if(id_type.value == ""){
                                            makeAlert(id_type);
                                            let error = "ID Type is Required!";
                                            errors.push(error)
                                            flashErrors(errors)
                                        }  
                                        if(id_expiration.value == ""){
                                            makeAlert(id_expiration);
                                            let error = "ID Expiration Date is Required!";
                                            errors.push(error)
                                            flashErrors(errors)
                                        }  
                                        if(id_num.value == ""){
                                            makeAlert(id_num);
                                            let error = "ID Number is Required!";
                                            errors.push(error)
                                            flashErrors(errors)
                                        }  
                                        if(errors.length == 0){
                                            result = getFormPage('../php/forms/contact-details-form.php', 'GET');
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
                                                    let errors = [];
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
                                                        let error = "Emergency Contact Number is Required!";
                                                        errors.push(error)
                                                        flashErrors(errors)
                                                    }
                                                    if(errors.length == 0){
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
                                                                    let errors =[];
                                                                    if(employer.value == ""){
                                                                        makeAlert(employer);
                                                                        let error = "Employer Name is Required!";
                                                                        errors.push(error)
                                                                        flashErrors(errors)
                                                                    }
                                                                    if(title.value == ""){
                                                                        makeAlert(title);
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
                                                                        let error = "Status is Required!";
                                                                        errors.push(error)
                                                                        flashErrors(errors)
                                                                    }
                                                                    if(errors.length == 0){
                                                                        result = getFormPage('../php/forms/employment-details-form.php', 'POST');
                                                                    }
                                                                })
                                                            } else if(loan_type === "Business Loan"){
                                                                document.title = "Creditline | Business Details";
                                                                this.document.getElementById("busDetailsSubmit").addEventListener('click', () => {
                                                                
                                                                    var business_name = document.getElementById("business_name");
                                                                    var date_est = document.getElementById("date_established");
                                                                    var desc = document.getElementById("businss_desc");
                                                                    var cert = document.getElementById("cert");
                                                                    var trn = document.getElementById("trn");
                                                                    var income = document.getElementById("income");
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
                                                                    if(cert.value == null){
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
                                                                    if(income.value == ""){
                                                                        makeAlert(income);
                                                                        let error = "Income is Required!";
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
                                                                        result = getFormPage('../php/forms/business-details.php', 'POST');
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

    var changeFilename = (Myfile) => {
        var file = myFile.files[0];  
        var filename = file.name;
        var label = document.getElementById(Myfile.id)
        label.innerHTML = filename
    }
}

