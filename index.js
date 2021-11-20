fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=varanasi")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1587219645195-ddbdcf044f8a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzc0NDk4MDc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&quot; )`
        // Report the error to some kind of service
        document.getElementById("author").textContent = `By: Alain Bonnardeaux`
    })

    