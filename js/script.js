
$(document).ready(function(){

function addListItem() {

    var titleToAdd = $('#new-text').val();
    var textToAdd = $('#text-1').val();
    $('#list').append('<li class="item">' + titleToAdd +new Date()+ '<button class="delete">Delete</button></li>');
    $('#list').append('<li class="item-1">'+ titleToAdd +new Date()+ '<button class="delete">Delete</button></li>')
    $('#new-text').val('');
    $('#text-1').val('');

	};
function deleteItem() {
    $(this).parent().remove();
    
};
   	$('.add').on('click', function(){
      	if(($('#new-text').val() && $('#text-1').val())!== ''){
          addListItem();
        }else{alert("Please enter your list")};
      	});

    $(document).on('click', '.delete', deleteItem);

		$('.fullwidth').hide();
    $('.remove').on('click',function removeAll(){
    		var msg ="are you sure you want to remover all?";
        var name = $('#name').val();
        alert(name + ' ' +msg);
        $('#list').remove();
				$('.fullwidth').show();
				
    });

})