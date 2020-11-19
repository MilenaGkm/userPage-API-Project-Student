//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            quote: ''
        }
    }
    
    loadData() {
        this.getMainUser()
        this.getQuote()
    } 

    getMainUser() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?format=JSON',
            success: response => {
                this.data.mainUser.fn = response.results[0].name.first
                this.data.mainUser.ls = response.results[0].name.last
                this.data.mainUser.ct = response.results[0].location.city
                this.data.mainUser.state = response.results[0].location.state
                this.data.mainUser.img = response.results[0].picture.large
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest?format=text',
            success: response => {
                this.data.quote= response
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }



} 