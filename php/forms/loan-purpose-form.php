<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <form>
        <label for="loan_type">Type of Loan</label>
            <input list="Title">
            <datalist id="Title">
                <option value="Payday Loan"></option>
                <option value="Business Loan"></option>
        </datalist><br><br>

        <label for="loan_amt">Loan Amount</label>
        <input type="text" for="loan_amt" id="loan_amt" value=""><br><br>

        <button id="btn">Submit</button>
    </form>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>