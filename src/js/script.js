function openPopupSignin() {
    popup_window = document.getElementById("hover-popup-window-signin");
    popup_window.style.display = "inline-block";
}

function closePopupSignIn() {
    popup_window = document.getElementById("hover-popup-window-signin");
    popup_window.style.display = "none";
}

function openPopupSignUp() {
    popup_window = document.getElementById("hover-popup-window-signup");
    popup_window.style.display = "inline-block";
}

function closePopupSignUp() {
    popup_window = document.getElementById("hover-popup-window-signup");
    popup_window.style.display = "none";
}

function loseFocuse() {
    document.getElementById("CGU-checkbox-button").blur(); // méthode blur() permet de retirer le focus de l'élément courant.
}