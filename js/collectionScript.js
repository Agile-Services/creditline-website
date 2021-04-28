
   //Process information from pawn form
   var btn = document.getElementById("pawnSubmit");

    btn.addEventListener('click',function(el){
        el.preventDefault();

        

        if (trn_image==null){
            alert("TRN was not uploaded");
        }
        if (id_image==null){
            alert("ID was not uploaded");
        }
        if (invoice==null){
            alert("Invoice was not uploaded");
        }
        if (product_image==null){
            alert("Product Image was not uploaded");
        }

        //var httpRequest = new XMLHttpRequest();
        //var url = "validate.php";
        //httpRequest.open('POST',url,true);
        //httpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        //httpRequest.send();
    });

    //method to check if field is empty
    function check(el){
        if (el == ""){
            alert("A required field is missing");
        }
    }

    //method to change backgound colour
    function color(val){
        val.style.backgroundColor = "red";
    }

    //process information from patner plan form
    var btn2 = document.getElementById("partnerPlanSubmit");
    btn2.addEventListener('click',function(el){
        el.preventDefault();

        var fname = document.getElementById("fname").value;
        var middle_name = document.getElementById("mname").value;
        var lname = document.getElementById("lname").value;
        var mobile = document.getElementById("moble_number").value;
        var home_number = document.getElementById("home_number").value;
        var email = document.getElementById("email").value;
        var address_line_1 = document.getElementById("address1").value;
        var address_line_2 = document.getElementById("address2").value;
        var city = document.getElementById("city");
        var district = document.getElementById("area");
        var business_number = document.getElementById("business_number").value;
        var employer_name = document.getElementById("employer_name").value;
        var job_title = document.getElementById("job_title").value;
        var start_date = document.getElementById("start_date").value;
        var end_date = document.getElementById("end_date").value;
        var work_address_line_1 = document.getElementById("work_address1").value;
        var work_address_line_2 = document.getElementById("work_address2").value;
        var work_city = document.getElementById("work_city").value;
        var work_area = document.getElementById("work_area").value;
        var work_post = document.getElementById("work_post").value;
        var other_number = document.getElementById("other").value;
        var posttal = document.getElementById("post").value;
        var country = document.getElementById("country").value;
        var work_country = document.getElementById("work_country");
        var trn_image = document.getElementById("trn").value;
        var id_image = document.getElementById("id").value;
        var work_number = document.getElementById("work_business_number");
        var emp_status = document.getElementById("").value;
        var draw_date = document.getElementById("draw_Date").value;
        var plan_amt = document.getElementById("plan_amt").value;
        var payment_plan = document.getElementById("").value;
        var payment_method = document.getElementById("").value;
        var bank = document.getElementById("bank").value;
        var acc_number = document.getElementById("acc_num").value;


        var lst = [fname,middle_name,lname,mobile,home_number,email,address_line_1,
            address_line_2,posttal,country,description,city,district,work_area,work_post,
            work_country,sig];
        
        for(i=0;i<lst.length;i++){
            check(i);
        }

        if (trn_image==null){
            alert("TRN was not uploaded");
        }
        if (id_image==null){
            alert("ID was not uploaded");
        }

        var checkedValue = null; 
        var inputElements = document.getElementById("payment_plan");
        for(var i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                checkedValue = inputElements[i].value;
                break;
            }
        }

        var checkedValue2 = null; 
        var inputElements2 = document.getElementById("employement_status");
        for(var i=0; inputElements2[i]; ++i){
            if(inputElements[i].checked){
                checkedValue2 = inputElements[i].value;
                break;
            }
        }

        var httpRequest = new XMLHttpRequest();
        var url = "validate.php";
      //  httpRequest.open('POST',url,true);
      //  httpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
      //  httpRequest.send();
    });

    //loan purpose form
    var btn3 = document.getElementById("loanPurposeSubmit");
    var loan_type;
    var loan_amt;

    btn3.addEventListener('click',function(el){
        el.preventDefault();
        loan_amt = document.getElementById("loan_amt").value;
        loan_type = document.getElementById("loan_type").value;

        var lst = [loan_amt,loan_type]

        for(i=0;i<lst.length;i++){
            check(i);
        }
       
    });


    //general info form

    var btn4 = document.getElementById("general_form_button");
    var title;
    var fname;
    var mname;
    var lname;
    var gender;
    var dob;
    var pob;
    var marital_status;
    var mothers_madian;
    var num_of_dependents;
    var citizenship;
    var residence;
    var id_type;
    var id_num;
    var id_expiration;
    var country_issued;
    var sig;

    btn4.addEventListener('click',function(el){
        el.preventDefault();

        title = document.getElementById("title").value;
        fname = document.getElementById("fname").value;
        mname = document.getElementById("mname").value;
        lname = document.getElementById("lname").value;
        gender = document.getElementById("gender").value;
        dob = document.getElementById("dob").value;
        pob = document.getElementById("pob").value;
        marital_status = document.getElementById("marital_status").value;
        mothers_madian = document.getElementById("mothers_maiden").value;
        num_of_dependents = document.getElementById("dependents").value;
        citizenship = document.getElementById("citizenship").value;
        residence = document.getElementById("residence").value;
        id_type = document.getElementById("id_type").value;
        id_num = document.getElementById("id_num").value;
        id_expiration = document.getElementById("id_expire").value;
        country_issued = document.getElementById("issued_country").value;
        sig = document.getElementById("sig").value;

        var lst = [title,fname,mname,lname,gender,dob,pob,marital_status,mothers_madian,
                    num_of_dependents,citizenship,residence,id_type,id_num,id_expiration,
                    country_issued,sig];

        for(i=0;i<lst.length;i++){
            check(i);
        }
    });

