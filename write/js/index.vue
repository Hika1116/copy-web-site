
const clickaway = window.VueClickaway.mixin;

//検索フォームのコンポーネント
const searchArea = Vue.component('search-area',{
    template: `
        <div id="search-area" v-on-clickaway="away">
            <span :class="{active:displaySearchArea}">
                <i v-on:click="displaySearch" class="fas fa-search fa-lg"></i>
            </span>
            <transition name="search">
                <input ref="facusThis" type="text" placeholder="検索..." v-show="displaySearchArea">
            </transition>
        </div>
     `,
     mixins: [ clickaway ],
     data() {
         return {
             displaySearchArea:false,
         }
     },
     methods:{
         displaySearch:function(){
             this.displaySearchArea = !this.displaySearchArea;
             if(this.displaySearchArea){
                 this.$refs.facusThis.focus();
             }
         },
         away:function(){
             this.displaySearchArea = false;
         }
     }
})

//アコーディオンメニューの一つのコンポーネント
const accordionList = Vue.component('accordion-list', {
    template : `
        <span v-on:mouseover="mouseoverHome" v-on:mouseleave="mouseleaveHome">
            <a href="#"><slot name="menu-title"></slot>&#9663;</a>
            <transition name="nav-detail">
                <ul v-if="showHomeDetail">
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
        'accordion-list': accordionList,
        'search-area': searchArea,
      }
  })