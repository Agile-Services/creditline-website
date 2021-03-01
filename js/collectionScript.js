
   //Process information from pawn form
   var btn = document.getElementById("pawnSubmit");

    btn.addEventListener('click',function(el){
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
        var post = document.getElementById("post").value;
        var business_number = document.getElementById("business_number").value;
        var other_number = document.getElementById("other").value;
        var posttal = document.getElementById("post").value;
        var country = document.getElementById("country").value;
        var trn_image = document.getElementById("trn").value;
        var id_image = document.getElementById("id").value;
        var description = document.getElementById("product_description").value;
        var make = document.getElementById("make").value;
        var model = document.getElementById("model").value;
        var serial_number = document.getElementById("serial_num").value;
        var invoice = document.getElementById("invoice").value;
        var product_image = document.getElementById("product_img").value;
        var sig = document.getElementById("signature").value;

        lst = [fname,middle_name,lname,mobile,home_number,email,address_line_1,
            address_line_2,posttal,country,description,city,district,post,
            make,model,serial_number,sig];
        
        for(i=0;i<lst.length;i++){
            check(i);
        }

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

        var httpRequest = new XMLHttpRequest();
        var url = "validate.php";
        httpRequest.open('POST',url,true);
        httpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        httpRequest.send();
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


        lst = [fname,middle_name,lname,mobile,home_number,email,address_line_1,
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
        httpRequest.open('POST',url,true);
        httpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        httpRequest.send();
    });

