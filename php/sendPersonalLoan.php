<?php 
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
session_start();


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $Loan_Amount = filter_var($_POST['Loan_Amount'],FILTER_SANITIZE_STRING);

    $title = filter_var($_POST['Title'],FILTER_SANITIZE_STRING);
    $fname = filter_var($_POST['First_Name'],FILTER_SANITIZE_STRING);
    $mname = filter_var($_POST['Middle_Name'],FILTER_SANITIZE_STRING);
    $lname = filter_var($_POST['Last_Name'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    $Email = filter_var($_POST['Email'],FILTER_SANITIZE_EMAIL);
    $DOB = filter_var($_POST['DOB'],FILTER_SANITIZE_STRING); 
    $Gender = filter_var($_POST['Gender'],FILTER_SANITIZE_STRING);
    $Home_Phone = filter_var($_POST['Home_Phone'],FILTER_SANITIZE_STRING);
    $Mobile = filter_var($_POST['Mobile'],FILTER_SANITIZE_STRING);
    $Address_Line_1 = filter_var($_POST['Address_Line_1'],FILTER_SANITIZE_STRING);
    $Address_Line_2 = filter_var($_POST['Address_Line_2'],FILTER_SANITIZE_STRING);
    $City = filter_var($_POST['City/Town'],FILTER_SANITIZE_STRING);
    $Resident_Country = filter_var($_POST['Resident_Country'],FILTER_SANITIZE_STRING);

    $E_Contact_First_Name = filter_var($_POST['E-Contact_First_Name'],FILTER_SANITIZE_STRING);
    $E_Contact_Last_Name = filter_var($_POST['E-Contact_Last_Name'],FILTER_SANITIZE_STRING);
    $E_Contact_Business_Number = filter_var($_POST['E-Contact_Business_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Other_Number = filter_var($_POST['E-Contact_Other_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Mobile_Number = filter_var($_POST['E-Contact_Mobile_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Home_Number  = filter_var($_POST['E-Contact_Home_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Middle_Name = filter_var($_POST['E-Contact_Middle_Name'],FILTER_SANITIZE_STRING);
    
    
    $Dependents = filter_var($_POST['Dependents'],FILTER_SANITIZE_STRING);
    $POB = filter_var($_POST['POB'],FILTER_SANITIZE_STRING);
    $Postal_Code = filter_var($_POST['Postal_Code'],FILTER_SANITIZE_STRING);
    $Citizenship = filter_var($_POST['Citizenship'],FILTER_SANITIZE_STRING);
    $Residential_Area = filter_var($_POST['Residential_Area'],FILTER_SANITIZE_STRING);  
    $Marital_Status = filter_var($_POST['Marital_Status'],FILTER_SANITIZE_STRING);
    $Mothers_Maiden = filter_var($_POST["Mother's_Maiden"],FILTER_SANITIZE_STRING);
       
    
    $employer_name = filter_var($_POST['employer_name'],FILTER_SANITIZE_STRING);
    $job_title = filter_var($_POST['job_title'],FILTER_SANITIZE_STRING);
    $Employment_status = filter_var($_POST['Employment_status'],FILTER_SANITIZE_STRING);
    $Address1_of_Business = filter_var($_POST['Address1_of_Work'],FILTER_SANITIZE_STRING);
    $Address2_of_Business = filter_var($_POST['Address2_of_Work'],FILTER_SANITIZE_STRING);
    $City_of_Business = filter_var($_POST['City/Town'],FILTER_SANITIZE_STRING);
    $County_of_Busiess = filter_var($_POST['Country_of_work'],FILTER_SANITIZE_STRING);
    $start_date = filter_var($_POST['start_date'],FILTER_SANITIZE_STRING);
    $Number_of_Business = filter_var($_POST['Number_of_Business'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    
   
    $message = "Title".$title."<br>First Name: ".$fname."<br>Middle Name: ".$mname."<br>Last Name: ".$lname."TRN: ".$trn."<br>Gender: ".$Gender."<br>Marital Status: ".$Marital_Status."<br>Mobile Number: ".$Mobile."<br>Home Phone: ".$Home_Phone."<br>Mother's Madien Name: ".$Mothers_Maiden.
    "<br>Email Address: ".$Email."<br>Address: ".$Address_Line_1." ".$Address_Line_2." ".$City."<br>Postal Code: ".$Postal_Code."<br>DOB: ".$DOB."<br>Place of Birth: ".$POB."<br>Citizenship: ".$Citizenship."<br>Number of Dependents: ".$Dependents."<br>Country of Residence: ".$Resident_Country."<br>Emergency Contact: ".$E_Contact_First_Name." ".$E_Contact_Middle_Name." ".$E_Contact_Last_Name.
    "<br>Contact Number: ".$E_Contact_Mobile_Number."/".$E_Contact_Home_Number."/".$E_Contact_Business_Number.
    "<br>".
    "Employment Information<br>".
    "Name of Employer: ".$employer_name."Job Title: ".$job_title."<br>Start Date: ".$start_date."<br>Employment Status: ".$Employment_status."<br>Address: ".$Address1_of_Business." ".$Address2_of_Business." ".$City_of_Business."<br>Number: ".$Number_of_Business."<br>Country of Work: ".$County_of_Busiess."<br><bold>Loan Amount: </bold>".$Loan_Amount;


    $job_letter = $_FILES['job_letter'];
    $job_letter_filename = $job_letter['name'];
    $job_letter_fieTempname = $job_letter['tmp_name'];
    $job_letter_filesize = $job_letter['size'];
    $job_letter_fileError = $job_letter['error'];
    $job_letter_fileType = $job_letter['type'];
    $job_letter_fileExt = explode(".",$job_letter_filename);
    $job_letter_actualFileExt = strtolower(end($job_letter_fileExt));

    $pay_slip = $_FILES['pay_1'];
    $pay1_filename = $pay_slip['name'];
    $pay1_fileTempname = $pay_slip['tmp_name'];
    $pay1_filesize = $pay_slip['size'];
    $pay1_fileError = $pay_slip['error'];
    $pay1_fileType = $pay_slip['type'];
    $pay1_fileExt = explode(".",$pay1_filename);
    $pay1_fileActualExt = strtolower(end($pay1_fileExt));

    $pay_slip2 = $_FILES['pay_2'];
    $pay2_filename = $pay_slip2['name'];
    $pay2_fileTempname = $pay_slip2['tmp_name'];
    $pay2_filesize = $pay_slip2['size'];
    $pay2_fileError = $pay_slip2['error'];
    $pay2_fileType = $pay_slip2['type'];
    $pay2_fileExt = explode(".",$pay2_filename);
    $pay2_fileActualExt = strtolower(end($pay2_fileExt));

    $pay_slip3 = $_FILES['pay_3'];
    $pay3_filename = $pay_slip3['name'];
    $pay3_fileTempname = $pay_slip3['tmp_name'];
    $pay3_filesize = $pay_slip3['size'];
    $pay3_fileError = $pay_slip3['error'];
    $pay3_fileType = $pay_slip3['type'];
    $pay3_fileExt = explode(".",$pay3_filename);
    $pay3_fileActualExt = strtolower(end($pay3_fileExt));

    $addr = $_FILES['proof_of_addr'];
    $addr_filename = $addr['name'];
    $addr_fileTempname = $addr['tmp_name'];
    $addr_filesize = $addr['size'];
    $addr_fileError = $addr['error'];
    $addr_fileType = $addr['type'];
    $addr_fileExt = explode(".",$addr_filename);
    $addr_fileActualExt = strtolower(end($addr_fileExt));
   

    $allowed = array('jpg','jpeg','pdf','docx','png');

    //Income Statement 
    if(in_array($job_letter_actualFileExt,$allowed)){
       if($job_letter_fileError === 0){
            if($job_letter_filesize < 5000000){
                $fileNameNew = uniqid('',true).".".$job_letter_actualFileExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                if(move_uploaded_file($job_letter_fieTempname,$fileDestination) ){
                    // echo "File name: ".$job_letter_fieTempname." File Path: ".$fileDestination."<br>";    
                 }
            }
            else{
                echo "Size of file is too large";
            }
       }
       else{
        echo "There is was an error uploading your file please try again";
       }
    }
    else{
        echo "You cannot upload file of this type";
    }

   
     if(in_array($pay1_fileActualExt,$allowed)){
        if($pay1_fileError === 0){
             if($pay1_filesize < 5000000){
                 $pay1_fileNameNew2 = uniqid('',true).".".$pay1_fileActualExt;
                 $pay1_fileDestination2 = 'uploads/'.$pay1_fileNameNew2;
                 if(move_uploaded_file($pay1_fileTempname,$pay1_fileDestination2) ){
                    // echo "File name: ".$pay1_fileTempname." File Path: ".$pay1_fileDestination2."<br>";   
                }
             }
             else{
                 echo "Size of file is too large";
             }
        }
        else{
         echo "There is was an error uploading your file please try again";
        }

    }
     else{
         echo "You cannot upload file of this type";
     }


     if(in_array($pay2_fileActualExt,$allowed)){
        if($pay2_fileError === 0){
             if($pay2_filesize < 5000000){
                 $pay2_fileNameNew = uniqid('',true).".".$pay2_fileActualExt;
                 $pay2_fileDestination = 'uploads/'.$pay2_fileNameNew;
                 if(move_uploaded_file($pay2_fileTempname,$pay2_fileDestination) ){
                    //  echo "File name: ".$pay2_fileTempname." File Path: ".$pay2_fileDestination."<br>";    
                  }
             }
             else{
                 echo "Size of file is too large";
             }
        }
        else{
         echo "There is was an error uploading your file please try again";
        }
     }
     else{
         echo "You cannot upload file of this type";
     }


     if(in_array($pay3_fileActualExt,$allowed)){
        if($pay3_fileError === 0){
             if($pay3_filesize < 5000000){
                 $pay3_fileNameNew = uniqid('',true).".".$pay3_fileActualExt;
                 $pay3_fileDestination = 'uploads/'.$pay3_fileNameNew;
                 if(move_uploaded_file($pay3_fileTempname,$pay3_fileDestination) ){
                    //  echo "File name: ".$pay3_fileTempname." File Path: ".$pay3_fileDestination."<br>";    
                  }
             }
             else{
                 echo "Size of file is too large";
             }
        }
        else{
         echo "There is was an error uploading your file please try again";
        }
     }
     else{
         echo "You cannot upload file of this type";
     }

     if(in_array($addr_fileActualExt,$allowed)){
        if($addr_fileError === 0){
             if($addr_filesize < 5000000){
                 $addr_fileNameNew = uniqid('',true).".".$addr_fileActualExt;
                 $addr_fileDestination = 'uploads/'.$addr_fileNameNew;
                 if(move_uploaded_file($addr_fileTempname,$addr_fileDestination) ){
                    //  echo "File name: ".$addr_fileTempname." File Path: ".$addr_fileDestination."<br>";    
                  }
             }
             else{
                 echo "Size of file is too large";
             }
        }
        else{
         echo "There is was an error uploading your file please try again";
        }
     }
     else{
         echo "You cannot upload file of this type";
     }
     


//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
    //$mail->SMTPDebug = true;
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('info@example.com', 'Mailer');
    $mail->addAddress('', 'Joe User');     //Add a recipient


    //Add attachments
    $mail->addAttachment($fileDestination, $fileNameNew); 
    $mail->addAttachment($pay1_fileDestination2, $pay1_fileNameNew2);
    $mail->addAttachment($pay2_fileDestination, $pay2_fileNameNew);
    $mail->addAttachment($pay3_fileDestination,$pay3_fileNameNew);
    $mail->addAttachment($addr_fileDestination,$addr_fileNameNew);
    $mail->addAttachment($_SESSION["gov_id1_fileDestination"], $_SESSION["gov_id1_fileNameNew"]);
    $mail->addAttachment($_SESSION["gov_id2_fileDestination"], $_SESSION["gov_id2_fileNameNew"]);

    
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Pay Day Loan Application';
    $mail->Body    = $message;
    $mail->AltBody = $message;

    $mail->send();
    echo json_encode('Message has been sent');
    } catch (Exception $e) {
        echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
  
}
?>