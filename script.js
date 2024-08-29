window.onload = function() {
    let form = document.getElementById("form");
    form.onsubmit = execute; // This will ensure the form doesn't refresh the page
    check();
}

function check() {
    let form = document.getElementById("form");
    let button = document.getElementById("existing");

    if(localStorage.getItem("username")){
        if (!button) {
            button = document.createElement("button");
            button.setAttribute("id","existing");
            button.textContent = "Login as existing user";
            form.appendChild(button);
            button.addEventListener("click", function() {
                alert("Logged in as " + localStorage.getItem("username"));
            });
        }
    } else {
        if (button) {
            console.log("true")
        }
    }
}

function execute(event) {
    event.preventDefault();

    let checkbox = document.getElementById("checkbox");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let form = document.getElementById("form");
	let button = document.getElementById("existing");

    if(checkbox.checked) {
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
		button = document.createElement("button");
        button.setAttribute("id","existing");
        button.textContent = "Login as existing user";
        button.addEventListener("click", function() {
                alert("Logged in as " + localStorage.getItem("username"));
            });
		form.appendChild(button)
		alert("Logged in as " + localStorage.getItem("username"))
		
    } else {
		console.log("removing")
        localStorage.getItem('username') && localStorage.removeItem('username');
		localStorage.getItem('password') && localStorage.removeItem('password');
		button && button.remove()
		alert("Logged in as " + username);
    }
}