<template>
    <div class="home-flex">
        <h1 class="home-header" id="name">Lane Enget</h1>
        <h2 class="home-header" id="description">I am a software developer
                focused on crafting user-friendly experiences.
        </h2>
        <a class="button check-work" href="#about">Check my work</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.home-flex {
    background-image: url("../assets/fog.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh);
}

#name{
    font-size: 70px;
    text-transform: uppercase;
    color: #e6e6fa;
}

#description{
    color: #e6e6fa;
    margin-top: -10px;
}

.button {
    border: 2px solid transparent;
    border-radius: 4px;
    border-color: #e6e6fa;
    color: #e6e6fa;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 20px;
    margin: 3.75em auto 0 auto;
}

.button:hover{
    background-color: #091B25;
    color: #F5EEF8;
}
</style>