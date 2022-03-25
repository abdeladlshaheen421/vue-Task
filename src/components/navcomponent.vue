<template>
    <div class="row">
        
        <booksbutton @changePage="changePage" />
        <navbarheader/>
        <wishlistbutton @changePage="changePage" />  
    </div>
</template>
<script>
import booksbutton from './booksbuttoncomponent.vue'
import navbarheader from './navbarheadercomponent.vue'
import wishlistbutton from './wishlistbuttoncomponent.vue'
export default {
    data() {
        return {
            page:''
        }
    },
components:{
        booksbutton,
        navbarheader,
        wishlistbutton,
    }
    ,
    props:["targetPage"]
    ,
    methods:{
        changePage(data){
            console.log(data)
            this.$emit("changePage","ggdfgfdd");
        }
        
    }
}
</script>
