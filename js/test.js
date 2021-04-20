
//check pawn form
var checkExist = setInterval(function() {
    if (document.getElementById('pawnSubmit')) {
        console.log("Pawn Form Exists!");
        
        document.getElementById('pawnSubmit').onclick = function(el){
        
            fname = document.getElementById("fname");
            lname = document.getElementById("lname");
            mname = document.getElementById("mname");
            mobile = document.getElementById("mobile_number");
            home = document.getElementById("home_number");
            email = document.getElementById("email");
            address1 = document.getElementById("address1");
            address2 = document.getElementById("address2");
            city = document.getElementById("city");
            area = document.getElementById("area");
            post = document.getElementById("post");
            country = document.getElementById("country");
            description = document.getElementById("product_description");
            make = document.getElementById("make");
            model = document.getElementById("model")
            serial_num = document.getElementById("serial_num");
            invoice = document.getElementById("invoice");
            picture = document.getElementById("product_img");
            sig = document.getElementById("signature");
            trn = document.getElementById("trn");
            id = document.getElementById("id");

            text_lst = [fname,lname,mname,mobile,home,email,address1,address2,city,area,post,country,description,make,model,serial_num,invoice,sig];
            file_lst = [trn,id,picture];

            for(i in text_lst){
                if(i.value == ""){
                    i.style.borderColor = "red";
                    el.preventDefault()
                } 
            }

            // for(i in file_lst){
            //     if(i.files.length == 0){
            //         i.style.borderColor = "red";
            //         el.preventDefault()
            //     }
            // }
            
            if(lname.value == ""){
                alert("empty"); 
            }
            clearInterval(checkExist);
        }
    }
    
 }, 1000); // check every 100ms


var checkExist_partner = setInterval(function() {
    if (document.getElementById('partnerPlanSubmit')) {
        console.log("Partner Plan form Exists!");
        document.getElementById('partnerPlanSubmit').onclick = function(el){
            
            fname = document.getElementById("fname");
            lname = document.getElementById("lname");
            mname = document.getElementById("mname");
            mobile = document.getElementById("mobile_number");
            home = document.getElementById("home_number");
            email = document.getElementById("email");
            address1 = document.getElementById("address1");
            address2 = document.getElementById("address2");
            city = document.getElementById("city");
            area = document.getElementById("area");
            post = document.getElementById("post");
            country = document.getElementById("country");
            business_number = document.getElementById("business_number");
            employer_name = document.getElementById("employer_name");
            job_title = document.getElementById("job_title");
            start_date = document.getElementById("start_date");
            end_date = document.getElementById("end_date");
            work_address_line_1 = document.getElementById("work_address1");
            work_address_line_2 = document.getElementById("work_address2");
            work_city = document.getElementById("work_city");
            work_area = document.getElementById("work_area");
            work_post = document.getElementById("work_post");
            other_number = document.getElementById("other");
            posttal = document.getElementById("post");
            country = document.getElementById("country");
            work_country = document.getElementById("work_country");
            trn_image = document.getElementById("trn");
            id_image = document.getElementById("id");
            work_number = document.getElementById("work_business_number");
            emp_status = document.getElementById("employement_status");
            draw_date = document.getElementById("draw_Date");
            plan_amt = document.getElementById("plan_amt");
            payment_plan = document.getElementById("");
            payment_method = document.getElementById("");
            bank = document.getElementById("bank");
            acc_number = document.getElementById("acc_num");


            text_lst = [fname,lname,mname,mobile,home,email,address1,address2,city,area,post,country,business_number,
                employer_name,job_title,start_date,end_date,work_address_line_1,work_address_line_2,
                work_city,work_area,work_post,other_number,posttal,country,work_country,work_number,emp_status,
                draw_date,plan_amt,payment_plan,payment_method,bank,acc_number
    ];
            file_lst = [trn_image,id_image];

            for(i in text_lst){
                if(i.value == ""){
                    i.style.borderColor = "red";
                    el.preventDefault()
                } 
            }

            // for(i in file_lst){
            //     if(i.files.length == 0){
            //         i.style.borderColor = "red";
            //         el.preventDefault()
            //     }
            // }
            
            if(lname.value == ""){
                alert("empty"); 
            }
            clearInterval(checkExist);

                 }
            }
    }, 1000);// check every 100ms sessionStorage.setItem("lastname", "Smith");


var checkExist_loan_purpose = setInterval(function() {
    if (document.getElementById('loanPurposeSubmit')) {
        console.log("Loan Purpose Form Exists!");
        if (document.getElementById('loanPurposeSubmit').onclick = true){
          function myfunction(){
            type = document.getElementById("type").value;
            amt = document.getElementById("loan_amt").value;
            sessionStorage.setItem("Loan Type",type);
            sessionStorage.setItem("Amount",amt);
        }
        myfunction();
    }
    }
}, 1000);// check every 100ms

//get general form information
var checkExist_general_info = setInterval(function() {
    if (document.getElementById('generalInfoSubmit')) {
        console.log("General Info Form Exists!");

        if (document.getElementById('generalInfoSubmit').onclick = true){
            function myfunction(el){
       
            title = document.getElementById("title").value;
            sessionStorage.setItem("Title",title);

            fname = document.getElementById("fname").value;
            sessionStorage.setItem("First Name",fname);

            mname = document.getElementById("mname").value;
            sessionStorage.setItem("Middle Name",mname);

            lname = document.getElementById("lname").value;
            sessionStorage.setItem("Last Name",lname);

            gender = document.getElementById("gender").value;
            sessionStorage.setItem("Gender",gender);

            dob = document.getElementById("dob").value;
            sessionStorage.setItem("DOB",dob);

            pob = document.getElementById("pob").value;
            sessionStorage.setItem("POB",pob);

            marital_status = document.getElementById("marital-status").value;
            sessionStorage.setItem("Marital Status",marital_status);

            mothers_maiden = document.getElementById("mothers_maiden").value;
            sessionStorage.setItem("Mother's Maiden",mothers_maiden);

            dependents = document.getElementById("dependents").value;
            sessionStorage.setItem("Dependents",dependents);

            citizenship = document.getElementById("citizenship").value;
            sessionStorage.setItem("Citizenship",citizenship);

            resident_country = document.getElementById("resident_country").value;
            sessionStorage.setItem("Resident Country",resident_country);

            id_type = document.getElementById("id_type").value;
            sessionStorage.setItem("ID Type",id_type);

            id_num = document.getElementById("id_num").value;
            sessionStorage.setItem("ID Num",id_num);

            id_expire = document.getElementById("id_expire").value;
            sessionStorage.setItem("ID Expiry",id_expire);

            country_of_issue = document.getElementById("country_of_issue").value;
            sessionStorage.setItem("country_of_issue",country_of_issue);

            sig = document.getElementById("sig").value;
            sessionStorage.setItem("Signature",sig);
        }
        }
        myfunction();
    }
}, 1000);// check every 100ms

//get contact information
var checkExist_employment = setInterval(function() {
    if (document.getElementById('contactDetailsSubmit')) {
        console.log("Contact Form Exists!");      
        if (document.getElementById('contactDetailsSubmit').onclick = true){
            function myfunction(el){
       
            mphome = document.getElementById("mobile_number").value;
            sessionStorage.setItem("Mobile",mphome);

            hphone = document.getElementById("home_number").value;
            sessionStorage.setItem("Home Phone",hphone);

            bphone = document.getElementById("business_number").value;
            sessionStorage.setItem("Business Number",bphone);

            ophone = document.getElementById("other_number").value;
            sessionStorage.setItem("Other Number",ophone);

            email = document.getElementById("email").value;
            sessionStorage.setItem("Email",email);

            address1 = document.getElementById("address1").value;
            sessionStorage.setItem("Address Line 1",address1);

            address2 = document.getElementById("address2").value;
            sessionStorage.setItem("Address Line 2",address2);

            district = document.getElementById("district").value;
            sessionStorage.setItem("City/Town",district);

            rarea = document.getElementById("rarea").value;
            sessionStorage.setItem("Residential Area",rarea);

            zip = document.getElementById("zip").value;
            sessionStorage.setItem("Postal Code",zip);

            efname = document.getElementById("emergency_contact_fname").value;
            sessionStorage.setItem("E-Contact First Name",efname);

            emname = document.getElementById("emergency_contact_mname").value;
            sessionStorage.setItem("E-Contact Middle Name",emname);

            elname = document.getElementById("emergency_contact_lname").value;
            sessionStorage.setItem("E-Contact Last Name",elname);

            emobile = document.getElementById("emergency_contact_mobile_number").value;
            sessionStorage.setItem("E-Contact Mobile Number",emobile);

            ehome = document.getElementById("emergency_contact_home_number").value;
            sessionStorage.setItem("E-Contact Home Number",ehome);

            ebusiness = document.getElementById("emergency_contact_business_number").value;
            sessionStorage.setItem("E-Contact Business Number",ebusiness);

            eother = document.getElementById("emergency_contact_other_number").value;
            sessionStorage.setItem("E-Contact Other Number",eother);
        }
        }
        myfunction();

//         function validateForm()
//         {
//         var fields = ["name, phone", "compname", "mail", "compphone", "adres", "zip"]

//         var i, l = fields.length;
//         var fieldname;
//         for (i = 0; i < l; i++) {
//             fieldname = fields[i];
//             if (document.forms["register"][fieldname].value === "") {
//             alert(fieldname + " can not be empty");
//             return false;
//             }
//         }
//         return true;
// }

    }
}, 1000);// check every 100ms

var checkExist_contact = setInterval(function() {
    if (document.getElementById('empDetailsSubmit')) {
        console.log("Exists!");

    }
}, 1000);// check every 100ms