document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve the text and delay values from the input fields
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    // Function to introduce a delay using a promise
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Await the specified delay
    await wait(delay);

    // Display the text after the delay
    document.getElementById("output").innerText = text;
});
