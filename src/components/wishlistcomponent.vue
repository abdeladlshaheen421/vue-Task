<template>
    <div>
        <h2 class="text-center" v-if="wishlistLength==0">
            <span class="badge text-danger h2 bg-light fs-3">
              No Books in Wish List</span
            >
          </h2>
          <table
            v-if="wishlistLength>0"
            class="table table-striped table-hover text-center"
          >
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author</th>
                <th>category</th>
                <th>summary</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="book in wishlist" :key="book.id">
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.category}}</td>
                <td>{{book.summary}}</td>
                <td>{{formatCurrency(book.price)}}</td>
                <td>
                  <button
                    class="btn btn-danger"
                    @click="removeFromWishList(book)"
                  >
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td colspan="4">
                  <table
                    class="table table-striped table-hover bg-dark text-light"
                  >
                    <thead>
                      <tr>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-white bg-secondary">
                          {{displayTotalPrice()}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      wishlistLength:0,
    }
  },
  props:["wishlist"]
  ,methods:{
    displayTotalPrice() {
            let totalPrice = 0;
            this.wishlist.forEach((book) => (totalPrice += book.price));
            return this.formatCurrency(totalPrice);
          },
    formatCurrency(price) {
      return Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
        maximumFractionDigits: 0,
      }).format(price);
    },
    async removeFromWishList(book) {
          await fetch(`http://localhost:3306/wishlist/${book.id}`,{
            method:"DELETE"
          });
          this.wishlistLength--;
          this.$emit('deleteFromWishlist',book);
          },
  }
  ,
  async created(){
    const wishlistData= await fetch("http://localhost:3306/wishlist");
    let wishlist=await wishlistData.json();
    wishlist.forEach(element => {
      this.wishlistLength++;
    });
  }
}
</script>