$(document).ready(function(){
  $('#btn').click(function(){

    callApi();

  })
});

function callApi(){
  var user = $('#search-user').val();

  $.ajax({
    url: 'https://developers.themoviedb.org/3',
    method: 'GET',
    data: {
      key : '63c4b4876efa837dcfb06a6ff46ab59f',
      language : 'it-IT',
      query : user
    }
    success: function(){
      console.log(data);
    }
    errorr: function(){
      alert('si è verificato un errore');
    }
  })
}
