
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

