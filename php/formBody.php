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
        <div id="nums">
            <p>&nbsp 1 &nbsp</p>
            <p>&nbsp 2 &nbsp</p>
            <p>&nbsp 3 &nbsp</p>
            <p>&nbsp 4 &nbsp</p>
        </div>
        <div id="desc">
            <p>Loan-Purpose</p>
            <p>General Information</p>
            <p>Contact Details</p>
            <p>Employment Details</p>
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