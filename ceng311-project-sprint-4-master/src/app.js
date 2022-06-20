$(document).ready(function () {
  $("#mertcan").click(function () {
      getData("mertcan");
  })
  $("#eray").click(function () {
      getData("eray");
  })

  getOthersWithAjax();

});

function getOthersWithAjax() {
  var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorp";
  $.getJSON(url, function(data) {
  var html = "";
  $.each(data.items, function(i, item){
  html += "<h3>" + item.title + "</h3>";
  html += item.description;
  // Remove the first paragraph of the description
  html = html.replace(
  "<p><a href=\"https://www.flickr.com/people/" +
  "82407828@N07/\">zakruvalcaba<\/a>" +
  " posted a photo:<\/p>", "");
  });
  $("#others").html(html);
  });
}


function getData(filename) {
  console.log("as");
  $.getJSON(`../json_files/${filename}.json`, function (data) {
      $.each(data, function () {
          $.each(this, function (key, value) {
              $("#content").empty();
              $("#content").append(
                  "<h1>" + value.name + "</h1>" +
                  `<img src="${value.image}" />` +
                  "<h2>" + value.title +"</h2>"+
                  "<p>" + value.text + "</p>"
              )
          });
      });
  });
}



var topics = ["Event", "Register", "Meeting", "Just Hello", "Photo", "Blog"];

$("#topic").autocomplete({
  source: topics,
});

//forms
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const message = document.getElementById("message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.style.display = "block";
  successMessage.innerText = `The process is completed ${username.value.toUpperCase()} :) Your message was sent successfully. You will receive a return on the subject of the ${topic.value.toUpperCase()} as soon as possible.`;
});
