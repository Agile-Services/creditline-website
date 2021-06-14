<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST"){

        //id file
        $gov_id1 = $_FILES['id'];
        $gov_id1_filename = $_FILES['id']['name'];
        $gov_fileTempname = $_FILES['id']['tmp_name'];
        $gov_fileSize = $_FILES['id']['size'];
        $gov_fileError = $_FILES['id']['error'];
        $gov_fileType = $_FILES['id']['type'];
        $gov_fileExt = explode(".",$gov_id1_filename);
        $gov_fileActualExt = strtolower(end($gov_fileExt));

        $id2 = $_FILES['id2'];
        $gov_id2_filename = $_FILES['id2']['name'];
        $gov_id2_fileTempname = $_FILES['id2']['tmp_name'];
        $gov_id2_fileSize = $_FILES['id2']['size'];
        $gov_id2_fileError = $_FILES['id2']['error'];
        $gov_id2_fileType = $_FILES['id2']['type'];
        $gov_id2_fileExt = explode(".",$gov_id2_filename);
        $gov_id2_fileActualExt = strtolower(end($gov_id2_fileExt));
    
        $allowed = array('jpg','jpeg','pdf','docx','png');
    
        //Income Statement 
        if(in_array($gov_fileActualExt,$allowed)){
            if($gov_fileError === 0){
                 if($gov_fileSize < 5000000){
                     $gov_id1_fileNameNew = uniqid('',true).".".$gov_fileActualExt;
                     $gov_id1_fileDestination = 'uploads/'.$gov_id1_fileNameNew;
                     if(move_uploaded_file($gov_fileTempname,$gov_id1_fileDestination) ){
                         echo "Upload 1 Successful";
                         echo "File name: ".$gov_fileTempname." File Path: ".$gov_id1_fileDestination."<br>"; 
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


        if(in_array($gov_id2_fileActualExt,$allowed)){
           if($gov_id2_fileError === 0){
                if($gov_id2_fileSize < 5000000){
                    $gov_id2_fileNameNew = uniqid('',true).".".$gov_id2_fileActualExt;
                    $gov_id2_fileDestination = 'uploads/'.$gov_id2_fileNameNew;
                    if(move_uploaded_file($gov_id2_fileTempname,$gov_id2_fileDestination) ){
                        echo "Upload 2 Successful";
                        echo "File name: ".$gov_id2_fileTempname." File Path: ".$gov_id2_fileDestination."<br>";    
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
    
    $_SESSION["gov_id2_fileDestination"] = $gov_id2_fileDestination;
    $_SESSION["gov_id2_fileNameNew"] = $gov_id2_fileNameNew;

    $_SESSION["gov_id1_fileDestination"] = $gov_id1_fileDestination;
    $_SESSION["gov_id1_fileNameNew"] = $gov_id1_fileNameNew;

}


?> 