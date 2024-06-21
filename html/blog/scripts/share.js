let pageURL = window.location.href;
let postTitle = document.getElementById("post-title").textContent;

document.getElementById("email").onclick = function () {
  let href =
    "mailto:?subject=" +
    postTitle +
    "%20-%20AquaPack%20Robotics&body=Check%20out%20this%20blog%20post%20from%20AquaPack%20Robotics!" +
    "%0A" +
    "%0A" +
    pageURL;

  location.href = href;
};

document.getElementById("linkedin").onclick = function () {
  alert("Sorry, this button doesn't work yet");
};

document.getElementById("xtwitter").onclick = function () {
  alert("Sorry, this button doesn't work yet");
};

document.getElementById("mastodon").onclick = function () {
  alert("Sorry, this button doesn't work yet");
};

document.getElementById("linkshare").onclick = function () {
  navigator.clipboard
    .writeText(pageURL)
    .then(() => {
      console.log("Link copied to clipboard");
      alert("The link to this post was copied to the clipboard");
    })
    .catch((error) => {
      console.error("Error copying link to clipboard", error);
    });
};
