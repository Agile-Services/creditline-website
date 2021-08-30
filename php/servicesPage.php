<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="services-heading text-center">
            <h1>Services</h1>
    </div>
    <div id="aboutus_services" class="main-content container">
        <!--This is where the form will load-->
        <div class="row services">
            <div class="service mt-5 col-sm mx-3">
                <img class="w-100" src="../static/images/visual-stories-micheile-SoT4-mZhyhE-unsplash.jpg" alt="Payday">
                <div class="service-body">
                    <h3>Payday Loans</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
    
            <div class="service mt-5 col-sm mx-3">
                <img class="w-100" src="../static/images/chris-liverani-dBI_My696Rk-unsplash.jpg" alt="Business">
                <div class="service-body">
                    <h3>Business Loans</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>

        <div class="row services">
            <div class="service mt-5 col-sm mx-3">
                <img class="w-100" src="../static/images/christina-wocintechchat-com-HocFQHhGjDE-unsplash.jpg" alt="Partner Plan">
                <div class="service-body">
                    <h3>Partner Plan</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
    
            <div class="service mt-5 col-sm mx-3">
                <img class="w-100" src="../static/images/ramon-salinero-Q8Y4xYdbDQA-unsplash.jpg" alt="Pawn Image">
                <div class="service-body">
                    <h3>Pawn</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <?php
    } elseif($_SERVER["REQUEST_METHOD"] == "POST"){
        // do something
    }
?>