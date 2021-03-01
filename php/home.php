<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="main-content text-center">
        <div class="welcome-message">
            <h1>Welcome message</h1>
            <p>Company Slogan</p>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="" alt="Second slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
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

        
        <div class="container-fluid" style="margin-top:10rem; margin-bottom:10rem;">
            <button id="applyNow" class="btn btn-outline-success btn-lg" type="button">Apply Now</button>
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