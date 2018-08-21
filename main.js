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
  // var item = $('div.vote').clone();
  // var prova = $('.template').clone();
  var tag = $('<i>');

    // prendiamo il voto ciclando su star
  for(i = 0; i < star.length; i++){
    var vote = star[i].vote_average;
    var number = vote / 2;
    var newNumber = Math.floor(number);


    for(k = 0; k < newNumber; k++){
     $('.vote').append('<i class="far fa-star"></i>');
    //
    //   var stars = $(tag).addClass('far fa-star');
    //   console.log(stars[k]);
    //   // var item = $('.vote').clone();
    //
    //   document.getElementsByClassName('vote').innerHTML = 'dfd';
    //   // $(this).append(stars);
    }

  };

};
