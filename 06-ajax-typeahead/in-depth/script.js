(function (document) {
    const text = "The Maroon Bells are a pair of peaks in the Elk Mountains of Colorado, United States, close to the town of Aspen. The two peaks are separated by around 500 meters (one-third of a mile). Maroon Peak is the higher of the two, with an altitude of 14,163 feet (4317.0 m), and North Maroon Peak rises to 14,019 feet (4273.0 m), making them both fourteeners. The Maroon Bells are a popular tourist destination for day and overnight visitors, with around 300,000 visitors every season.";

    const pElem = document.getElementById("text");
    const inputElem = document.querySelector("input");

    pElem.innerHTML = text;
    let timeoutFn;

    function displayMatches() {
        const term = this.value;

        if (term === "") {
            // Reset text on p element
            pElem.innerHTML = text;
            return;
        };

        const regex = new RegExp(term, 'g');
        pElem.innerHTML = text.replace(regex, `<span class="hl">${term}</span>`);
    }

    inputElem.addEventListener('input', function () {
        // Takes longer to highlight, instead of processing on every keystroke
        clearTimeout(timeoutFn);
        timeoutFn = setTimeout(displayMatches.bind(this), 300);
    });

})(document);