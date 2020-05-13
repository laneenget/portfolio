<template>
    <div>
        <nav class="links">
            <ul class="nav-links">
                <li class="link" id="home-link"><a class="active" href="#home">HOME</a></li>
                <li class="link" id="about-link"><a href="#about">ABOUT ME</a></li>
                <li class="link" id="contact-link"><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
nav {
    top: 0;
    left: 0;
    position: fixed;
    background: #193D49;
    border-bottom:5px solid #789BB2;
    height: 48px;
    text-align: left;
    width: 100%;
}

.link {
    float: left;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.link a {
    display: block;
    color: #789BB2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.link a:hover {
    background-color: #091B25;
    color: #537687;
}
</style>