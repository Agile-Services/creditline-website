<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="container">
        <div class="welcome-message">
            <img src="static/images/logo-1.png" alt="background">
            <h1>Welcome message</h1>
            <p>Company Slogan</p>
        </div>

        <div class="slider">

        </div>

        <div class="tags">
            <p>tag1</p>
            <p>tag2</p>
            <p>tag2</p>
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