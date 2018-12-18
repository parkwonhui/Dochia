$(function(){
	var $best = $('#best-item');	// bestitem 전체 선택
	var $new = $('#new-item'); 		// newitem 전체 선택
	var $bestSlides = $best.find('.col-lg-2 col-sm-6 portfolio-item');	// best 4개
	var $newSlides = $new.find('.col-lg-2 col-sm-6 portfolio-item');	// new 4개
	
	//var $nav = $container.find('.slideshow-nav');// 네비게이션
	var currentIndex = 0;
	
	// ajax로 데이터 가져오
	function postBestItem(){
		$.ajax({
			url:'bestitem.json',
			type:'post',
			dataType:'json',
			//data:$(this).serialize(),
			success : successBestItemHandler
		});
	}
	
	function postNewItem(){
		$.ajax({
			url:'newitem.json',
			type:'post',
			dataType:'json',
			//data:$(this).serialize(),
			success : successNewItemHandler
		});
	}
	
	function successBestItemHandler(data){		
		$(data).each(function(index, item){
			var html = '<div class="col-lg-2 col-sm-6 portfolio-item">' 
			html += '<a href="#"><img class="card-img-top" src="./img/'+item.img+'" alt=""></a>';
			html += '<ul>';
			html += '<li>'+item.comment+'</li>';
			html += '<li>'+item.name+'</li>';
			html += '<li>'+item.price+'</li>';
			html += '<li> 장바구니 </li>';
			html += '</ul>';
			html += '</div>';
			$('#best-item').append(html);
			console.log();	
            /*<a href="#"><img class="card-img-top" src="http://placehold.it/250x250" alt=""></a>
            <ul>
			<li>미니코멘트</li>
            <li>아이템 이름</li>
            <li>가격</li>
            <li>장바구니</li>       
            </ul>*/
		});
	}
	
	function successNewItemHandler(data){		
		$(data).each(function(index, item){
			var html = '<div class="col-lg-2 col-sm-6 portfolio-item">';
			html += '<a href="#"><img class="card-img-top" src="./img/'+item.img+'" alt=""></a>';
			html += '<ul>';
			html += '<li>'+item.comment+'</li>';
			html += '<li>'+item.name+'</li>';
			html += '<li>'+item.price+'</li>';
			html += '<li> 장바구니 </li>';
			html += '</ul>';
			html += '</div>';
			$('#new-item').append(html);
		});
	}
			
	postBestItem();
	postNewItem();

	var a = $best.children.length;
	console.log('a:'+a);
	var b = $best.find('div').length;
	console.log('b:'+b);

	
	// left는 화면 비율에서 시작할 위치를 의미한다
	$best.each(function(i){
		console.log("#" + ($(this).children()).length);
		var bbb = $(this).find('div');
		console.log(bbb);
		$(this).css({
			left : 50 * (i * 5) + '%'
		});
	});
	
	$new.each(function(i){
		var bbb = $(this).find('div');
		console.log(bbb);
		$(this).css({
			left : 50 * (i * 5) + '%'
		});
	});
	
	
	/*
	function goToSlide(index){
		if(index <= 0)
			return;
		
		index = index%3;
		$slideGroup.animate({
			left: -10*(index*5)+'%'
		},500);
		currentIndex = (index%4);
		
		console.log(currentIndex);
	}
	
	$nav.find('a').click(function(){
		event.preventDefault();
		if($(this).hasClass('prev')){
			goToSlide(currentIndex-1);
		}else{
			goToSlide(currentIndex+1);
		}
	});*/
	
});