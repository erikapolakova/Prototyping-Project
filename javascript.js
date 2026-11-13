/* ------------------------------------------------------------------------ */
/* SHARED CODE FOR ALL PAGES */

(function() {

    const idleDurationSecs = 120;    // X number of seconds
    const redirectUrl = '/';  // Redirect idle users to this URL
    let idleTimeout; // variable to hold the timeout, do not modify

    const resetIdleTimeout = function() {

        // Clears the existing timeout
        if(idleTimeout) clearTimeout(idleTimeout);

        // Set a new idle timeout to load the redirectUrl after idleDurationSecs
        idleTimeout = setTimeout(() => location.href = redirectUrl, idleDurationSecs * 1000);
    };

    // Init on page load
    resetIdleTimeout();

    // Reset the idle timeout on any of the events listed below
    ['click', 'touchstart', 'mousemove'].forEach(evt => 
        document.addEventListener(evt, resetIdleTimeout, false)
    );

})();










/* ------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------ */
/* HOMEPAGE (/homepage.html) */

const cards = document.querySelectorAll(".cards-container .card");

const cardOrder = [cards[4], cards[2], cards[3], cards[1], cards[0]];

let current = 0;

function changeCard(direction) {
    current = (current + direction + 5) % 5;

    cardOrder.forEach((card, i) => {
        let pos = (i - current + 5) % 5;

        card.className = "card " + [
            "main",
            "side right",
            "side2 right1",
            "side2 left1",
            "side left"
        ][pos];
    });
}

/* ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------ */
/* CHARITIES PAGE (/charitiesPage.html)   */

function popUp(event, id){

    event.stopPropagation();

    var popup = document.getElementById(id);
    popup.classList.toggle("show");   
}

document.addEventListener("click", function(event){
    var popups = document.querySelectorAll(".popup-content");

    popups.forEach(function(popup){
        if (!popup.contains(event.target)){
            popup.classList.remove("show");
        }
    });
});



/* ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------ */
/* CONTACT US PAGE (/contactUsPage.html)                                    */
/* ------------------------------------------------------------------------ */


const form = document.getElementById("forma");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

 let Email = emailInput.value;

  if (Email.includes("@")) {
    showMessage("Sign-up successful!");
    return;
  } else {
    showMessage("Invalid email format, try again.")
  }
});

function showMessage(text) {
  window.alert(text);
}

/* ------------------------------------------------------------------------ */
/* INFO PAGE (/infoPage.html)                                               */
/* ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------ */
/* MAP PAGE (/mapPage.html)                                                 */
/* ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------ */
/* STARTER PAGE (/starterPage.html)                                         */

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

/* ------------------------------------------------------------------------ */