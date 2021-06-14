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

    $Email = filter_var($_POST['Email'],FILTER_SANITIZE_EMAIL);
    $E_Contact_Business_Number = filter_var($_POST['E-Contact_Business_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Other_Number = filter_var($_POST['E-Contact_Other_Number'],FILTER_SANITIZE_STRING);
    $DOB = filter_var($_POST['DOB'],FILTER_SANITIZE_STRING); 
    $Dependents = filter_var($_POST['Dependents'],FILTER_SANITIZE_STRING);
    $POB = filter_var($_POST['POB'],FILTER_SANITIZE_STRING);
    $Postal_Code = filter_var($_POST['Postal_Code'],FILTER_SANITIZE_STRING);
    $Address_Line_1 = filter_var($_POST['Address_Line_1'],FILTER_SANITIZE_STRING);
    $Address_Line_2 = filter_var($_POST['Address_Line_2'],FILTER_SANITIZE_STRING);
    $Residential_Area = filter_var($_POST['Residential_Area'],FILTER_SANITIZE_STRING);
    $Home_Phone = filter_var($_POST['Home_Phone'],FILTER_SANITIZE_STRING);
    $Marital_Status = filter_var($_POST['Marital_Status'],FILTER_SANITIZE_STRING);
    $Gender = filter_var($_POST['Gender'],FILTER_SANITIZE_STRING);
    $City = filter_var($_POST['City/Town'],FILTER_SANITIZE_STRING);
    $Loan_Amount = filter_var($_POST['Loan_Amount'],FILTER_SANITIZE_STRING);
    $Mobile = filter_var($_POST['Mobile'],FILTER_SANITIZE_STRING);
    $Citizenship = filter_var($_POST['Citizenship'],FILTER_SANITIZE_STRING);
    $Name_of_Business = filter_var($_POST['Name_of_Business'],FILTER_SANITIZE_STRING);
    $Date_Established = filter_var($_POST['Date_Established'],FILTER_SANITIZE_STRING);
    $Business_Description = filter_var($_POST['Business_Description'],FILTER_SANITIZE_STRING);
    $Address1_of_Business = filter_var($_POST['Address1_of_Business'],FILTER_SANITIZE_STRING);
    $Address2_of_Business = filter_var($_POST['Address2_of_Business'],FILTER_SANITIZE_STRING);
    $City_of_Business = filter_var($_POST['City_of_Business'],FILTER_SANITIZE_STRING);
    $title = filter_var($_POST['Title'],FILTER_SANITIZE_STRING);
    $E_Contact_First_Name = filter_var($_POST['E-Contact_First_Name'],FILTER_SANITIZE_STRING);
    $E_Contact_Last_Name = filter_var($_POST['E-Contact_Last_Name'],FILTER_SANITIZE_STRING);
    $County_of_Busiess = filter_var($_POST['County_of_Busiess'],FILTER_SANITIZE_STRING);
    $E_Contact_Middle_Name = filter_var($_POST['E-Contact_Middle_Name'],FILTER_SANITIZE_STRING);
    $Resident_Country = filter_var($_POST['Resident_Country'],FILTER_SANITIZE_STRING);
    $Number_of_Business = filter_var($_POST['Number_of_Business'],FILTER_SANITIZE_STRING);
    $Mothers_Maiden = filter_var($_POST["Mother's_Maiden"],FILTER_SANITIZE_STRING);
    $fname = filter_var($_POST['First_Name'],FILTER_SANITIZE_STRING);
    $mname = filter_var($_POST['Middle_Name'],FILTER_SANITIZE_STRING);
    $lname = filter_var($_POST['Last_Name'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    $E_Contact_Mobile_Number = filter_var($_POST['E-Contact_Mobile_Number'],FILTER_SANITIZE_STRING);
    $E_Contact_Home_Number  = filter_var($_POST['E-Contact_Home_Number'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    
    $message = "Title".$title."<br>First Name: ".$fname."<br>Middle Name: ".$mname."<br>Last Name: ".$lname."<br>Gender: ".$Gender."TRN: ".$trn."<br>Marital Status: ".$Marital_Status."<br>Mobile Number: ".$Mobile."<br>Home Phone: ".$Home_Phone."<br>Mother's Madien Name: ".$Mothers_Maiden.
    "<br>Email Address: ".$Email."<br>Address: ".$Address_Line_1." ".$Address_Line_2." ".$City."<br>Postal Code: ".$Postal_Code."<br>DOB: ".$DOB."<br>Place of Birth: ".$POB."<br>Citizenship: ".$Citizenship."<br>Number of Dependents: ".$Dependents."<br>Country of Residence: ".$Resident_Country."<br>Emergency Contact: ".$E_Contact_First_Name." ".$E_Contact_Middle_Name." ".$E_Contact_Last_Name.
    "<br>Contact Number: ".$E_Contact_Mobile_Number."/".$E_Contact_Home_Number."/".$E_Contact_Business_Number.
    "<br>".
    "Business Information<br>".
    "Name of Business: ".$Name_of_Business."<br>Date Establish: ".$Date_Established."<br>Description: ".$Business_Description."<br>Address: ".$Address1_of_Business." ".$Address2_of_Business." ".$City_of_Business."<br>Number: ".$Number_of_Business."<br>Business TRN: ".$trn."<br>Country of Operation".$County_of_Busiess."<br><bold>Loan Amount: </bold>".$Loan_Amount;


    //id file
    $id = $_FILES['income'];
    $filename = $_FILES['income']['name'];
    $fileTempname = $_FILES['income']['tmp_name'];
    $fileSize = $_FILES['income']['size'];
    $fileError = $_FILES['income']['error'];
    $fileType = $_FILES['income']['type'];
    $fileExt = explode(".",$filename);
    $fileActualExt = strtolower(end($fileExt));
    
    $cert = $_FILES['cert'];
    $cert_fileTempname = $_FILES['cert']['tmp_name'];
    $cert_filename = $_FILES['cert']['name'];
    $cert_fileSize = $_FILES['cert']['size'];
    $cert_fileError = $_FILES['cert']['error'];
    $cert_fileType = $_FILES['cert']['type'];
    $cert_fileExt = explode(".",$cert_filename);
    $cert_fileActualExt = strtolower(end($cert_fileExt));
   

    $allowed = array('jpg','jpeg','pdf','docx','png');

    //Income Statement 
    if(in_array($fileActualExt,$allowed)){
       if($fileError === 0){
            if($fileSize < 5000000){
                $fileNameNew = uniqid('',true).".".$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                if(move_uploaded_file($fileTempname,$fileDestination) ){
                    echo "File name: ".$fileTempname." File Path: ".$fileDestination."<br>";    
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

     //Business Certification
     if(in_array($cert_fileActualExt,$allowed)){
        if($cert_fileError === 0){
             if($cert_fileSize < 5000000){
                 $cert_fileNameNew2 = uniqid('',true).".".$cert_fileActualExt;
                 $cert_fileDestination2 = 'uploads/'.$cert_fileNameNew2;
                 if(move_uploaded_file($cert_fileTempname,$cert_fileDestination2) ){
                    echo "File name: ".$cert_fileTempname." File Path: ".$cert_fileDestination2."<br>";   
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
    //$mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
    $mail->SMTPDebug = true;
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

    //
    //Add attachments
    $mail->addAttachment($fileDestination, $fileNameNew); 
    $mail->addAttachment($cert_fileDestination2, $cert_fileNameNew2);
    $mail->addAttachment($_SESSION["gov_id1_fileDestination"], $_SESSION["gov_id1_fileNameNew"]);
    $mail->addAttachment($_SESSION["gov_id2_fileDestination"], $_SESSION["gov_id2_fileNameNew"]);
    

    
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Business Loan Application';
    $mail->Body    = $message;
    $mail->AltBody = $message;

    $mail->send();
    echo json_encode('Message has been sent');
    } catch (Exception $e) {
        echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
  
}
?>