//
//check off specific todos by clicking
$("ul").on("click", "li", function(){ //added third argument: when an li clicked insidet the ul. we need it for adding future todo li
	//for toogle it
	$(this).toggleClass("completedTask");
});

//delete todos
$("ul").on("click", "span", function(event){
	//to remove the corresponding li
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //to remove it after the fade effect and there this is the parent
	}); 

	event.stopPropagation(); //for stop bubling up chain elements upto body
});

//to add new todos
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//get the new todo text from input
		var todo = $(this).val();
		//make the input field empty
		$(this).val("");
		//create a new li with todo and add to ul usint append()
		$("ul").append("<li><span><i class='fa fa-trash' ></i> </span> " +todo+ "</li>");
		
		
	}
});

//to in/out the text box by clicking + sign on header
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});