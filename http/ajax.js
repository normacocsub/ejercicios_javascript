let http = new XMLHttpRequest()

http.open('GET', 'https://661ae3d365444945d04eb852.mockapi.io/persona', true)
http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE) {
        if (http.status === 200) {
            console.log(http.responseText)
        } else {
            console.log(http.response, http.status)
        }
    }
}

http.send()

