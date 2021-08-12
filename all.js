const app = Vue.createApp({
    data() {
        return {
            homePage:true,
            designPage:false
        }
    },
    methods: {
        showHomePage(){
            this.designPage = false;
            this.homePage = true;
        },
        showDesignPage(){
            this.homePage = false;
            this.designPage = true
        }
    },
})
app.mount('#app');