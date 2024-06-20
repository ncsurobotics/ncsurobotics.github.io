document.getElementById("email").onclick = function () {
  location.href =
    "mailto:?subject=AquaPack%20Robotics%20-%20PostTitle&body=Check%20out%20this%20blog%20post%20from%20AquaPack%20Robotics!";
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
  let pageURL = window.location.href;

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
