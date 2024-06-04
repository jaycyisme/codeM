document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdownItems = document.querySelectorAll(".dropdown-item");

    var cartAction = document.querySelector(".cart-action");
    var dropdownCart = document.querySelector(".dropdown-cart");

    var accountAction = document.querySelector(".account-action");
    var dropdownUser = document.querySelector(".dropdown-user");
    
    var mSeriesMenu = document.getElementById("m-series-menu");
    var dropdownPanel = mSeriesMenu.nextElementSibling;

    cartAction.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownCart.classList.toggle("active");
    });

    accountAction.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownUser.classList.toggle("active");
    });

    mSeriesMenu.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownPanel.classList.toggle("active");
    });

    dropdownToggle.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });

    dropdownItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            dropdownItems.forEach(function(dropdownItem) {
                dropdownItem.classList.remove("selected");
            });
            this.classList.add("selected");
            dropdownToggle.textContent = this.textContent;
            dropdown.classList.remove("show");
        });
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // var panelListItems = dropdownPanel.querySelectorAll(".panel-list-item a");
    // panelListItems.forEach(function(link) {
    //     link.addEventListener("click", function(event) {
    //         dropdownPanel.classList.remove("active");
    //     });
    // });

    // Close the dropdowns if clicking outside of them
    document.addEventListener("click", function(event) {
        if (!cartAction.contains(event.target) && !dropdownCart.contains(event.target)) {
            dropdownCart.classList.remove("active");
        }

        if (!accountAction.contains(event.target) && !dropdownUser.contains(event.target)) {
            dropdownUser.classList.remove("active");
        }

        if (!mSeriesMenu.contains(event.target) && !dropdownPanel.contains(event.target)) {
            dropdownPanel.classList.remove("active");
        }

        if (!dropdownToggle.contains(event.target) && !dropdownItems.contains(event.target)) {
            dropdownItems.classList.remove("active");
        }
    });
});
