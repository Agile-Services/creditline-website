<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    if(isset($_POST['submit']))
    
    $fname = filter_var($_POST['fname'],FILTER_SANITIZE_STRING);
    $name = filter_var($_POST['fname'],FILTER_SANITIZE_STRING);
    $mname = filter_var($_POST['mname'],FILTER_SANITIZE_STRING);
    $lname = filter_var($_POST['lname'],FILTER_SANITIZE_STRING);
    $mobile = filter_var($_POST['mobile'],FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
    $address1 = filter_var($_POST['address1'],FILTER_SANITIZE_STRING);
    $address2 = filter_var($_POST['address2'],FILTER_SANITIZE_STRING);
    $employer_name = filter_var($_POST['employer_name'],FILTER_SANITIZE_STRING);
    $job_title = filter_var($_POST['job_title'],FILTER_SANITIZE_STRING);
    $start_date = filter_var($_POST['start_date'],FILTER_SANITIZE_STRING);
    $work_address1 = filter_var($_POST['work_address_line_1'],FILTER_SANITIZE_STRING);
    $work_address2 = filter_var($_POST['work_address_line_2'],FILTER_SANITIZE_STRING);
    $work_city = filter_var($_POST['work_city'],FILTER_SANITIZE_STRING);
    $work_business_number = filter_var($_POST['work_number'],FILTER_SANITIZE_STRING);
    $draw_Date = filter_var($_POST['draw_date'],FILTER_SANITIZE_STRING);
    $plan_amt = filter_var($_POST['plan_amt'],FILTER_SANITIZE_STRING);
    $trn = filter_var($_POST['trn'],FILTER_SANITIZE_STRING);
    $payment_method = filter_var($_POST['payment_method'],FILTER_SANITIZE_STRING);
    $area = filter_var($_POST['area'],FILTER_SANITIZE_STRING);
    $post = filter_var($_POST['post'],FILTER_SANITIZE_STRING);
    $country = filter_var($_POST['country'],FILTER_SANITIZE_STRING);
    $work_area = filter_var($_POST['work_area'],FILTER_SANITIZE_STRING);
    $work_post = filter_var($_POST['work_post'],FILTER_SANITIZE_STRING);
    $work_country = filter_var($_POST['work_country'],FILTER_SANITIZE_STRING);
    $acc_number = filter_var($_POST['acc_number'],FILTER_SANITIZE_STRING);
    $bank = filter_var($_POST['bank'],FILTER_SANITIZE_STRING);
    $emp_status = filter_var($_POST['emp_status'],FILTER_SANITIZE_STRING);
    
    $id = $_FILES['id'];
    $filename = $_FILES['id']['name'];
    $fileTempname = $_FILES['id']['tmp_name'];
    $fileSize = $_FILES['id']['size'];
    $fileError = $_FILES['id']['error'];
    $fileType = $_FILES['id']['type'];

    $fileExt = explode(".",$filename);
    $fileActualExt = strtolower(end($fileExt));
    // echo $fileActualExt;

    $allowed = array('jpg','jpeg','pdf','docx','png');

    if(in_array($fileActualExt,$allowed)){
       if($fileError === 0){
            if($fileSize < 5000000){
                $fileNameNew = uniqid('',true).".".$fileActualExt;
                $fileDestination = 'uploads/'.$fileNameNew;

                if(move_uploaded_file($fileTempname,$fileDestination)){
                    // echo "Upload Successful";
                    $message = "First Name: ".$name."<br>Middle Name: ".$mname."<br>Last Name: ".$lname."<br>TRN: ".$trn."<br>Mobile Number: ".$mobile.
                    "<br>Email Address: ".$email."<br>Address: ".$address1." ".$address2." ".$city."<br>Job Title: ".$job_title."<br>Started: ".$start_date."<br>Employed at: ".$employer_name."<br>Work Address: ".$work_address1." ".$work_address2." ".$work_city."<br>Work Number: ".$work_business_number."<br>Plan Amount: ".$plan_amt."<br>Payment Method: ".$payment_method."<br>Bank: ".$bank."<br>Requested Draw Date: ".$draw_Date;

                    //Instantiation and passing `true` enables exceptions
                    $mail = new PHPMailer(true);

                    try {
                        //Server settings
                        //$mail->SMTPDebug = true;
                        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
                        $mail->isSMTP();                                            //Send using SMTP
                        $mail->Host      = 'smtp.gmail.com';                     //Set the SMTP server to send through
                        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                        $mail->Username   = 'ksterling542@gmail.com';                     //SMTP username
                        $mail->Password   = '';                               //SMTP password
                        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                        $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                        //Recipients
                        $mail->setFrom('info@example.com', 'Mailer');
                        $mail->addAddress('ksterling542@gmail.com', 'Joe User');     //Add a recipient

                        //
                        //Add attachments
                        $mail->addAttachment($fileDestination, $fileNameNew);    //Optional name

                        
                        //Content
                        $mail->isHTML(true);                                  //Set email format to HTML
                        $mail->Subject = 'Partner Plan Application';
                        $mail->Body    = $message;
                        $mail->AltBody = $message;

                        $mail->send();
                        echo json_encode('Message has been sent');
                        } catch (Exception $e) {
                            echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
                        }
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
}
?>

