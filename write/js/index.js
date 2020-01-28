
var nav =new Vue ({
    el:'#nav',
    data: {
        isOpenHome:false,
        isOpenPage:false,
    },
    methods: {
        mouseoverHome: function () {
            this.isOpenHome = true;
        },
        mouseleaveHome: function () {
            this.isOpenHome = false;
        },
        
        mouseoverPage: function () {
            this.isOpenPage = true;
        },
        mouseleavePage: function () {
            this.isOpenPage = false;
        }
    }
});