const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Sock',
            brand: 'Vue Learning',
            selectedVarient: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            varients: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVarient(index) {
            this.selectedVarient = index;
            console.log(index);
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
        }
    } 
})