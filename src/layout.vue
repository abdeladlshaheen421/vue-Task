<template>
    <div class="container">
        <div class="row bg-dark">
            <div class="col-12">
                <navcomponent/>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <component :books="books" @changePage="changePage" @deleteFromWishlist="deleteFromWishlist" changePage="changePage"  @addToWishlist="addToWishlist" :wishlist="wishlist" :is="targetPage" ></component>
            </div>
        </div>
    </div>
</template>
<script>
import navcomponent from './components/navcomponent.vue'
import bookscomponent from './components/bookscomponent.vue'
import wishlistcomponent from './components/wishlistcomponent.vue'
export  default {
    data() {
        return {
            targetPage:'bookscomponent',
            books:[],
            wishlist:[],
        }
    },
    components:{
        navcomponent,
        bookscomponent,
        wishlistcomponent,
    },
    methods:{
          
          addToWishlist(book){
              this.wishlist.push(book);
          },
          deleteFromWishlist(book){
            let removedBookIndex = this.wishlist.findIndex((wishBook) => {
                wishBook.id == book.id;
            });
            console.log(removedBookIndex)
            this.wishlist.splice(removedBookIndex, 1);
          },
          changePage(data){
              console.log(data+2);
          }
    },
    async created(){
        const booksData= await fetch("http://localhost:3306/books");
        this.books=await booksData.json();
        const wishlistData= await fetch("http://localhost:3306/wishlist");
        this.wishlist=await wishlistData.json();
    }, 
}
</script>
