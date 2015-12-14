$(function(){
	var lunbo={
		count:"",
		index:"",
		init:function(){
			var $imglist = $(".lunbo").find("img");
			$(".main-pic").css({
				overflow: 'hidden',
				position: 'relative'
			});
			this.count=$imglist.length;
			this.index=0;
		},
		next:function(){
			$('.lunbo').find("img:first-child").appendTo($('.lunbo'));
			if (lunbo.index==lunbo.count-1) {
				lunbo.index=0;
			}else{
				lunbo.index+=1;
			};
			$(".point").find("span").removeClass("cur").eq(lunbo.index).addClass('cur');
			console.log(lunbo.index);
		}
	};
	lunbo.init();
	setInterval(lunbo.next, 2000);
})