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

                        if(cash.checked == false && bank_transfer.checked == false){
                            document.getElementById("error1").innerHTML = "Please mark one of the checkboxs";  
                        }
                        else if(cash.checked == true && bank_transfer.checked == true){
                            document.getElementById("error1").innerHTML = "Please mark only one of the checkboxs";  
                        }
                        else if(cash.checked == true && bank_transfer.checked == false){
                            payment_method=cash.value;
                        }
                        else if(cash.checked == false && bank_transfer.checked == true){
                            payment_method=bank_transfer.value;
                        }


                        if(weekly.checked == false && fortnight.checked == false && monthly.checked == false){
                            return document.getElementById("error").innerHTML = "Please mark one of the checkboxs";  
                        }
                        else if(weekly.checked == true && fortnight.checked == true && monthly.checked == true){
                            return document.getElementById("error").innerHTML = "Please mark only one of the checkboxs";  
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
                            return document.getElementById("error2").innerHTML = "Please mark one of the checkboxs";  
                        }
                        else if(full_time.checked == true && part_time.checked == true && self_employed.checked == true){
                            return document.getElementById("error2").innerHTML = "Please mark only one of the checkboxs";  
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
                            fname.style.borderColor = "red";
                        }
                        else if(mname.value == ""){
                            mname.style.borderColor = "red";
                        }
                        else if(lname.value == ""){
                            lname.style.borderColor = "red";
                        }
                        else if(mobile.value == ""){
                            mobile.style.borderColor = "red";
                        }
                        else if(email.value == ""){
                            email.style.borderColor = "red";
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
                        else if(employer_name.value == ""){
                            employer_name.style.borderColor = "red";
                        }
                        else if(job_title.value == ""){
                            job_title.style.borderColor = "red";
                        }
                        else if(start_date.value == ""){
                            start_date.style.borderColor = "red";
                        }
                        else if(work_address_line_1.value == ""){
                            work_address_line_1.style.borderColor = "red";
                        }
                        else if(work_address_line_2.value == ""){
                            work_address_line_2.style.borderColor = "red";
                        }
                        else if(work_city.value == ""){
                            work_city.style.borderColor = "red";
                        }
                        else if(trn.value == ""){
                            trn.style.borderColor = "red";
                        }
                        else if(work_number.value == ""){
                            work_number.style.borderColor = "red";
                        }
                        else if(draw_date.value == ""){
                            draw_date.style.borderColor = "red";
                        }
                        else if(plan_amt.value == ""){
                            plan_amt.style.borderColor = "red";
                        }
                        else if( document.getElementById("id").fileslength == 0){
                        return document.getElementById("error3").innerHTML = "No Files have been selected";
                        }
                        else{
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
                            var loan_type = document.getElementById("type").value;
                            if(amount.value == ""){
                                amount.style.borderColor = "red";
                            } else {

                                sessionStorage.setItem("Loan Type",loan_type);
                                sessionStorage.setItem("Loan Amount",amount.value);
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
                                    var trn = document.getElementById("trn");
                                    var id = document.getElementById("id").files[0];
                                    var id2= document.getElementById("id2").files[0];
                                
                            
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
                                    else if(typeof id === 'undefined'){
                                        alert("No file selected for Business Income Statement");
                                    }
                                    else if(typeof id2 === 'undefined'){
                                        alert("No file selected for Business Income Statement");
                                    }
                                    else if(trn.value == ""){
                                        trn.style.borderColor = "red";
                                    }
                                    else{

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
                                        formData.append("id",id);
                                        formData.append("id2",id2);
                                        
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
                                            }                                          
                                            result.then(() => {
                                                console.log(loan_type);
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
                                                        var proof_of_addr = document.getElementById("proof_of_address").files[0]

                                                        
                                                        
    
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
                                                        else if (typeof pay1 === 'undefined') {
                                                            alert("No file selected for Pay Slip One");
                                                          }
                                                          else if (typeof pay2 === 'undefined') {
                                                            alert("No file selected for for Pay Slip Two");
                                                          }
                                                          else if (typeof pay3 === 'undefined') {
                                                            alert("No file selected for for Pay Slip Three");
                                                          }
                                                          else if (typeof letter === 'undefined') {
                                                            alert("No file selected for Business Certification");
                                                          }
                                                          else if (typeof proof_of_addr === 'undefined') {
                                                            alert("No file selected for Business Certification");
                                                          }
                                                        else{
                                                        
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
                                                                    console.log(response);
                                                                });

                                                            result = getFormPage('../php/forms/employment-details-form.php', 'POST');
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
                                                        var income = document.getElementById("income").files[0];
                                                        var address1 = document.getElementById("address1");
                                                        var address2 = document.getElementById("address2");
                                                        var city = document.getElementById("city");
                                                        var country = document.getElementById("country");
                                                        var num = document.getElementById("business_number");
                                                        
    
                                                        if(business_name.value == ""){
                                                            business_name.style.borderColor = "red";
                                                        }
                                                        else if(date_est.value == ""){
                                                            date_est.style.borderColor = "red";
                                                        }
                                                        else if(desc == ""){
                                                            desc.style.borderColor = "red";
                                                        }
                                                        else if (typeof cert === 'undefined') {
                                                            alert("No file selected for Business Certification");
                                                          }
                                                        else if(trn.value == ""){
                                                            trn.style.borderColor = "red";
                                                        }
                                                        else if(typeof income === 'undefined'){
                                                            alert("No file selected for Business Income Statement");
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
                                                        else{
                                                        
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
                                                                console.log(response);
                                                            });

                                                            result = getFormPage('../php/forms/business-details.php', 'POST');
                                                        }   
                                                    })
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

