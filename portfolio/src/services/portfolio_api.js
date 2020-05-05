import axios from 'axios'

export default {
    
    getAllMessages() {
        return axios.get('/api/messages').then(response => {
            return response.data
        })
    },

    getMessage(id) {
        return axios.get('/api/messages/' + id).then(response => {
            return response.data
        })
    },

    addMessage(message) {
        return axios.post('/api/messages', message).then(response => {
            return response.data
        })
    },

    deleteMessage(id) {
        return axios.delete('/api/messages/' + id).then(response => {
            return response.data
        })
    },
}