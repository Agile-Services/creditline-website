<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <!--This is where the form will load-->
    <div class="main-content">
        <input type="hidden" id="custId" name="page_Id" value="personalLoans_form">
        <!--This hidden field will be used to idenitfy which form is to be loaded from the server-->

        <p> Our Personal loan takes the form of a Payday loans, which is available to both private and public sector employees, with flexible payment plans and low interest rate.
            Our payday loan is disbursed within 48 hours after complete document submission and approval. The loan is repaid through salary deduction or a bank standing order.
            Requirements for Payday Loan:
        </p>

        <ul>
            <li>Be a Jamaican resident, residing in Kingston, St. Andrew or St. Catherine </li>
            <li>Be 18 years or older</li>
            <li>Hold a current and valid ID</li>
            <li>Be a T.R.N. holder</li>
            <li>Proof of Address</li>
            <li>Job Letter</li>
            <li>3 last Pay slips/ Bank statement</li>
        </ul>

        <button id="personalLoansApply" class="btn btn-primary">Apply</button>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>