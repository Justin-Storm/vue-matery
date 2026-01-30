app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container"> 
        <div class="product-image">
            <img v-bind:src="image" />
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div 
                v-for="(varient, index) in varients" 
                :key="varient.id" 
                @mouseover="updateVarient(index)"
                class="color-circle"
                :style="{ backgroundColor: varient.color }"
            ></div>
            <button 
                class="button"
                :class="{ disabledButton: !inStock }"
                :disabled="!inStock"
                v-on:click="addToCart"
            >Add to Cart</button>
        </div>
        
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
        return {
            product: 'Sock',
            brand: 'Vue Learning',
            selectedVarient: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            varients: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.varients[this.selectedVarient].id);
        },
        updateVarient(index) {
            this.selectedVarient = index;
            console.log(index);
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.varients[this.selectedVarient].image;
        },
        inStock() {
            return this.varients[this.selectedVarient].quantity;
        },
        shipping() {
          if (this.premium) {
            return 'Free'
          }
          return 2.99;
        }
    } 
})