<?php 
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $fname = filter_var($_POST['fname'],FILTER_SANITIZE_STRING);
    $description = filter_var($_POST['description'],FILTER_SANITIZE_STRING);
    $mname = filter_var($_POST['mname'],FILTER_SANITIZE_STRING);
    $lname = filter_var($_POST['lname'],FILTER_SANITIZE_STRING);
    $mobile = filter_var($_POST['mobile'],FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
    $address1 = filter_var($_POST['address1'],FILTER_SANITIZE_STRING);
    $address2 = filter_var($_POST['address2'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    $sig = filter_var($_POST['sig'],FILTER_SANITIZE_STRING);
    $make = filter_var($_POST['make'],FILTER_SANITIZE_STRING);
    $model = filter_var($_POST['model'],FILTER_SANITIZE_STRING);
    $serial_num = filter_var($_POST['serial_num'],FILTER_SANITIZE_STRING);

    //id file
    $id = $_FILES['id'];
    $filename = $_FILES['id']['name'];
    $fileTempname = $_FILES['id']['tmp_name'];
    $fileSize = $_FILES['id']['size'];
    $fileError = $_FILES['id']['error'];
    $fileType = $_FILES['id']['type'];
    $fileExt = explode(".",$filename);
    $fileActualExt = strtolower(end($fileExt));


    //invoice file
    $invoice = $_FILES['invoice'];
    $invoice_filename = $_FILES['invoice']['name'];
    $invoice_fileTempname = $_FILES['invoice']['tmp_name'];
    $invoice_fileSize = $_FILES['invoice']['size'];
    $invoice_fileError = $_FILES['invoice']['error'];
    $invoice_fileType = $_FILES['invoice']['type'];
    $invoice_fileExt = explode(".",$invoice_filename);
    $invoice_fileActualExt = strtolower(end($invoice_fileExt));
  

    //product image file
    $product_img = $_FILES['product_img'];
    $filename2 = $_FILES['product_img']['name'];
    $fileTempname2 = $_FILES['product_img']['tmp_name'];
    $fileSize2 = $_FILES['product_img']['size'];
    $fileError2 = $_FILES['product_img']['error'];
    $fileType2 = $_FILES['product_img']['type'];
    $fileExt2 = explode(".",$filename2);
    $fileActualExt2 = strtolower(end($fileExt2));
 

    $allowed = array('jpg','jpeg','pdf','docx','png');

    //id
    if(in_array($fileActualExt,$allowed)){
       if($fileError === 0){
            if($fileSize < 5000000){
                $fileNameNew = uniqid('',true).".".$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;
                if(move_uploaded_file($fileTempname,$fileDestination) ){
                    // echo "Upload 1 Successful";    
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

    //product image
    if(in_array($fileActualExt2,$allowed)){
        if($fileError2 === 0){
             if($fileError2 < 5000000){
                 $fileNameNew2 = uniqid('',true).".".$fileActualExt2;
                 $fileDestination2 = 'uploads/'.$fileNameNew2;
                 if(move_uploaded_file($fileTempname2,$fileDestination2)){
                    //  echo "Upload 2 Successful";    
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
    

     //invoice
     if(in_array($invoice_fileActualExt,$allowed)){
        if($invoice_fileError === 0){
             if($invoice_fileSize < 5000000){
                 $invoice_fileNameNew2 = uniqid('',true).".".$invoice_fileActualExt;
                 $invoice_fileDestination2 = 'uploads/'.$invoice_fileNameNew2;
                 if(move_uploaded_file($invoice_fileTempname,$invoice_fileDestination2) ){
                    //  echo "Upload 3 Successful";    
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

$message = "First Name: ".$fname."<br>Middle Name: ".$mname."<br>Last Name: ".$lname."<br>TRN: ".$trn."<br>Mobile Number: ".$mobile.
"<br>Email Address: ".$email."<br>Address: ".$address1." ".$address2." ".$city."<br>Make: ".$make."<br>Model: ".$model."<br>Serial Number: ".$serial_num."<br>Description: ".$description;

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;   
    $mail->SMTPDebug =                    //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'nathanielbedassie@gmail.com';                     //SMTP username
    $mail->Password   = 'tfzraodkcgbdinxd';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('info@example.com', 'Mailer');
    $mail->addAddress('nathanielbedassie@gmail.com', 'Joe User');     //Add a recipient

    //
    //Add attachments
    $mail->addAttachment($fileDestination, $fileNameNew);    //Optional name
    $mail->addAttachment($fileDestination2, $fileNameNew2);
    $mail->addAttachment($invoice_fileDestination2, $invoice_fileNameNew2);

    
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Pawn Application';
    $mail->Body    = $message;
    $mail->AltBody = $message;

    $mail->send();
    echo json_encode('Message has been sent');
    } catch (Exception $e) {
        echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
    }
?>