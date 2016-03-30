$(document).ready(function(){
// $("#send").click(
//   function(){
//     if ($("input").val().length == 0) {
//       alert("Il s'agirait d'écrire!");
//     }
//     console.log($("#mdp").val());
//   if ($("input").val().length < 5) {
// alert("Tous les champs doivent contenir au moins 5 caractères")};
// if ($("#mdp").val() !== $("#mdp-confirm").val()) {
//   alert("Les mots de passe ne sont pas identiques!");
// }
// });


$(".form-control").keyup(function(){
  if ($(this).val().length < 5) {
$(this).css("border-color", "rgb(254, 121, 121)");
}
else {
  $(this).css("border-color", "");
}
});


$("input").blur(function(){
  console.log($("#mdp").val());
  console.log($("#mdp-confirm").val());


  if (($("#mdp").val() !== $("#mdp-confirm").val()) || $("#mdp").val().length < 5 || $("#mdp-confirm").val().length < 5) {
$("#mdp").css("border-color", "rgb(254, 121, 121)");
$("#mdp-confirm").css("border-color", "rgb(254, 121, 121)");

}


else {
  $("#mdp").css("border-color", "");
  $("#mdp-confirm").css("border-color", "");}
});





$("#send").click(function(){
  if (($("#mdp").val() !== $("#mdp-confirm").val()) || $("input").val().length < 5) {
  $("#erreur").css("display", "block");
  return false;
  }

});


$("#email").keyup(function(){
   var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
if(regEmail.test($(this).val()) ){
 $(this).css({
   borderColor : '',

 });} else {
 $(this).css({
   borderColor : 'rgb(254, 121, 121)',
 });
}
});





});
