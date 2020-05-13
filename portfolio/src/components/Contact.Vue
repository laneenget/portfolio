<template>
    <div class="about-flex">
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>
        <form>
            <h1 id="contact-title">CONTACT</h1>

            <div class="form-group">
                <br><label for="user-name"> Name </label><input id="user-name" name="user-name" class="input-box" type="text">
                <input id="name" class="form-control" v-model.trim="name">
            </div>
            <div class="form-group">
                <br><label for="email"> Email </label><input id="email" name="email" class="input-box" type="email">
                <input id="email" class="form-control" v-model.trim="email">
            </div>
            <div class="form-group">    
                <br><label for="note">Message</label>
                <br><textarea id="note" class="form-control" v-model.trim="message"></textarea>
            </div>

            <a class="button" id="submit" v-on:click="addMessage">Submit</a>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            note: '',
            errors: []
        }
    },
    methods: {
        addMessage() {
            if (this.name && this.email && this.note) {
                let message = { name: this.name, email: this.email, note: this.note}
            } else {
                this.errors.push('Name, email, and message are required.')
            }
        }
    }
}
</script>

<style>
#contact-title{
    font-size: 36px;
    margin-top: 65px;
}

.inputs {
    height: 100%;
    width: 50%;
    padding: 5px;
    margin: auto;
    box-sizing: border-box;
}

input {
    margin: 10px 0px 25px 0px;
    width: 100%;
}

label {
    color: #e6e6fa;
    font-size: 20px;
    margin: auto;
}

#message {
    margin-top: 10px;
    height: 200px;
    width: 100%;
}

#submit{
    width: 25%;
    text-align: center;
    margin-bottom: 100px;
}
</style>