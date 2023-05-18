getCookie = (name) => {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

deleteCookie = (name, path) => {
    // document.cookie = `sandwich=turkey; path=/; max-age=0;`;
    document.cookie = `${name}; path=${path}`
}

console.log(getCookie("login"))
console.log(document.cookie)

// validation if login cookie exist after jwt access


// deleteCookie("login", "/")



