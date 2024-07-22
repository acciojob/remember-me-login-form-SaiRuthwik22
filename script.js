function check() {
	   if(localStorage.getItem("https://www.svgrepo.com/show/345221/three-dots.svgusername")){
        let existing = document.getElementById("existing");
        if (!existing) {
            button = document.createElement("button");
            button.setAttribute("id","existing")
            button.textContent = "Login as existing user";
            form.appendChild(button);
        }
        button.addEventListener("click", function() {
            alert("Logged in as " + localStorage.getItem("username"));
        });
    }else {
    let button = document.getElementById("existing");
    if (button) {
        button.remove();
    }
}

}

function execute(event) {
    event.preventDefault();

    let checkbox = document.getElementById("checkbox");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let form = document.getElementById("form");

    if(checkbox.checked) {
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
    } else {
        localStorage.clear();
    }
	check()
    alert("Logged in as " + username);
}