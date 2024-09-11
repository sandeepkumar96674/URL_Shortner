function shortenURL() {
    const longUrl = document.getElementById('long_url').value;
    if (!longUrl) {
        alert("Please enter a URL to shorten!");
        return;
    }

    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`)
        .then(response => response.text())
        .then(shortUrl => {
            document.getElementById('result').innerHTML = `
                <h2>URL Shortened!</h2>
                <p class="short-url"><a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
                <p class="long-url">Original URL: <a href="${longUrl}" target="_blank">${longUrl}</a></p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error shortening the URL.");
        });
}

// Visitor Counter
function updateVisitorCount() {
    if (typeof(Storage) !== "undefined") {
        // Get the current count from localStorage, or set to 0 if not present
        let count = localStorage.getItem('page_visitor_count');
        if (count === null) {
            count = 0;
        }
        count = parseInt(count) + 1;
        localStorage.setItem('page_visitor_count', count);
        
        // Display the visitor count
        document.getElementById('visitor-count').innerText = `Visitors: ${count}`;
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

// Call the updateVisitorCount function on page load
window.onload = updateVisitorCount;
