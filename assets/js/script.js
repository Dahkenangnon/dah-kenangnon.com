const footer = document.querySelector('.footer');
const socialIcons = document.querySelectorAll('a');

socialIcons.forEach((socialIcon) => {
    // If 'a' has 'target' set to '_blank', add 'rel' attribute with 'noopener'
    if (socialIcon.getAttribute('target') === '_blank') {
        socialIcon.setAttribute('rel', 'noopener');

        // Add click event listener to show alert and open link in new tab
        socialIcon.addEventListener('click', (e) => {
            e.preventDefault();
            showAlert('Alert!', 'The link will open in a new tab when you close this alert.');

            // Add click event listener to close alert and open link in new tab
            closeAlertButton.addEventListener("click", () => {
                closeAlert();
                window.open(socialIcon.href, '_blank');
            });
        });
    }
});

const modal = document.getElementById("myModal");
const img = document.getElementById("circle-avatar");
const modalImg = document.getElementById("image-box");
const captionText = document.getElementById("caption");

// Add click event to display modal with image and caption
img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

const span = document.getElementsByClassName("close")[0];

// Add click event to close modal
span.addEventListener('click', function () {
    modal.style.display = "none";
});

const customAlert = document.getElementById("custom-alert");
const closeAlertButton = document.getElementById("close-alert");

// Function to close alert
function closeAlert() {
    customAlert.classList.add("hidden");
}

// Function to show alert with title and content
function showAlert(title, content) {
    const titleEl = customAlert.querySelector("#title");
    const contentEl = customAlert.querySelector("#content");
    titleEl.innerHTML = title;
    contentEl.innerHTML = content;
    customAlert.classList.remove("hidden");
}
