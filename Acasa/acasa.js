$(window).load(function(){
		var pages = $('#container li'), current=0;
		var currentPage,nextPage;
		var timeoutID;
		var buttonClicked=0;

		var handler1=function(){
			buttonClicked=1;
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
					else
					current=current-1;
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
			}
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow',0.3,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#container .button').bind('click',handler1);
				});	
			});			
		}

		var handler2=function(){
			if (buttonClicked==0)
			{
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if (current >= pages.length-1)
				current=0;
			else
				current=current+1;
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow',0.3,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#container .button').bind('click',handler1);				
				});	
			});
			timeoutID=setTimeout(function(){
				handler2();	
			}, 4000);
			}
		}

		$('#container .button').click(function(){
			clearTimeout(timeoutID);
			handler1();
		});

		timeoutID=setTimeout(function(){
			handler2();	
			}, 4000);
		
});
