<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
    ?>
    <div class="welcome-container text-center">
        <div class="welcome-message">
            <h1>Welcome message</h1>
            <p>Company Slogan</p>
        </div>

        <div class="slider">

        </div>

        <div class="tags">
            <div class="tag">
                <p>tag1</p>
            </div>
            <div class="tag">
                <p>tag2</p>
            </div>
            <div class="tag">
                <p>tag2</p>
            </div>
            <defs>
            <radialGradient id="svg_4" spreadMethod="pad">
            <stop offset="0" stop-color="#000000"/>
            <stop offset="1" stop-color="#ffffff"/>
            </radialGradient>
            </defs>
            <g class="layer">
            <title>Layer 1</title>
            <ellipse cx="252.999998" cy="53.000001" fill="url(#svg_4)" id="svg_1" rx="216.999995" ry="15" stroke="#000000" stroke-opacity="0" stroke-width="5"/>
            </g>
            </svg><svg width="500" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <!-- Created with SVG-edit - https://github.com/SVG-Edit/svgedit-->
            <defs>
            <radialGradient id="svg_4" spreadMethod="pad">
            <stop offset="0" stop-color="#000000"/>
            <stop offset="1" stop-color="#ffffff"/>
            </radialGradient>
            </defs>
            <g class="layer">
            <title>Layer 1</title>
            <ellipse cx="252.999998" cy="53.000001" fill="url(#svg_4)" id="svg_1" rx="216.999995" ry="15" stroke="#000000" stroke-opacity="0" stroke-width="5"/>
            </g>
            </svg>
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