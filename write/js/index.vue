const clickaway = window.VueClickaway.mixin;

// var nav = new Vue ({
//     el:'#nav',
//     mixins: [ clickaway ],
//     data:{
//         showHomeDetail:false,
//         showPageDetail:false,
//         displaySearchArea:false,
//     },
//     methods: {
//         mouseoverHome: function () {
//             this.showHomeDetail = true;
//         },
//         mouseleaveHome: function () {
//             this.showHomeDetail = false;
//         },
//         mouseoverPage: function () {
//             this.showPageDetail = true;
//             },
//         mouseleavePage: function () {
//             this.showPageDetail = false;
//         },
//         displaySearch: function () {
//             this.displaySearchArea = !this.displaySearchArea;
//             if(this.displaySearchArea){
//                 this.$refs.focusThis.focus();
//             }
//         },
//         //検索フォームの外側を押下した場合のイベント
//         away: function() {
//             this.displaySearchArea = false;
//           },
//     },
// });

const accodionList = Vue.component('accodion-list',{
    template : `
        <span v-on:mouseover="mouseoverHome" v-on:mouseleave="mouseleaveHome">
            <a href="#"><slot name="menu-title"></slot>&#9663;</a>
            <transition name="nav-detail">
                <ul class="dropdown" v-if="showHomeDetail">
                    <slot name="menu-list"></slot>
                </ul>
            </transition>
        </span>
    `,
    data() {
        return {
            showHomeDetail:false,
            showPageDetail:false,
        }
    },
    methods: {
      accordionToggle: function(){
        this.isOpened = !this.isOpened;
      },
    },
    methods: {
        mouseoverHome: function () {
            this.showHomeDetail = true;
        },
        mouseleaveHome: function () {
            this.showHomeDetail = false;
        }
    },
})

var app = new Vue({
    el: '#nav',
    components: {
        'accodion-list': accodionList,
      }
  })