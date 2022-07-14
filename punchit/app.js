new Vue({
    el: "#vue-app",
    data(){
        return{
        health: 100,
        ended : false,
        burst: "working"
        }
    },
    mounted:function(){
        console.log(this)
    },
    methods:{
        punch: function(){
            this.health-=10;
            if(this.health<=0)
                this.ended=true;
        },
        restart: function(){
            this.health=100
        }

    },
    computed:{

    }
});