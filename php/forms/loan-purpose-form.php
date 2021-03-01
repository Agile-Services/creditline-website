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
    <div class="main-content container">
        <form>
            <label for="loan_type">Type of Loan</label>
            <input type="hidden" name="token" value="<?= $_SESSION['token'] ?>" />
                <input list="Title">
                <datalist id="loan_type">
                    <option value="Payday Loan"></option>
                    <option value="Business Loan"></option>
            </datalist><br><br>
    
            <label for="loan_amt">Loan Amount</label>
            <input type="text" for="loan_amt" id="loan_amt" value=""><br><br>
    
            <button class="btn btn-primary" id="loanPurposeSubmit" type="button">Next</button>
        </form>
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