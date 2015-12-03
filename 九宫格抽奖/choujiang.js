var init = {
  notice: "恭喜您中奖了！",
  start :true,
  index : -1,
  count : 0,
  speed : 0,
  price : 0,
  least : 0,
  times : 0,
  initFun : function(price){
    this.start=false;
    this.least=56;
    this.times=0;
    this.speed=10;
    this.price=price;
    var $lot=$("#lot");
    this.count=$lot.find(".item").length;
    // this.least =this.count*8;
    $lot.find(".item-"+this.index).addClass("active");
  } ,
  nextScroll : function (){
    var index = this.index;
    $("#lot").find(".item-"+index).removeClass("active");
    // index+=1;
    if (index+1==init.count) {
      index=0;
    }else {
      index+=1;
    }
    $("#lot").find(".item-"+index).addClass("active");
    this.index = index;
  },
  stop : function(){
    var index = this.index;
    // console.log("index"+index+";price"+init.price+"speed"+init.speed);
    var price = this.price;
    $("#lot").find(".item-"+index).removeClass("active");
    $("#lot").find(".item-"+index).addClass("active");
    this.start = true;
    alert(this.notice);
  }
}
function autoScroll(){
  init.times += 1;
  init.nextScroll();
  if (init.times>init.least&&init.index==init.price) {
    clearTimeout(init.timer);
    init.stop();
  }else{
      if (init.times<=init.least-init.count) {
        init.speed+=5;
        // console.log(init.times+"<="+init.least);
      }
      if (init.times>init.least-init.count) {
        init.speed+=50;
        // console.log(init.speed);
      }
      // console.log("times="+init.times);
      init.timer = setTimeout(autoScroll,init.speed);

  }
}
window.onload=function(){
  $("#start").click(function(){
    if (init.start) {
      init.initFun(2);
      autoScroll();
    }else{
      console.log("稍后");
    }
  })
}
