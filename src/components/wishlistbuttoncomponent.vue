<template>
    <div class="col-3">
            <p class="text-center w-50 mx-auto p-2">
            <a
                href="#"
                class="btn btn-primary fw-bold"
                @click.prevent="changePage"
                >wish List</a
            >
            </p>
    </div>
</template>
<script>
export default {
    props:["targetPage"],
    methods:{
        changePage(){
            page='wishlistcomponent'
            this.$emit('changePage','wishlistcomponent');
        }
    }
}
</script>