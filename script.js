let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let predictGender = () => {
    let name = document.getElementById("name").value;
    let error = document.getElementById("error");
    let finalURL = url + name;
    console.log(name);
    console.log(finalURL);
    wrapper.innerHTML = "";
    error.innerHTML = "";
  //Check if input field is not empty and the entered name does not contain anything but alphabets.
    if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
        fetch(finalURL)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${data.gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
            wrapper.append(div);
            if (data.gender == "female") {
                div.classList.add("female");
                document
                .getElementById("gender-icon")
                .setAttribute("src", "female.svg");
            } else {
                div.classList.add("male");
                document
                .getElementById("gender-icon")
                .setAttribute("src", "male.svg");
            }
        });
        document.getElementById("name").value = "";
    } else {
        error.innerHTML = "Enter a valid name with no spaces";
    }
};

document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);


// Sharing Api

const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
    if (navigator.share) {
        // Browser supports native share api
        navigator.share({
        text: 'Visit this website 😊: ',
        url: 'https://arnab-4.github.io/GenPred/'
    }).then(() => {
        console.log('Thanks for sharing!');
    })
        .catch((err) => console.error(err));
    } else {
        // Fallback
        alert("The current browser does not support the share function. Please, manually share the link")
    }
});
