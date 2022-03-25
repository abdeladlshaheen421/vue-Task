<template>
    <div class="col-3">
            <p class="p-2">
                <!-- <router-link :to="'/books'"> -->
                    <a
                    class="navbar-brand fw-bold fs-3"
                    href="#"
                    @click.prevent="changePage"
                    >Books</a>
                <!-- </router-link> -->
            </p>
    </div>
</template>
<script>
export default {
    methods:{
        changePage(){
            this$this.$emit('changePage','bookscomponent');
        }
    }
}
</script>