
//check pawn form
var checkExist = setInterval(function() {
    if (document.getElementById('pawnSubmit')) {
        console.log("Pawn Form Exists!");
        
        document.getElementById('pawnSubmit').onclick = function(el){
        

 
            clearInterval(checkExist);
        }
    }
    
 }, 1000); // check every 100ms


var checkExist_partner = setInterval(function() {
    if (document.getElementById('partnerPlanSubmit')) {
        console.log("Partner Plan form Exists!");
        document.getElementById('partnerPlanSubmit').onclick = function(el){   
            console.log("1");
           
            };
            
            clearInterval(checkExist);

                 
            }
    }, 1000);// check every 100ms sessionStorage.setItem("lastname", "Smith");


var checkExist_loan_purpose = setInterval(function() {
    if (document.getElementById('loanPurposeSubmit')) {
        clearInterval(checkExist_loan_purpose);
        console.log("Loan Purpose Form Exists!");
        document.getElementById('loanPurposeSubmit').addEventListener("click",function myfunction(){
            type = document.getElementById("type").value;
            amt = document.getElementById("loan_amt").value;
            sessionStorage.setItem("Loan Type",type);
            sessionStorage.setItem("Loan Amount",amt);
        });
    }
    }, 1000);// check every 100ms

//get general form information
var checkExist_general_info = setInterval(function() {
    if (document.getElementById('generalInfoSubmit')) {
        console.log("General Info Form Exists!");
        clearInterval(checkExist_general_info);
        document.getElementById('generalInfoSubmit').addEventListener("click",function myfunction(el){
       
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

            marital_status = document.getElementById("marital_status").value;
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
        })
        }
    }, 1000);// check every 100ms

//get contact information
var checkExist_employment = setInterval(function() {
    if (document.getElementById('contactDetailsSubmit')) {
        console.log("Contact Form Exists!"); 
        clearInterval(checkExist_employment);     
        if (document.getElementById('contactDetailsSubmit').onclick = true){
            function myfunction(){
       
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
        
        myfunction();

    }}
}, 1000);// check every 100ms

var checkExist_contact = setInterval(function() {
    if (document.getElementById('empDetailsSubmit')) {
        console.log("Employment Form Exists!");
        clearInterval(checkExist_contact);
        document.getElementById('empDetailsSubmit').addEventListener("click",function(){
            
            // employer_name = document.getElementById("employer_name").value;
            // job_title = document.getElementById("job_title").value;sessionStorage.getItem("autosave")
            elements = document.getElementsByClassName("formVal");
            formData = new FormData();
            for(var i=0; i<elements.length; i++)
            {
                formData.append(elements[i].name, elements[i].value);
            }
            var name;
            var val;
            for(i=0;  i<Object.keys(sessionStorage).length; i++){
                name = Object.keys(sessionStorage)[i]
                val = sessionStorage.getItem(name);
                formData.append(name,val);
                console.log(name,val);
            }
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function()
            {
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
                {
                    alert(xmlHttp.responseText);
                }
            }
            xmlHttp.open("post", "php/verify.php"); 
            xmlHttp.send(formData); 
         

    });
}
}, 1000);// check every 100ms