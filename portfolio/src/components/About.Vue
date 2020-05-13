<template>
    <div class="about-flex">
        <h1 id="about-title">
            ABOUT ME
        </h1>
        <p class="about-content" id="about-content">I am a proactive IT student with strong technical and interpersonal skills. 
            My background includes extensive experience in the food service industry. 
            I am a dependable team player who stays calm under pressure, is able to work independently, and builds a climate of trust with colleagues. 
            I am semi-fluent in French.</p>
        <div class="about-content">
            <h2 class="about-flex" id="skills">SKILLS</h2>
            <ul class="about-content" id="skills-list">
                <li class="skill">Python</li>
                <li class="skill">Django</li>
                <li class="skill">CSS</li>
                <li class="skill">HTML</li>
                <li class="skill">JavaScript</li>
                <li class="skill">Vue</li>
                <li class="skill">C#</li>
                <li class="skill">Java</li>
                <li class="skill">Windows</li>
            </ul>
        </div>
        <h2 class="about-flex" id="examples">EXAMPLES</h2>
        <!--Slideshow container-->
        <div class="example-carousel">
            <div class="carousel-cell"><img src=""></div> 
            <div class="carousel-cell"><img src=""></div>
            <div class="carousel-cell"><img src=""></div>
            <div class="carousel-cell"><img src=""></div>
            <div class="carousel-cell"><img src=""></div>
            <div class="carousel-cell"><img src=""></div>
            -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.about-flex{
    align-items: center;
    color: #e6e6fa;
    display: flex;
    flex-direction: column;
}

#about-title{
    font-size: 36px;
    margin-top: 65px;
}

.about-content{
    font-size: 20px;
    color: #e6e6fa;
    margin: 0px 75px 0px 75px;
}

#skills{
    font-size: 30px;
}

#skills-list{
    list-style-type: circle;
    columns: 3;
    font-size: 24px;
    margin: 0;
    border: 1px solid;
}

.skill{
    margin: 5px 0px 5px 0px;
}

#examples{
    font-size: 30px;
}

.example-carousel{
    max-width: 500px;
    margin: auto;
}
</style>