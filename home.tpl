<?php echo $header; ?>
<body>
<div class="div-guide" style="height:568px;height:100%;z-index:1000;"></div>
<div class="indexbanner headroom" id="a" style="position:relative">
    <div class="indexgrzx">
        <div>
            <a href="<?php echo $this->url->link('account/account', '', 'SSL'); ?>"><img src="wxjp/view/theme/melro/stylesheet/images/icon4.png" /></a>
        </div>
        <div class="div-user-center"><a href=" <?php echo $this->url->link('account/account', '', 'SSL'); ?>">个人中心</a></div>
    </div>
</div>
<div class="indexmain">
    <div class="outindexleft">
        <div class="hidebtn">
            <div class="btn btnl"></div>
            <div class="btn btnr btnhide"></div>
        </div>
        <div class="indexleft" id="header-slide s_zhiwei_left menu">
            <div class="meiluohot meiluohot_bg goods_hot meiluohot_active" id="meiluohot" onclick="show_goods(-1);">
                <img src="wxjp/view/theme/melro/stylesheet/images/meiluohot.png" alt="">
                <span>美罗热卖</span>
            </div>
            <div class="meiluohot" onclick="toggle_list(event)">
                <span>美罗百货&nbsp;<span class="listtag"></span></span>
            </div>
            <div class="index-model-list">
                <?php foreach ($categories as $key=>$categorie) { ?>
                <?php if(!empty($cate_products[$categorie['category_id']])){ ?>
                <div class="meiluohot" id="index_model<?php echo $categorie['category_id'];?>" onclick="show_goods('<?php echo $categorie['category_id'];?>');">
                    <span class="third-list">
      
      
                        <?php echo $categorie['name']; ?>
                    </span>
                </div>
                <?php } ?>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="indexright">
        <ul class="indexright-ul" id="index-goods-list">
            <?php foreach ($hotProducts as $hotProduct) { ?>
            <li class="hotProduct">
                <img src="http://www.matrojp.com/image/<?php echo $hotProduct['image']; ?>" onclick="go_goods_detail('<?php echo $hotProduct['product_id'];?>')" />
                <div class="indexright-ul-right">
                    <p class="indexright-ul-right-title" onclick="go_goods_detail('<?php echo $hotProduct['product_id'];?>')"><?php echo $hotProduct['name']; ?></p>
                    </br>
                    <span class="indexright-ul-right-price">¥<?php echo number_format($hotProduct['price'],2); ?><span class="indexright-ul-right-price2"></span></span>
                </div>
                <div class="indexright-ul-right-active">
                    <?php if($hotProduct['quantity']!=0) { ?>
                    <?php if ($cart_quantity[$hotProduct['product_id']]['quantity'] == 0) { ?>
                    <!--验证该商品购物车是否还有商品-->
                    <span class="indexright-ul-right-add add<?php echo $hotProduct['product_id']; ?>" id="add<?php echo $hotProduct['product_id']; ?>" onclick="javascript:add_num('<?php echo $hotProduct['product_id']; ?>')">+</span>
                    <div class="indexright-ul-right-edit hide edit<?php echo $hotProduct['product_id']; ?>" id="edit<?php echo $hotProduct['product_id']; ?>">
                        <span class="indexright-ul-right-minu-yellow" onclick="minu_num('<?php echo $hotProduct['product_id']; ?>')">-</span>
                        <span class="indexright-ul-right-num num<?php echo $hotProduct['product_id']; ?>" id="num<?php echo $hotProduct['product_id']; ?>">0</span>
                        <span class="indexright-ul-right-add-yellow" onclick="add_num('<?php echo $hotProduct['product_id']; ?>')">+</span>
                    </div>
                    <?php } else { ?>
                    <span class="indexright-ul-right-add hide add<?php echo $hotProduct['product_id']; ?>" id="add<?php echo $hotProduct['product_id']; ?>" onclick="javascript:add_num('<?php echo $hotProduct['product_id']; ?>')">+</span>
                    <div class="indexright-ul-right-edit edit<?php echo $hotProduct['product_id']; ?>" id="edit<?php echo $hotProduct['product_id']; ?>">
                        <span class="indexright-ul-right-minu-yellow" onclick="minu_num('<?php echo $hotProduct['product_id']; ?>')">-</span>
                            <span class="indexright-ul-right-num num<?php echo $hotProduct['product_id']; ?>" id="num<?php echo $hotProduct['product_id']; ?>">
                                <?php echo $cart_quantity[$hotProduct['product_id']]['quantity']; ?>
                            </span>
                        <span class="indexright-ul-right-add-yellow" onclick="add_num('<?php echo $hotProduct['product_id']; ?>')">+</span>
                    </div>
                    <?php } ?>
                    <?php } else { ?>
                    <div class="indexright-ul-right-buhuo">补货中</div>
                    <?php } ?>
                </div>
                <input type="hidden" id="goodsnum<?php echo $hotProduct['product_id']; ?>" value="<?php echo $hotProduct['quantity']; ?>" />
                <input type="hidden" id="goodsprice<?php echo $hotProduct['product_id']; ?>" value="<?php echo $hotProduct['price'];?>" />
            </li>
            <?php } ?>
            <?php foreach ($categories as $categorie) { ?>
            <?php foreach ($cate_products[$categorie['category_id']] as $product) { ?>
            <li class="category_<?php echo $categorie['category_id'];?>">
                <img src="http://www.matrojp.com/image/<?php echo $product['image']; ?>" onclick="go_goods_detail('<?php echo $product['product_id'];?>')" />
                <div class="indexright-ul-right">
                    <p class="indexright-ul-right-title" onclick="go_goods_detail('<?php echo $product['product_id'];?>')"><?php echo $product['name']; ?></p>
                    </br>
                    <span class="indexright-ul-right-price">¥<?php echo number_format($product['price'],2); ?><span class="indexright-ul-right-price2"></span></span>
                </div>
                <div class="indexright-ul-right-active">
                    <?php if($product['quantity']!=0) { ?>
                    <?php if ($cart_quantity[$product['product_id']]['quantity'] == 0) { ?>
                    <!--验证该商品购物车是否还有商品-->
                    <span class="indexright-ul-right-add add<?php echo $product['product_id']; ?>" id="add<?php echo $product['product_id']; ?>" onclick="javascript:add_num('<?php echo $product['product_id']; ?>')">+</span>
                    <div class="indexright-ul-right-edit hide edit<?php echo $product['product_id']; ?>" id="edit<?php echo $product['product_id']; ?>">
                        <span class="indexright-ul-right-minu-yellow" onclick="minu_num('<?php echo $product['product_id']; ?>')">-</span>
                        <span class="indexright-ul-right-num num<?php echo $product['product_id']; ?>" id="num<?php echo $product['product_id']; ?>">0</span>
                        <span class="indexright-ul-right-add-yellow" onclick="add_num('<?php echo $product['product_id']; ?>')">+</span>
                    </div>
                    <?php } else { ?>
                    <span class="indexright-ul-right-add hide add<?php echo $product['product_id']; ?>" id="add<?php echo $product['product_id']; ?>" onclick="javascript:add_num('<?php echo $product['product_id']; ?>')">+</span>
                    <div class="indexright-ul-right-edit edit<?php echo $product['product_id']; ?>" id="edit<?php echo $product['product_id']; ?>">
                        <span class="indexright-ul-right-minu-yellow" onclick="minu_num('<?php echo $product['product_id']; ?>')">-</span>
                            <span class="indexright-ul-right-num num<?php echo $product['product_id']; ?>" id="num<?php echo $product['product_id']; ?>">
                                <?php echo $cart_quantity[$product['product_id']]['quantity']; ?>
                            </span>
                        <span class="indexright-ul-right-add-yellow" onclick="add_num('<?php echo $product['product_id']; ?>')">+</span>
                    </div>
                    <?php } ?>
                    <?php } else { ?>
                    <div class="indexright-ul-right-buhuo">补货中</div>
                    <?php } ?>
                </div>
                <input type="hidden" id="goodsnum<?php echo $product['product_id']; ?>" value="<?php echo $product['quantity']; ?>" />
                <input type="hidden" id="goodsprice<?php echo $product['product_id']; ?>" value="<?php echo $product['price'];?>" />
            </li>
            <?php } ?>
            <?php } ?>
        </ul>
    </div>
    <input type="hidden"  id="card_num" value="<?php echo $this->cart->countProducts()?>" />
    <input type="hidden"  id="card_total_price" value="<?php echo $this->cart->getTotal()?>" />

    <input type="hidden"  id="zuizhong" value="<?php echo $this->cart->getTotal()?>" />
</div>
<div class="gotop">
    <img src="wxjp/view/theme/melro/stylesheet/images/totop.png">
</div>
<div class="div-footer">
    <div class="foot-item kefu" onclick="go_kefu();">
        <span class="foot-btn">客服</span>
    </div>
    <div class="foot-item shoucang" onclick="go_wishlist()">
        <span class="foot-btn">收藏</span>
    </div>
    <div class="foot-item add" onclick="javascript:go_cart()">
        <div class="car-logo">
            <span class="car-num"  id = "div-footer-cart-num" >
            <?php if($this->cart->countProducts() != 0) { ?>
                <?php echo $this->cart->countProducts()?>
                <?php } else { ?>
                0
                <?php } ?>
            </span>
            <img src="wxjp/view/theme/melro/stylesheet/images/shopcar.png" alt="" />
        </div>
        购物车
    </div>
    <div class="foot-item tijiao" onclick="submit_order()"> 立即结算</div>
</div>
<div class="div-share hide">
    <img src="wxjp/view/theme/melro/stylesheet/images/guide.png" />
</div>
<style>
    .div-share{
        position: fixed;
        width:100%;
        height:100%;
        z-index: 99999;
        top:0px;
        right:0px;
        text-align: right;
        background-color: rgba(0,0,0,0.2);
    }
</style>
<script>
    $(document).ready(function() {
        $(".hidebtn").click(function(event) {
            var lw = $(".outindexleft").width();
            var $lefobj=$(".outindexleft")
            var lef = parseInt($lefobj.css("left"));
            // $(".btn").toggleClass('btnhide');
            if (lef<0) {
                $lefobj.css({
                    left: 0
                });
                $(".indexright").toggleClass('towidth');
                $(".btnr").toggleClass('btnhide');
                setTimeout(function(){
                    $(".btnl").toggleClass('btnhide');
                },500)
            }else{
                $lefobj.css({
                    left: "-"+lw+"px"
                });
                $(".indexright").toggleClass('towidth');
                $(".btnl").toggleClass('btnhide');
                setTimeout(function(){
                    $(".btnr").toggleClass('btnhide');
                },500)
            }
        });
        function setMainH(){

            var hidebox = $(".hidebox").height();
            var h = $(window).height();
            var headH = $(".indexbanner").height();
            $("body").height(h);
            $(".indexleft,.indexright").height(h - headH - hidebox);
        };
        setMainH();
        // alert("hidebox:" + hidebox + "h:" + h + "headH" + headH + "indexmain" + $(".indexmain").height());
        var $hidebox = $(".hidebox");
        var $scrollE = $(".indexright");
        var $totop = $(".gotop");
        var $head = $(".indexbanner")
        var hideboxH =$(".hidebox").height();
        $(".indexright").scroll(function() {
            var scrollH = $scrollE.scrollTop();
            if (scrollH > 100) {
                $hidebox.slideUp();
                $totop.css({
                    z_index: '50',
                    visibility:"visible"
                });

                $head.addClass('indexbanner-out');
                console.log(hideboxH);
                setMainH();

                // animate();
                // $scrollE.scrollTop(100);

            } else {
                $hidebox.slideDown();
                $totop.css({
                    z_index: '-10',
                    visibility:"hidden"
                });
                $head.removeClass('indexbanner-out');
                setMainH();

                // backstation();
                // $scrollE.scrollTop(100);

            }
            // alert("hi");
        });
        $totop.on('click', function(event) {
            $scrollE.scrollTop(0);
            /* Act on the event */
        });
    });

    $(function() {
        /*引导图*/
        setTimeout(function() {
            $(".div-guide").fadeOut('slow', function() {

            });
        }, 1000);
        var height = $(".indexbanner").height();
        var win_height = $(window).height();

        /*设置默认分类*/
        var index_model = $.cookie('INDEX_MODEL');
        if (index_model != null) {
            show_goods(index_model);
        } else {
            $(".goods_hot").show();
        }
    });

    function toggle_list(event) {
        $(".index-model-list").slideToggle();
        $(event.currentTarget).find(".listtag").toggleClass("icon-arror-up");
    }

    /*显示指定分类下的商品*/
    function changeLogo(){
         <!-- 更换logo -->
         console.log("ok");
         var $imglist = $(".logo-third");
         $imglist.each(function(index){
            $imglist[index].src=editSrc($imglist[index].src);
         });
         var currentimg = $(event.currentTarget).find('.logo-third');
         var currentsrc = currentimg[0].src;
         console.log("1"+"---" + currentsrc);
         var index = currentsrc.lastIndexOf('@.png') || currentsrc.lastIndexOf("_.png");
         var currsrc = currentsrc.slice(0,index)+"_.png";
         console.log(currsrc);
         currentimg[0].src =currsrc;
        <!-- 更换logo===end -->   
    }
    function editSrc(str){
        var pos  = str.lastIndexOf("@.png");
        var pos2 = str.lastIndexOf("_.png"); 
                if(pos2||pos){
                var str1 = str.slice(0,pos);
                var str2 = "@.png";
                var newstr2= str1+str2;
                console.log('str1'+"***"+str1+"@@@@@@"+"str2"+"***"+str2);
                return newstr2;
            }
    }
    function show_goods(mid) {
    <?php foreach ($categories as $categorie) { ?>
            $(".meiluohot").removeClass("meiluohot_active");
            $(".category_" + <?php echo $categorie['category_id'];?>).hide();
            $(".hotProduct").hide();
        <?php } ?>
        if(mid != -1){
            $("#index_model"+ mid).addClass("meiluohot_active");
            $(".category_"+ mid).show();
        }else{
            $(".goods_hot").addClass("meiluohot_active");
            $(".hotProduct").show();
        }
        $.cookie('INDEX_MODEL', mid,{ expires: 7 });

    }
    /*进入商品详情页*/
    function go_goods_detail(id) {
        location.href="<?php echo $this->url->link('product/product&product_id='); ?>" + id;
    }
</script>
<script>
    var card_num = 0;
    var card_price = 0;
    function add_num(id){
        card_num =  parseFloat($("#card_num").val());
        card_price =  parseFloat($("#card_total_price").val());
        var goods_num = parseFloat($("#goodsnum"+id).val());
        var num = parseFloat($("#num"+id).html());
        if(num<goods_num){
            num++;
            card_num++;
            var price = $("#goodsprice"+id).val();
            card_price = parseFloat(card_price)+parseFloat(price);
            card_price = card_price.toFixed(2);
            $("#card_num").val(card_num);
            $("#card_total_price").val(card_price);
            $("#div-footer-cart-num").html(card_num);
            $("#div-footer-price-num").html("¥"+card_price);
            $("#zuizhong").val(card_price);

            $(".num"+id).each(function(){
                $(this).html(num);
            });
            $(".add"+id).each(function(){
                $(this).hide();
            });
            $(".edit"+id).each(function(){
                $(this).show();
            });

//            $("#num"+id).html(num);
//            $("#add"+id).hide();
//            $("#edit"+id).show();

            $(".div-footer").show();
//            var goods_num = $("#"+id).val();
//            $("#"+id).val(parseFloat(goods_num)+1);
            plusToCart(id,num);
        }else{
            $.showdiv.showAlert('库存不足!');
        }
    }
    /*点击减号*/
    function minu_num(id){
        card_num =  parseFloat($("#card_num").val());
        card_price =  parseFloat($("#card_total_price").val());
        var num = parseFloat($("#num"+id).html());
        if(num>0 && card_price > 0){
            if (num > 0) num--;
            if (card_num > 0) card_num--;
            var price = $("#goodsprice"+id).val();
            if(num  ==  0){
                $(".add"+id).each(function(){
                    $(this).show();
                });
                $(".edit"+id).each(function(){
                    $(this).hide();
                });
            }else{
                $(".add"+id).each(function(){
                    $(this).hide();
                });
                $(".edit"+id).each(function(){
                    $(this).show();
                });
            }
            card_price = parseFloat(card_price)-parseFloat(price);
            card_price = card_price.toFixed(2);
            $("#card_num").val(card_num);
            $("#card_total_price").val(card_price);
            $("#div-footer-cart-num").html(card_num);
            $("#div-footer-price-num").html("¥"+card_price);
            $("#zuizhong").val(card_price);
            $(".num"+id).each(function(){
                $(this).html(num);
            });
//            var goods_num = $("#goodsnum"+id).val();
//            if(goods_num>0){
//                $("#goodsnum"+id).val(parseFloat(goods_num)-1);
//            }
            if (num == 0){
                delete_car(id);
            }else{
                minusToCart(id,num);
            }
        }
    }
    function plusToCart(product_id,card_num) {
        $.ajax({
            type:'POST',
            dataType: 'json',
            url:'index.php?route=checkout/cart/updateQuantity',
            data:{
                product_id:product_id,
                quantity:card_num
            },
            success: function(json) {
//                location.reload();
            }
        });
    }
    function minusToCart(product_id,card_num) {
        jQuery.ajax({
            type:'POST',
            dataType:'json',
            url:'index.php?route=checkout/cart/updateQuantity',
            data:{
                product_id:product_id,
                quantity:card_num
            },
            success: function(json) {
//                location.reload();
            }
        });
    }

    function delete_car(id){
        var product_id = id + ':test';
        var card_num = parseFloat($("#card_num").val());
        $(this).remove();
        jQuery.ajax({
            type:'POST',
            dataType:'json',
            url:'index.php?route=checkout/cart/removeQuantity',
            data:{
                product_id:product_id
            },
            success: function(data) {
                var num = parseFloat($("#num"+id).html());
                var price = $("#goodsprice"+id).val();
                var card_total_price = $("#card_total_price").val();
                var all_delete_price = parseFloat(num)*parseFloat(price);
                card_num = card_num-parseFloat(num);
                card_price = card_total_price-parseFloat(all_delete_price);
                $("#div-footer-cart-num").html(card_num);
                $("#div-footer-price-num").html("¥"+card_price);
                $("#zuizhong").val(card_price);
                $("#delete"+id).remove();
            }
        });
    }

    /*进入购物车*/
    function go_cart(){
        location.href="<?php echo $this->url->link('checkout/cart'); ?>";
    }
    /*提交订单*/
    function submit_order(){
        if($("#card_num").val() <= 0){
            alert("请选择商品!");
        }else if($("#zuizhong").val() < 260 ){
            alert("您的订单不满260,再去逛逛吧！");
        }else{
            location.href="<?php echo $this->url->link('checkout/checkout'); ?>";
        }
    }
    /*进入收藏夹*/
    function go_wishlist(){
        location.href="<?php echo $this->url->link('account/wishlist'); ?>";
    }

    function go_kefu(){
        location.href="index.php?route=common/home/kefu";
    }

</script>
<link href="wxjp/view/theme/melro/stylesheet/css/index_foot.css" type="text/css" rel="stylesheet" />
<script src="wxjp/view/theme/melro/stylesheet/js/jquery.cookie.js" type="text/javascript"></script>
<script type="text/javascript" src="wxjp/view/theme/melro/stylesheet/js/showdiv.js"></script>
<script type="text/javascript" src="view/theme/melro/stylesheet/js/showdiv.js"></script>
</body>
</html>


