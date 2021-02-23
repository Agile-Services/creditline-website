<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="main-content">
        <input type="hidden" id="custId" name="page_Id" value="pawn_form">
        <!--This hidden field will be used to idenitfy which form is to be loaded from the server-->

        <p> A pawn loan is another name for a collateral loan. 
            This is when money is lent in exchange for items of value, with the loan amount based on that item’s value. 
            The item is returned when the loan is paid off or can be surrendered as payment in full.
        </p>

        </ol>

        <button class="btn btn-primary">Apply</button>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>