import axios from 'axios'

export default {

    addMessage(message) {
        return axios.post('/api/messages', message).then(response => {
            return response.data
        })
    },
}