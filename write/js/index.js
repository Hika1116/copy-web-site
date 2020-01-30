
var nav = new Vue ({
    el:'#nav',
    data:{
        showHomeDetail:false,
        showPageDetail:false,
        displaySearchArea:false,
    },
    methods: {
        mouseoverHome: function () {
            this.showHomeDetail = true;
        },
        mouseleaveHome: function () {
            this.showHomeDetail = false;
        },
        mouseoverPage: function () {
            this.showPageDetail = true;
            },
        mouseleavePage: function () {
            this.showPageDetail = false;
        },
        displaySearch: function () {
            this.displaySearchArea = !this.displaySearchArea;
        }
    },
});