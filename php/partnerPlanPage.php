<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="partner-plan-heading text-center">
        <h1>Partner Plan</h1>
    </div>
    <div class="main-content container">
        <input type="hidden" id="custId" name="page_Id" value="partner_form">
        <!--This hidden field will be used to idenitfy which form is to be loaded from the server-->

        <p> Our Partner Plan is a fixed term savings product which allows members to throw a minimum of Two Thousand Dollars ($2,000). Choose to save Weekly, Fortnightly or Monthly. 
            Partner Plan Membership qualifies you to certain benefits such as:
        </p>

        <ol>
            <li>Assistance with opening a bank account </li>
            <li>Exemption from loan document processing</li>
            <li>Free business consultation</li>
            <li>First preference with Partner Plan draw dates</li>
            <li>Membership discount on graphics courtesy of Sophisticated Dreamz Design Studio</li>
        </ol>

        <div class="text-center mt-5">
            <button id="partnerPlanApply" class="btn btn-primary btn-lg">Apply</button>
        </div>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>