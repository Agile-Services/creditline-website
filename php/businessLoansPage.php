<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <!--This is where the form will load-->
    <div class="business-loans-heading text-center">
        <h1>Business Loan</h1>
    </div>
    <div class="main-content container">

        <input type="hidden" id="custId" name="page_Id" value="businessLoans_form">
        <!--This hidden field will be used to idenitfy which form is to be loaded from the server-->


        <p> Our business loans are open to our entrepreneurs. If you are looking to expand your business, this is the right loan for you. This loan type can be used to buy Assets, make improvements or even just for day to day expenses.
            ​Requirements for Business Loan:
        </p>

        <ul>
            <li>Be a Jamaican resident, residing in Kingston, St. Andrew or St. Catherine </li>
            <li>Be 18 years or older</li>
            <li>Hold a current and valid ID</li>
            <li>Be a T.R.N. holder</li>
            <li>Company's Registration Certificate</li>
            <li>Company's Tax Registration Number</li>
            <li>Previous Year's Income Statement</li>
        </ul>

        <div class="text-center mt-5">
            <button id="LoansApply" class="btn btn-primary btn-lg">Apply</button>
        </div>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>