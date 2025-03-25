// Toggle the desktop dropdown on click
  function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = (dropdownContent.style.display === "none" || dropdownContent.style.display === "") ? "block" : "none";
  }

  // Toggle the mobile dropdown on click
  function toggleMobileDropdown() {
    var dropdownContentMobile = document.getElementById("dropdownContentMobile");
    dropdownContentMobile.style.display = (dropdownContentMobile.style.display === "block") ? "none" : "block";
  }

  // Ensure the page refreshes when navigating to a sub-topic (Mobile)
  document.addEventListener("DOMContentLoaded", function () {
    let mobileLinks = document.querySelectorAll('#dropdownContentMobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let targetUrl = this.getAttribute('href');
            window.location.href = targetUrl;
        });
    });
  });

  // Ensure the page refreshes & close dropdown when navigating to a sub-topic (Desktop)
  document.addEventListener("DOMContentLoaded", function () {
    let dropdownContent = document.getElementById("dropdownContent");
    let desktopLinks = document.querySelectorAll('#dropdownContent a');

    desktopLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let targetUrl = this.getAttribute('href');

            // Close the dropdown menu
            dropdownContent.style.display = "none";

            // Navigate to the target URL
            window.location.href = targetUrl;
        });
    });
  });

  // Close dropdowns when clicking outside
  window.onclick = function(event) {
    var dropdownContent = document.getElementById("dropdownContent");
    var dropdownContentMobile = document.getElementById("dropdownContentMobile");

    if (!event.target.matches('.w3-button') && !event.target.matches('.w3-dropdown-content')) {
      if (dropdownContent && dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
      if (dropdownContentMobile && dropdownContentMobile.style.display === "block") {
        dropdownContentMobile.style.display = "none";
      }
    }
  };

