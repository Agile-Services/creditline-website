<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        session_start();
        if (empty($_SESSION['token'])) {
            $_SESSION['token'] = bin2hex(random_bytes(32));
        }
    ?>
    <div class="application-heading text-center">
        <h1>Application</h1>
    </div>
    <div id="application-panel">
        <div id="top"></div>
        <div id="bottom"></div>
        <div id="nums" class="container-fluid">
            <div><p>&nbsp 1 &nbsp</p><em>Loan-Purpose</em></div>
            <div><p>&nbsp 2 &nbsp</p><em>General Infomation</em></div>
            <div><p>&nbsp 3 &nbsp</p><em>Contact Details</em></div>
            <div><p>&nbsp 4 &nbsp</p><em>Employment Details</em></div>
        </div>
    </div>
    <div class="main-content container">
        <!-- Form will load here --> 
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        if (!empty($_POST['token'])) {
            if (hash_equals($_SESSION['token'], $_POST['token'])) {
                // Proceed to process the form data
            } else {
                // Log this as a warning and keep an eye on these attempts
                unset($_SESSION["token"]);
                die("CSRF token validation failed");
            }
        }
    }
?>