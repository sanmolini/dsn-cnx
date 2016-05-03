$(document).ready(function () {
	//execute remove Tags
	deleteTags();
	//show-hide filters
	$('#tags').click(function () {
		$('#articleTagFilter').fadeToggle();
		$('#filter .l span#tags img').toggleClass("reverse");
		//$('#articleTagFilter').removeClass("moveToLeft");
		//$('#articleTagFilter').addClass("moveToRight");
		//$('#filter .l *').fadeToggle();
	});
	//NEWEST
	$('.orderBy').click(function () {
		$('#filter .r .orderBy img').toggleClass("reverse");
	});
	$('#articleTagFilter .subjectFilters h1 img').click(function () {
		$('section#articleTagFilter').hide();
		$('#filter .l span#tags img').removeClass("reverse");
		//$('#articleTagFilter').addClass("moveToLeft");
	});
	//show input to add a tag
	$('.addTag').click(function () {
		$('#filter input[type="text"]').fadeIn();
	});
	//clean the input
	$('div.clearTags').click(function () {
		if ($('#filter input[type="text"]').val().length == 0) {
			console.log("0");
			$('#filter input[type="text"]').hide();
		} else {
			console.log("bigger than 0", "total:" + $('#filter input[type="text"]').val().length);
			$('#filter input[type="text"]').val("");
		}
	});
	//add TAG
	$('#filter input[type="text"]').bind("enterKey", function (e) {
		var tagNameGenerated = $('#filter input[type="text"]').val();
		if (tagNameGenerated.length > 0) {
			console.log("input Value: ", tagNameGenerated);
			$('<span/>').addClass("spanClickable").html(tagNameGenerated).appendTo(".tagList");
			$('<a href="#"/>').html('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+ElEQVQ4T41TuxXCMBA7ZQGyASswAjTU0PFpGAEmgSEILdRJASMwAmwQFoiIbeKXz9kPd8lZOt1JxirLd6hwJFgmkOVlO39K5GyyfFJRriBSJjxgdS5KiIwshlIi4SxEYsCscBdI6u+vz8Wr/hj7pgGSAdgB3nCS8PAqFCUamCKfBJzWOJEYieVry7aTOrAZ1RLESGyxmbkHdqXWUZW06u3Oze8OQVCJ0jlK0J/ZW6ZYPBhBBTftFIs7S9S2/VuUC5pisbcxZJXBxHJigxTzOWaxiT36UdasCpFQ+Oo8phA4FDZzH+Y5C3Gql1ECXPzznEncanAq4P4LBh3eixAVPWoAAAAASUVORK5CYII=" width="8" height="8"/>').appendTo(".spanClickable");
			$('#filter input[type="text"]').val("");
			deleteTags();
		} else {
			alert("tag is empty");
		}
	});
	$('#filter input[type="text"]').keyup(function (e) {
		if (e.keyCode == 13) {
			$(this).trigger("enterKey");
		}
	});

	function deleteTags() {
		//delete TAG
		$('.tagList span').click(function () {
			console.log("span removed");
			$(this).remove();
		});
		$('span.spanClickable').click(function () {
			console.log("span removed");
			$(this).remove();
		});
	};

	/** Filtering Tags **/
	var options = {
		valueNames: ['name']
	};

	var userList = new List('users', options);
	
	/** Infinite scroll **/
	$('.jscroll').jscroll({
    loadingHtml: '<div class="loading centering"><span><img src="img/loader.gif" /> </span>LOADING MORE ARTICLES</div>',
    padding: 20,
    nextSelector: 'a.jscroll-next:last',
    contentSelector: 'li'
});






}); //Document.ready ends