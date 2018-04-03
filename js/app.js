$(document).ready(function(){
 $.ajax({url:"https://talaikis.com/api/quotes/random/", success: getAuthorQuote});
 var author;
 var quote;
 var category; 
  function getAuthorQuote(data){
    author = data.author;
    quote = data.quote;
    category = data.cat;
    $('#actual-quote').html(quote);
    $('#author').html(author);
    $('#category').html(category);

  }
  $('#newquote').on('click', function(){
    console.log('you clicked new quote!');
    $.ajax({url:"https://talaikis.com/api/quotes/random/", success: getAuthorQuote});
    
  })
  function openURL(url){
    window.open(url, 'Share', 
    'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }

  $('#tweet').on('click', function() {

      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
      + encodeURIComponent('"' + quote + '" ' + author));

  });
});




