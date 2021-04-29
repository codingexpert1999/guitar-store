// DOM Elements
const categoriesList = document.querySelector(".list-with-style");
const contactList = document.getElementById("contact-list")
const infoList = document.getElementById("info-list")

// Functions
const initializeCategoriesList = () => {
    categoriesList.innerHTML = "";

    categories.forEach(category => {
        categoriesList.innerHTML += `
            <li>
                <a href="/products.html?categoryId=${category.id}">${category.title}</a>
            </li>
        `
    })
}

const initializeInfoLists = () => {
    contactList.innerHTML = "";

    storeContactList.forEach(contact => {
        contactList.innerHTML += `
            <li>
                <i class="${contact.icon}"></i> ${contact.contactInfo}
            </li>
        `
    })

    infoList.innerHTML = "";

    storeInfoList.forEach(info => {
        infoList.innerHTML += `
            <li>
                <i class="${info.icon}"></i> ${info.storeInfo}
            </li>
        `
    })
}

initializeCategoriesList();
initializeInfoLists();