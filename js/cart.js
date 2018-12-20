$(function() {
	$('#cart input').change(function() {		
		$('#cart').each(function() {
			var price = $(this).find('#price').text().replace(/^[\d],[\d]/,"");
			price = isNaN(price) ? 0 : price;
			
			var quantity = $(this).find('input').val();
			quantity = isNaN(quantity) ? 0 : quantity;
			
			var cost = price * quantity;

			$('.row #total').text(cost);
		});
	});
});