const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if shiftkey down & that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // loop through all checkboxes to check if it is in between & check them
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('starting to check inbetween')
            };

            if(inBetween) {
                checkbox.checked = true;
            };
        });
    }
    lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));