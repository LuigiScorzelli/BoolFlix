$(document).ready(function(){
  $('#btn').click(function(){

    callApi();

  })
});

function callApi(){
  var user = $('#search-user').val();

  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    data: {
      api_key : '63c4b4876efa837dcfb06a6ff46ab59f',
      language : 'it-IT',
      query : user,
    },
    success: function(data){
      // stampo i risultati
      printResult(data);
      //stampo le stelle che corrispondono ai voti
      printStars(data);

    },
    errorr: function(){

      alert('si è verificato un errore');

    },
  })
};

function printResult(data){

  // salvo la risposta in una variabile
  var answer = data.results;
  //ciclo sulla variabile per prendere i dati
  for(i = 0; i < answer.length; i++){

    var title = answer[i].title;
    var original = answer[i].original_title;
    var language = answer[i].original_language;
    // var vote = answer[i].vote_average;

    $('ul#title').append('<li>'+ title +'</li>');
    $('ul#titolo-originale').append('<li>'+ original +'</li>');
    $('ul#lingua').append('<li>'+ language +'</li>');
    // $('ul#voto').append('<li>' + vote + '</li>');

  }
};

function printStars (data){
  var star = data.results;

  for(i = 0; i < star.length; i++){
    var prova = star[i].vote_average;
    var item = $('.item').clone();
    var a = $(item).children();

    // trasformo il voto in un numero da 1 a 5

    if(prova === 0 && prova <= 2){
      prova = 1;
      // $('ul#voto').append('<i class="far fa-star"></i>');
      $(a).css('far fa-star"');
      console.log(a);
      // console.log(prova);
     }
    //  else if((prova > 2) && (prova <= 4)){
    //    prova = 2;
    //   console.log(prova);
    //   for(a = 0; a <= 1; a++){
    //     $('ul#voto').append('<i class="far fa-star"></i>');
    //   }
    // }
    // else if((prova > 4) && (prova <= 6)){
    //   prova = 3;
    //   console.log(prova)
    //   for(b = 0; b <= 2; b++){
    //     $('ul#voto').append('<i class="far fa-star"></i>');
    //   }
    // }
    // else if((prova > 6) && (prova <= 8)){
    //   prova = 4;
    //   console.log(prova)
    //   for(c = 0; c <= 3; c++){
    //     $('ul#voto').append('<i class="far fa-star"></i>');
    //   }
    // }
    // else if((prova > 8) && (prova <= 10)){
    //   prova = 5;
    //   console.log(prova)
    //   for(d = 0; d <= 4; d++){
    //     $('ul#voto').append('<i class="far fa-star"></i>');
    //   }
    // }
  }
};
