<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="main-content text-center">
        <div class="welcome-message">
            <h1>Hello Financial Well-Being</h1>
            <p>Here when you need us most, super-convenient hassle-free loan</p>
        </div>

        <div id="carousel" class="carousel slide mt-5 pt-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="../static/images/dominik-scythe-lUGWwDAWpEk-unsplash.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="../static/images/backsplash.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="../static/images/logo_new.svg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="container-fluid tags">
            <div class="row">
                <div class="col-sm tag">
                    <h3>Easily apply in minutes</h3>
                </div>
                <div class="col-sm tag">
                    <h3>Clear and transparent process</h3>
                </div>
                <div class="col-sm tag">
                    <h3>Support from <u>real</u> people</h3>
                    <!-- <img src="../static/images/grass.svg" alt="grass"> -->
                </div>
            </div>
        </div>

        <div class="ad1 row">
            <section class="col">
                <p class="text-center font-weight-bold">We provide fast, affordable financing that meets your needs:</p>
                <ul class="text-center font-weight-bold">
                    <li>No hidden fees</li>
                    <li>No prepayment penalties</li>
                    <li>No origination fees</li>
                </ul>
            </section>
            <div class="col"><img class="" src="../static/images/kevin-sanon-Qo-ddP65zmM-unsplash.jpg" alt="photo of kevin"></div>
        </div>

        <div class="tags">
            <p>tag2</p>
            <img src="#" alt="#">
        </div>

        <div class="ad2">
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