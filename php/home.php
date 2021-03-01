<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="main-content text-center">
        <div class="welcome-message">
            <h1>Welcome message</h1>
            <p>Company Slogan</p>
        </div>

        <div class="slider">

        </div>

        <div class="container-fluid tags">
            <div class="row">
                <div class="col-sm tag">
                    <p>tag1</p>
                </div>
                <div class="col-sm tag">
                    <p>tag2</p>
                </div>
                <div class="col-sm tag">
                    <p>tag2</p>
                </div>
            </div>
        </div>

        <div class="ad">
            <p>tag2</p>
            <img src="#" alt="#">
        </div>

        <div class="ad">
            <p>tag2</p>
            <img src="#" alt="#">
        </div>

        <div class="reference">
            <p>tag2</p>
            <img src="#" alt="#">
        </div>

        <div class="testimonials">
            <h2>Testimonailas</h2>
            <p>tag1</p>
            <p>tag2</p>
            <p>tag2</p>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>