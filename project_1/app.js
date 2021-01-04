const { createApp } = Vue;

const app = createApp({
	data() {
		return {
            url: "https://www.google.com.vn/",
			showBooks: true,
			title: "The Final Empire",
			author: "Cong",
			age: 18,
			x: 0,
			y: 0,
			books: [
				{
					title: "Name of the wind",
                    author: "Cong",
                    isFav: false
				},
				{
					title: "The way of kings",
                    author: "Cong",
                    isFav: true
				},
				{
					title: "The final empire",
                    author: "Cong",
                    isFav: false
				},
			],
		};
	},

	methods: {
		changeTitle(title) {
			// this.title = "Change title";
			this.title = title;
		},

		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},

		handleEvent(e) {
			console.log(e);
		},

		handleMouseMove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
        },
        
        handleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav )
        }
    }
});

app.mount("#app");
