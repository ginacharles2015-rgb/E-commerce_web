import image1 from "./assets/image1.png"
 
 const Products = [
    {
        id: 1,
        name: "Product 1",
        price: 10,
        rating:function getRating(rating) {
        
        rating = 2
        
        if (rating == 4) {
            return "⭐⭐⭐⭐"
        } else if (rating == 3) {
            return "⭐⭐⭐"
        } else if (rating == 2) {
            return "⭐⭐"
        } else if (rating == 1) {
            return "⭐"
        } else {
            return "No rating"
        }
    },
        image:`${image1}`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
         rating:function getRating(rating) {
        
        rating = "1"
        
        if (rating == 4) {
            return "⭐⭐⭐⭐"
        } else if (rating == 3) {
            return "⭐⭐⭐"
        } else if (rating == 2) {
            return "⭐⭐"
        } else if (rating == 1) {
            return "⭐"
        } else {
            return "No rating"
        }
    },
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        name: "Product 3",
        price: 30,
         rating:function getRating(rating) {
        
        rating = 4;
        
        if (rating == 4) {
            return "⭐⭐⭐⭐"
        } else if (rating == 3) {
            return "⭐⭐⭐"
        } else if (rating == 2) {
            return "⭐⭐"
        } else if (rating == 1) {
            return "⭐"
        } else {
            return "No rating"
        }
    },
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        name: "Product 4",
        price: 40,
        rating:function getRating(rating) {
        
        rating = 3;
        
        if (rating == 4) {
            return "⭐⭐⭐⭐"
        } else if (rating == 3) {
            return "⭐⭐⭐"
        } else if (rating == 2) {
            return "⭐⭐"
        } else if (rating == 1) {
            return "⭐"
        } else {
            return "No rating"
        }

            
},

        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        name: "Product 5",
        price: 50,
         rating:function getRating(rating) {
        
        rating = 4
        
        if (rating == 4) {
            return "⭐⭐⭐⭐"
        } else if (rating == 3) {
            return "⭐⭐⭐"
        } else if (rating == 2) {
            return "⭐⭐"
        } else if (rating == 1) {
            return "⭐"
        } else {
            return "No rating"
        }
    },
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }

]

export {Products}