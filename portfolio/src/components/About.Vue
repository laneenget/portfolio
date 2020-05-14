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
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3 </div>
                <img src="../assets/placeholder.png" style="width:25%">
                <div class="text">Caption Text</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3 </div>
                <img src="../assets/placeholder.png" style="width:25%">
                <div class="text">Caption Text</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">3 / 3 </div>
                <img src="../assets/placeholder.png" style="width:25%">
                <div class="text">Caption Text</div>
            </div>
        </div>
            <div class="arrow-container">
                <a class="prev" v-on:click="showslides">&#10094;</a>
                <a class="next" v-on:click="showslides">&#10095;</a>
            </div>
            <br>

            <div style="text-align:center">
                <span class="dot" v-on:click="currentSlide"></span>
                <span class="dot" v-on:click="currentSlide"></span>
                <span class="dot" v-on:click="currentSlide"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return{
            slideIndex: 1,
            i: 0,
            slides: document.getElementsByClassName('mySlides'),
        }
    },
    methods: {
        showSlides(){
            for(this.i = 0; this.i < slides.length; this.i++){
                slides[this.i].style.display = "none";
            }
            this.slideIndex++;
            if(this.slideIndex > this.slides.length){
                this.slideIndex = 1
            }
            this.slides[this.slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000);
        }
    }
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
    margin: 35px;
    border: 1px solid;
}

.skill{
    margin: 5px 0px 5px 0px;
}

#examples{
    font-size: 30px;
}

.slideshow-container{
    max-width: 1000px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.arrow-container{
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.mySlides{
    display: inline;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: 22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6 ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover{
    background-color: rgba(0,0,0,0.8);
}

.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

.numbertext{
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

.dot{
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover{
    background-color: #717171;
}

.fade{
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
</style>