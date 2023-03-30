const cardList = [
  {
    title: "Clefairy",
    image: "images/Clefairy.png",
    link: "About Clefairy",
    url: "https://pokemon.fandom.com/wiki/Clefairy",
    desciption:
      "Clefairy (Japanese: ピッピ Pippi) is a Fairy-type Pokémon introduced in Generation I. Prior to Generation VI, it was a Normal-type Pokémon. It is Jigglypuff's counterpart.",
  },
  {
    title: "Clefable",
    image: "images/Clefable.png",
    link: "About Clefable",
    url: "https://pokemon.fandom.com/wiki/Clefable",
    desciption:
      "Clefable (ピクシー, Pikushii) is a Fairy-type Pokémon introduced in Generation I. Clefable resembles a larger Clefairy, with bigger ears and tail, larger wings, and no claws on its hands.",
  },
];
const footerSentences = [
  "Thanks for visiting!",
  "Come back soon!",
  "Stay safe and healthy!",
  "Keep learning and growing!",
  "Don't forget to have fun!",
];
const randomIndex = Math.floor(Math.random() * footerSentences.length);
const footerSentence = footerSentences[randomIndex];
document.getElementById("footer-sentence").textContent = footerSentence;

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();

  console.log("Form Data Submitted: ", formData);
  window.alert("Form Submitted Successfully!");
  $(".modal").modal("close");
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="'+item.url+'">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal pink lighten-3">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });

  addCards(cardList);
  $(".modal").modal();
});
