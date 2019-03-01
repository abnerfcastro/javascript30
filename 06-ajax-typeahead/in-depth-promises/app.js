function fetchData() {
    const executionTime = Math.floor(Math.random() * 1000 + 500); // between 500 and 1000 milliseconds
    const data = {
        results: [{
            name: "Rachel",
            surname: "Green"
        }, {
            name: "Monica",
            surname: "Geller"
        }],
        elapsedTime: executionTime
    }
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.7) {
            setTimeout(resolve.bind(this, data), executionTime);
        } else {
            const err = new Error("Something went wrong.");
            setTimeout(reject.bind(this, err), executionTime);
        }
    });
}

// then/catch
fetchData()
    .then(data => console.log("#1", data))
    .catch(err => console.log("#1", err.message));

// await/asyng
(async function () {
    try {
        const data = await fetchData();
        console.log("#2", data);
    } catch (err) {
        console.log("#2", err.message);
    }
})();