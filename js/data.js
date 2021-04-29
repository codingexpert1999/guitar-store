const categories = [
    {
        id: 1,
        title: "Acoustic Guitars",
        image: "images/harley-benton-brown.jpg"
    },
    {
        id: 2,
        title: "Electric Guitars",
        image: "images/fender-stratocaster-white.jpg"
    },
    {
        id: 3,
        title: "Classical Guitars",
        image: "images/startone-brown.jpg"
    },
    {
        id: 4,
        title: "Bass Guitars",
        image: "images/marcus-miller-brown.jpg"
    }
]

const brands = [
    {
        id: 1,
        title: "fender"
    },
    {
        id: 2,
        title: "jackson"
    },
    {
        id: 3,
        title: "epiphone"
    },
    {
        id: 4,
        title: "harley-benton"
    },
    {
        id: 5,
        title: "startone"
    },
    {
        id: 6,
        title: "esp"
    },
    {
        id: 7,
        title: "marcus-miller"
    }
]

const products = [
    {
        id: 1,
        name: "Epiphone AJ-45",
        image: "images/epiphone-aj45.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 235,
        category_id: 1,
        newPrice: 0,
        sold: 97,
        brand_id: 3 
    },
    {
        id: 2,
        name: "ESP LTD Black",
        image: "images/esp-ltd-black.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 175,
        category_id: 4,
        newPrice: 100,
        sold: 130,
        brand_id: 6
    },
    {
        id: 3,
        name: "Fender Squier",
        image: "images/fender-squier-red.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 210,
        category_id: 2,
        newPrice: 180,
        sold: 335,
        brand_id: 1
    },
    {
        id: 4,
        name: "Fender Stratocaster",
        image: "images/fender-stratocaster-white.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 2500,
        category_id: 2,
        newPrice: 1250,
        sold:   612,
        brand_id: 1
    },
    {
        id: 5,
        name: "Jackson JS-11",
        image: "images/jackson-js11-white.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 675,
        category_id: 2,
        newPrice: 0,
        sold: 68,
        brand_id: 2
    },
    {
        id: 6,
        name: "Jackson JS-32T",
        image: "images/jackson-js32t-white.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 550,
        category_id: 2,
        newPrice: 0,
        sold: 89,
        brand_id: 2
    },
    {
        id: 7,
        name: "Harley Benton Black",
        image: "images/harley-benton-black.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 450,
        category_id: 1,
        newPrice: 345,
        sold: 245,
        brand_id: 4
    },
    {
        id: 8,
        name: "Harley Benton Brown",
        image: "images/harley-benton-brown.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 450,
        category_id: 1,
        newPrice: 345,
        sold: 179,
        brand_id: 4
    },
    {
        id: 9,
        name: "Marcus Miller Brown",
        image: "images/marcus-miller-brown.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 675,
        category_id: 4,
        newPrice: 0,
        sold: 578,
        brand_id: 7
    },
    {
        id: 10,
        name: "Marcus Miller White",
        image: "images/marcus-miller-white.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 675,
        category_id: 4,
        newPrice: 0,
        sold: 433,
        brand_id: 7
    },
    {
        id: 11,
        name: "Startone Brown",
        image: "images/startone-brown.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 450,
        category_id: 3,
        newPrice: 300,
        sold: 222,
        brand_id: 5
    },
    {
        id: 12,
        name: "Startone Balck",
        image: "images/startone-black.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 450,
        category_id: 3,
        newPrice: 300,
        sold: 199,
        brand_id: 5
    },
]

const filters = [
    {
        id: "priceFilter",
        title: "Prices",
        filterValues: [
            {label: "Ascending", inputName: "ascending"},
            {label: "Descending", inputName: "descending"},
            {label: "30$ - 200$", inputName: "30-200"},
            {label: "200$ - 500$", inputName: "200-500"},
            {label: "+500$", inputName: "+500"}
        ]
    },
    {
        id: "brandFilter",
        title: "Brands",
        filterValues: brands.map(brand => {
            let label = brand.title.charAt(0).toUpperCase() + brand.title.slice(1);

            if(label.split("-").length > 1){
                let words = label.split("-");
                label = words[0] + words[1]
            }

            return { label, inputName: brand.title }
        })
    },
    {
        id: "categoriesFilter",
        title: "Categories",
        filterValues: categories.map(category => {
                return {label: category.title, inputName: category.title.toLocaleLowerCase().split(" ").join("-"), id: category.id}
            })
        
    }
]

const storeContactList = [
    {
        icon: "fas fa-phone-square-alt",
        contactInfo: "+1 650-555-1234"
    },
    {
        icon: "fas fa-envelope",
        contactInfo: "guitarstore@gmail.com"
    },
    {
        icon: "fab fa-facebook-square",
        contactInfo: "https://bit.ly/3g8zkM9"
    },
    {
        icon: "fab fa-instagram-square",
        contactInfo: "https://bit.ly/3g8zkM9"
    }
];

const storeInfoList = [
    {
        icon: "fas fa-store",
        storeInfo: "12 stores"
    },
    {
        icon: "fas fa-map-marker-alt",
        storeInfo: "UK, Birmingham"
    }
];

let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

let brandsToFilterBy = brands;

let categoriesToFilterBy = categories;

let filteredProducts = [...products].sort((a, b) => a.price - b.price);

let currentPriceFilter = "ascending"

let orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : []