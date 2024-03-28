// Get references to DOM elements
let quote = document.getElementById("quote"); // Element to display the quote text
let author = document.getElementById("author"); // Element to display the author
let newQuoteButton = document.getElementById("new-btn"); // Button to fetch a new quote
let CopyButton = document.getElementById("copy-btn"); // Button to copy the quote to clipboard
let IS_LOADING = false; // Flag to indicate if a quote is currently being loaded

// Execute when the window has loaded
window.addEventListener("load", async () => {
    try {
        await FETCHDATA(); // Fetch and display a quote when the page loads
    } catch (error) {
        alert("Error: " + error); // Alert user if there's an error during loading
    }
});

// Event listener for the "New Quote" button
newQuoteButton.addEventListener("click", async () => {
    try {
        IS_LOADING = true; // Set loading flag to true
        newQuoteButton.innerHTML = "Loading..."; // Update button text to indicate loading
        await FETCHDATA(); // Fetch and display a new quote
    } catch (error) {
        alert("Error: " + error); // Alert user if there's an error during loading
    } finally {
        IS_LOADING = false; // Set loading flag back to false
        newQuoteButton.innerHTML = "New Quote"; // Restore button text
    }
});

// Event listener for the "Copy Quote" button
CopyButton.addEventListener("click", () => {
    let text = quote.innerHTML; // Get the text of the displayed quote
    navigator.clipboard.writeText(text); // Copy the text to the clipboard
    CopyButton.innerHTML = "Copied!"; // Update button text to indicate successful copy
    setTimeout(() => {
        CopyButton.innerHTML = "Copy Quote"; // Restore button text after a delay
    }, 2000);
});

// Function to fetch data (quote and author) from the API
const FETCHDATA = async () => {
    let response = await fetch("https://api.quotable.io/random"); // Fetch a random quote from the API
    let data = await response.json(); // Extract JSON data from the response
    quote.innerHTML = data.content; // Display the quote text
    author.innerHTML = "~" + data.author; // Display the author
};
