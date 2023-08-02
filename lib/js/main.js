const inputTitle = document.getElementById("title_input");
const header = document.getElementById("main_title");

inputTitle.addEventListener("change", (event) => {
    header.textContent = event.target.value; // changes the main title based on title input
})

const submit = document.getElementById("submit_button");
const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
const adj = document.getElementById("adjective");
const form = document.querySelector(".form_container");
const story = document.getElementById("story_result");

submit.onclick = function (event) {
    event.preventDefault(); // prevent refreshing the page

    if (noun.value.length == 0 || verb.value.length == 0 || adj.value.length == 0 || inputTitle.value.length == 0) {
        alert("Please fill in all fields"); // alerts the user if all fields aren't filled out
    } else {
        const adlibText = `Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adj.value} day!`;
        story.textContent = adlibText;
        story.style.display = "block";
        form.style.display = "none";
    }
};