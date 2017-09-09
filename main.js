$(document).ready(function() {

	//to show the tool tip in main page
	$(".data").hover(function() {
		$(this).tooltip('show');
	});

	$('.carousel').carousel({
  	interval: 4000
	});

  /*$(".enlarge").on("click", function() {
      $('#imagemodal').modal('show'); 
  });*/

});

function initMap1() {
        var coord = {lat: 19.2150084, lng: 72.9707569}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          title: "Mumbai, India",
          map: map
        });
        }

function initMap2() {
        var coord = {lat: 32.9188351, lng: -97.3132045}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          title: "Fort Worth, Texas",
          map: map
        });
        }