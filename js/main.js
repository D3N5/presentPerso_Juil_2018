// Scroll animation
$('#view-more').on('click', function() {
    const description = $('#description').position().top;
  
    $('html, body').animate(
    {
      scrollTop: description
    },
    900
    );
  });

  $('#photo-trip').on('click', function() {
    const trip = $('#view-trip').position().top;
  
    $('html, body').animate(
    {
      scrollTop: trip
    },
    2000
    );
  });