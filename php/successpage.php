<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        session_start();
        if (empty($_SESSION['token'])) {
            $_SESSION['token'] = bin2hex(random_bytes(32));
        }
    ?>    
    <div class="main-content container">
        <div class="flash container mt-5">
                <!-- Flashes go here -->
        </div>
        <h2 class="text-success">Your Application has been Submitted.</h2>
        <script type="text/javascript" src="js/collectionScript.js"></script>  
        <script type="text/javascript" src="js/script.js"></script>
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