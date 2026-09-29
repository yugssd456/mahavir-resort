// =====================================
// PAGE NAVIGATION
// =====================================

function showPage(pageName) {

    // Hide all pages
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    // Show selected page
    let selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    // Move to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // Change browser title
    document.title =
        "Mahavir Resort - " +
        pageName.charAt(0).toUpperCase() +
        pageName.slice(1);
}


// =====================================
// LOAD PAGE FROM URL
// =====================================

window.onload = function() {

    let pageName =
        window.location.hash.substring(1);

    if (pageName === "") {
        pageName = "home";
    }

    showPage(pageName);

};


// =====================================
// HANDLE BACK / FORWARD BUTTON
// =====================================

window.onhashchange = function() {

    let pageName =
        window.location.hash.substring(1);

    if (pageName === "") {
        pageName = "home";
    }

    showPage(pageName);

};


// =====================================
// CURRENT DATE
// =====================================

let today = new Date();

let currentDate = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});


document.querySelectorAll(".footerDate").forEach(
    function(element) {

        element.innerHTML = currentDate;

    }
);


// =====================================
// BOOKING FORM VALIDATION
// =====================================

let bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    // Today's date
    let todayValue =
        new Date().toISOString().split("T")[0];


    document.getElementById("checkin").min =
        todayValue;

    document.getElementById("checkout").min =
        todayValue;


    bookingForm.onsubmit = function(event) {

        event.preventDefault();


        // Get values

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let phone =
            document.getElementById("phone").value.trim();

        let checkin =
            document.getElementById("checkin").value;

        let checkout =
            document.getElementById("checkout").value;

        let room =
            document.getElementById("room").value;

        let guests =
            document.getElementById("guests").value;


        // Clear errors

        document.querySelectorAll("small").forEach(
            function(error) {
                error.innerHTML = "";
            }
        );

        document.getElementById("message").innerHTML = "";


        // =================================
        // NAME
        // =================================

        if (name === "") {

            document.getElementById("nameError").innerHTML =
                "Please enter your name.";

            return;
        }


        if (!/^[A-Za-z ]+$/.test(name)) {

            document.getElementById("nameError").innerHTML =
                "Name should contain only letters.";

            return;
        }


        if (name.length < 3) {

            document.getElementById("nameError").innerHTML =
                "Name must contain at least 3 characters.";

            return;
        }


        // =================================
        // EMAIL
        // =================================

        if (email === "") {

            document.getElementById("emailError").innerHTML =
                "Please enter your email.";

            return;
        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            document.getElementById("emailError").innerHTML =
                "Enter a valid email address.";

            return;
        }


        // =================================
        // PHONE
        // =================================

        if (phone === "") {

            document.getElementById("phoneError").innerHTML =
                "Please enter your phone number.";

            return;
        }


        if (!/^[6-9][0-9]{9}$/.test(phone)) {

            document.getElementById("phoneError").innerHTML =
                "Enter a valid 10-digit phone number.";

            return;
        }


        // =================================
        // CHECK-IN
        // =================================

        if (checkin === "") {

            document.getElementById("checkinError").innerHTML =
                "Please select check-in date.";

            return;
        }


        // =================================
        // CHECK-OUT
        // =================================

        if (checkout === "") {

            document.getElementById("checkoutError").innerHTML =
                "Please select check-out date.";

            return;
        }


        if (checkout <= checkin) {

            document.getElementById("checkoutError").innerHTML =
                "Check-out must be after check-in.";

            return;
        }


        // =================================
        // ROOM
        // =================================

        if (room === "") {

            document.getElementById("roomError").innerHTML =
                "Please select a room.";

            return;
        }


        // =================================
        // GUESTS
        // =================================

        if (
            guests === "" ||
            guests < 1 ||
            guests > 10
        ) {

            document.getElementById("guestsError").innerHTML =
                "Guests must be between 1 and 10.";

            return;
        }


        // =================================
        // SUCCESS
        // =================================

        document.getElementById("message").innerHTML =
            "✓ Booking successful! Thank you, " +
            name +
            ". Your " +
            room +
            " has been reserved.";

    };

}
