<template>
    <div class="row">
            <div :class="[book.noOfPages<50?'less card m-4 p-2 col-6':'more card m-4 p-2 col-6']" v-for="book in books"
              :key="book.id"
              style="
                width: 18rem;
                box-shadow: 3px 4px 6px lightblue, -3px -4px 6px lightblue;
              "
            >
              <img
                class="card-img-top rounded"
                :src="book.image"
                :alt="book.name"
                :title="book.name"
                style="height: 70%"
              />
              <div class="row p-2 my-1" style="background-color: lightblue">
                <div
                  class="col-12 w-75 mx-auto my-1 rounded fw-bold text-light text-center p-2 bg-primary"
                >
                  {{book.id}}
                </div>
              </div>
              <div class="row p-2 my-1" style="background-color: #e4c285">
                <div class="col-8">
                  <span class="badge bg-danger fs-5 mx-1">{{book.author}}</span>
                </div>
                <div class="col-4">
                  <span
                    class="badge bg-danger text-light fs-5"
                    v-text="book.noOfPages"
                  ></span>
                </div>
              </div>
              <div class="row my-1 p-2" style="background-color: #b9b8b4">
                <div class="col-7">
                  <span class="badge text-light bg-secondary fs-5"
                    >{{book.category}}</span
                  >
                </div>
                <div class="col-4">
                  <span class="badge text-light bg-secondary fs-5"
                    >{{formatCurrency(book.price)}}</span
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-center my-3">
                  <button
                    @click="AddToWishList(book)"
                    class="btn btn-success fs-6 fw-bold text-center"
                    :disabled="checkWishList(book)"
                  >
                    Add to Wish List
                  </button>
                </div>
              </div>
            </div>
          </div>

</template>
<script>
export default {
  props:["books","wishlist"],
  methods: {
          formatCurrency(price) {
            return Intl.NumberFormat("ar-SA", {
              style: "currency",
              currency: "SAR",
              maximumFractionDigits: 0,
            }).format(price);
          }, 
          checkWishList(book) {
            return this.wishlist.find((wishbook)=>wishbook.id==book.id)!=undefined;
          },
          async AddToWishList(book) {
            await fetch("http://localhost:3306/wishlist",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(book)
            });
            this.$emit('addToWishlist',book);

          },
          
  },
}
</script>