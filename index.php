<?php
$message = '';
$t=time();
if(isset($_POST['name'])) {
    $arr = array(
        'properties' => array(
            array(
                'property' => 'firstname',
                'value' => $_POST['name']
            ),
            array(
                'property' => 'phone',
                'value' => $_POST['phone']
            ),
            array(
                'property' => 'address',
                'value' => $_POST['address']
            ),
            array(
                'property' => 'quantity',
                'value' => $_POST['quantity']
            ),
            array(
                'property' => 'hs_lead_status',
                'value' => "NEW"
            ),
            array(
                'property' => 'ten_san_pham',
                'value' => "Upsize"
            )
        )
    );

    $post_json = json_encode($arr);
    $endpoint = "https://api.hubapi.com/contacts/v1/contact/?hapikey=e988575f-7359-4f0a-a128-4a9e0b9c3fa4";
    $ch = @curl_init();
    @curl_setopt($ch, CURLOPT_POST, true);
    @curl_setopt($ch, CURLOPT_POSTFIELDS, $post_json);
    @curl_setopt($ch, CURLOPT_URL, $endpoint);
    @curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    @curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = @curl_exec($ch);
    $status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_errors = curl_error($ch);
    @curl_close($ch);
    if ($status_code == 200) {
        header('Location: thank.php');
        die();
    }else{
        $message = 'Lỗi hệ thống';
    }
}
?>

<!DOCTYPE html>
<!-- saved from url=(0020)http://titangel.com/ -->
<html lang="vi">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">

    <!-- base href="http://bustcreamspa.net/dis/" -->

    <title>Kem upsize giúp nở ngực, nâng ngực</title>

    <link rel="shortcut icon" type="image/x-icon" href="./index_files/favicon.ico">
    <link rel="stylesheet" href="./index_files/style.css">

    <!--<script src="./index_files/jquery.min.js"></script>-->
    <script src="./index_files/jquery.js"></script>
    <script>window.jQuery || document.write('<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js"><\/script>')</script>
    <script src="./index_files/js.js"></script>
    <script>window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>')</script>
    <script>window.jQuery || document.write('<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js"><\/script>')</script>

    <!--my_responsive-->
    <link rel="stylesheet" href="my_responsive/assets/bootstrap/css/bootstrap.min.css">
    <script src="my_responsive/assets/jquery.min.js"></script>
    <script src="my_responsive/assets/bootstrap/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="my_responsive/css/config.css">
    <link rel="stylesheet" href="my_responsive/css/init.css">
    <link rel="stylesheet" href="my_responsive/css/layout.css">
    <link rel="stylesheet" href="my_responsive/css/style.css">
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-98599694-1', 'auto');
        ga('send', 'pageview');

    </script>

</head>

<body>
<!--1.active-->
<!--1.1.active-->
<header>

    <!--phone-menu-->
    <!--newMenu-->
    <div id="newMenu">
        <div class="coreMenu">
            <ul>
                <li>
                    <a href="#info">Upsize?</a>
                </li>

                <li><a href="#thanhphan">Thành phần</a></li>
                <li><a href="#effetcs">Cách dùng</a></li>
                <li><a href="#spec-tell">Ý Kiến Chuyên Gia</a></li>
                <li>
                    <a href="#form">Đặt Hàng</a>
                </li>
            </ul>
            <!--<div id ="__ami_visual_menu"></div>-->
        </div>
    </div>
    <div class="container">
        <!--1.1.1.header-content-->
        <div class="header-content">
            <div id="nav_for_phone">
                <div class="logo_text">
                    <a href="http://upsizechinhhang.net/"><p>upsize</p></a>
                </div>
                <!--top-menu-->
                <div id="__ami_btnOpen">
                            <span>
                                &#9776;
                            </span>
                </div>
            </div>


            <!--top-menu-->
            <nav id="top-menu">
                <div class="logo_text">
                    <a href="index.html"><p>upsize</p></a>
                </div>
                <ul>
                    <!--<li><a href="#" rel="info"><span>Trang Chủ</span></a></li>-->
                    <li><a href="#info" rel="info"><span>Upsize?</span></a></li>
                    <li><a href="#thanhphan" rel="thanhphan"><span>Thành Phần</span></a></li>
                    <li><a href="#effetcs" rel="effetcs"><span>Cách dùng</span></a></li>
                    <li><a href="#spec-tell" rel="spec-tell"><span>Ý Kiến Chuyên Gia</span></a></li>

                    <li><a href="#form" data-href="#my_btn-order" rel="form"><span>Đặt Hàng</span></a></li>
                </ul>
            </nav>


        </div>

    </div>
    <!--1.1.2.shadow-->
    <div class="shadow"></div>

</header>

<!--2.wrapper-->
<section id="wrapper">
    <!--2.1.info-->
    <section id="info">
        <!--info-content-->
        <div class="info-content">
            <div class="container">
                <!--info-content-body-->
                <div class="info-content-body">
                    <!--row1-->
                    <div class="row">
                        <!--left-->
                        <div class="left col-lg-4 col-md-4 col-sm-4">
                            <div class="__ami_show">
                                <img src="my_responsive/img/2.1.info/women.png" alt="women_model"/>
                            </div>

                        </div>
                        <!--center-->
                        <div class="center col-lg-4 col-md-4 col-sm-4">
                            <div class="info-block">
                                <hr>
                                <h1 class="p1_label">Upsize</h1>
                                <img src="my_responsive/img/2.1.info/img_hoavan_line.png" alt="hoavan"/>
                                <h3>Chăm sóc 1 lần và mãi mãi</h3>

                                <p>Hiệu quả an toàn hơn cả đi thẩm mỹ viện</p>
                                <ul class="info-lists">
                                    <li><img src="./index_files/list-1.png" alt=""> <span>Ngực sẽ to ra và được nâng lên tự nhiên*</span></li>
                                    <li><img src="./index_files/list-2.png" alt=""> <span>Cải thiện độ đàn hồi và săn chắc*</span></li>
                                    <li><img src="./index_files/list-3.png" alt=""> <span>Thành phần đến từ thiên nhiên</span></li>
                                    <li><img src="./index_files/list-4.png" alt=""> <span>Đa số phụ nữ thấy hiệu quả sau khi dùng</span></li>
                                </ul>

                            </div>
                        </div>
                        <!--right-->
                        <div class="right col-lg-4 col-md-4 col-sm-4">
                            <div class="__ami_wrap_right">
                                <div class="flag">
                                    <span>100%</span>

                                    <p>Chính hãng</p>
                                </div>
                                <div class="_image_right_info_content">
                                    <img src="./index_files/7.png" alt="" class="info_pack">
                                </div>
                            </div>

                        </div>

                    </div>
                    <!--row2-->

                    <div class="__ami_middle-menu">
                        <div class="middle-menu">
                            <div class="row">
                                <!--1-->
                                <div class="col-lg-2 col-md-2 col-sm-2">
                                    <div class="__ami_borderBg sale_group">
                                        <div class="only-today">Ngay trong hôm nay</div>

                                    </div>

                                </div>

                                <!--2-->
                                <div class="col-lg-3 col-md-3 col-sm-3">
                                    <div class="sale_group">
                                        <div class="__ami_fix-price  spec-price">Giá đặc biệt - <span class="j_new_price js_new_price_curs">750.000 Đ</span>
                                        </div>
                                    </div>

                                </div>

                                <!--3-->
                                <div class="col-lg-3 col-md-3 col-sm-3">
                                    <div class="sale_group">
                                        <div class="__ami_fix-price  old-price">Giá thị trường <span class="line j_old_price js_old_price_curs">1.500.000 Đ</span></div>
                                    </div>
                                </div>
                                <!--4-->
                                <div class="col-lg-1 col-md-2 col-sm-2">
                                    <div class="sale_group">
                                        <div class="diskount">
                                            <div>50%</div>
                                            <div>OFF</div>
                                        </div>
                                    </div>
                                </div>

                                <!--5-->
                                <div class="col-lg-3 col-md-2 col-sm-2">
                                    <div class="sale_group">
                                        <a data-href="#form" class="btn-order">Đặt Hàng</a>
                                        <div id="my_btn-order"></div>
                                    </div>

                                </div>

                                <div class="clear"></div>
                                <!--</div>-->
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!--2.2.result-->
    <section id="result">
        <div class="red-logo"><p>Upsize</p></div>
        <div class="container">
            <div class="result-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <h1>Upsize - Kết quả đáng ngạc nhiên!</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="result-lists">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="left_result-list">
                                <div class="result-block"><span>Cực kỳ an toàn với thành phần tự nhiên</span></div>
                                <div class="result-block"><span>Vòng ngực sẽ nở nang thêm nhiều cỡ áo</span></div>
                                <div class="result-block"><span>Làm chậm quá trình lão hoá</span></div>
                                <div class="result-block"><span>Mua ngay chiếc áo với kiểu khoét sâu</span></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="left_result-list">
                                <div class="result-block"><span>Phù hợp với mọi lứa tuổi</span></div>

                                <div class="result-block"><span>Khuôn ngực nở nang, tròn đầy săn chắc</span></div>

                                <div class="result-block"><span>Làm biến mất các vết rạn da</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"><center><span style="color: red;">*</span> lưu ý: Công dụng của sản phẩm có thể thay đổi tùy theo cơ địa và thể trạng của từng người</center></div>
            </div>
        </div>
    </section>

    <!--2.3.thanhphan-->
    <section id="thanhphan">
        <div class="container">
            <div class="table-thanhphan">
                <div class="table-content">
                    <h1>Thành phần trong kem upsize</h1>
                    <div class="table-shows">
                        <!--row1-->
                        <div class="row">
                            <!--1-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/tinhdauhoahong.jpg" alt="">
                                    </div>
                                    <h2>Tinh dầu hoa hồng:</h2> Thành phần này tác động lên làn da của bạn, làm cho nó dẻo dai và căng. Đồng thời nó có tác dụng bảo vệ, ngăn ngừa sự xuất hiện của các vết rạn da.
                                </div>
                            </div>
                            <!--2-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/formula.png" alt="">
                                    </div>
                                    <h2>Deoksimiroestrol:</h2> Thành phần này nhằm mục đích làm chậm quá trình lão hóa, kích thích sự phát triển của Ngực và trẻ hóa.
                                </div>
                            </div>
                            <!--3-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/pueraria-mirifica-root.jpg" alt="">
                                    </div>
                                    <h2>Gốc của Pueraria Mirifica:</h2> Thành phần này cung cấp các chất dinh dưỡng cần thiết của các tế bào da và mô tuyến vú. Hơn nữa, nhà máy này chặn những tác động tiêu cực của các yếu tố bên ngoài gây ra lão hóa sớm của da.
                                </div>
                            </div>
                        </div>
                        <!--row2-->
                        <div class="row">
                            <!--4-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/asfodelovidnoy.jpeg" alt="">
                                    </div>
                                    <h2>Thân rễ trích Anemarrhenae asfodelovidnoy:</h2> Yếu tố cấu thành này của kem upsize cải thiện lưu thông máu trong ngực, ngăn ngừa sự hình thành các cục máu đông và tắc nghẽn mạch. Nó cũng là một chất chống oxy hóa chống lại Ung thư.
                                </div>
                            </div>
                            <!--5-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/Macadamia.jpeg" alt="">
                                    </div>

                                    <h2>Dầu Macadamia:</h2> Các chế phẩm có axit palmitic không bão hòa đơn, mà hiện diện trong da của con người. Dầu chăm sóc ngực tinh tế, tích cực giữ ẩm, nuôi dưỡng, làm mềm và cải thiện vi tuần hoàn.
                                </div>
                            </div>
                            <!--6-->
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="table-show_box">
                                    <div class="image_table-show_box">
                                        <img src="./index_files/Butter.jpeg" alt="">
                                    </div>

                                    <h2>Shea Butter:</h2> Tích cực làm mềm và yếu tố bảo vệ. karisteroly gồm có tác dụng tái tạo và kích thích sự tổng hợp collagen. Dầu giúp làm chậm quá trình lão hóa ở da mỏng manh của sự phá sản, bảo vệ nó khỏi bị khô và mất nước.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--2.4.tacdong-->
    <section id="tacdong">
        <div class="container">
            <div class="table-thanhphan">
                <div class="table-content">
                    <h1>CÁCH TÁC ĐỘNG ĐẾN VÒNG 1 CỦA UPSIZE:</h1>
                    <div class="nguc">
                        <div class="row">
                            <div class="image-nguc col-lg-5 col-md-5 col-sm-5">
                                <img src="./index_files/cautaonguupsize.jpg" alt="cau tao cua vu" width="400">
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <p> Ngực của phụ nữ được bao bọc bởi lớp biểu bì da dày.</p>
                                <p>Mỗi bên ngực gồm 1 núm vú có quầng vú bao quanh có màu từ hồng nhạt cho tới màu nâu sẫm (thường là lúc bé núm vú màu hồng nhạt khi lớn núm vú thay đổi màu sậm dần), không có lông.</p>
                                <p> Phần lớn của bộ Ngực được bao bọc bởi lớp mô mỡ dày, người nào ngực càng to thì lớp mỡ dưới ngực càng dày, điều này giúp cho ngực phụ nữ được tròn trịa, mềm mại quyến rũ hơn.</p>
                                <p> Vậy vai trò của kem Upsize ở đây là gì?</p>
                                <p> Kem Upsize giúp phát triển mô mỡ, tăng kích thước vòng một lên đáng kể. Ngoài ra Upsize còn kích thích quá trình sản sinh estrogen là 1 trong 2 thành phần nội tiết tố nữ sản sinh hoc-mon nữ giới khiến cho các nang ngực làm tròn trách nhiệm của mình, to ra và giúp khuôn trăng của chúng ta bầu bĩnh hơn, gợi cảm và cải thiện sắc tố da ở bầu ngực.</p>
                                <p><span style="color: red;">*</span> lưu ý: Công dụng của sản phẩm có thể thay đổi tùy theo cơ địa và thể trạng của từng người</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    </section>

    <!--2.5.effetcs-->
    <section id="effetcs">
        <div class="container">
            <div class="table">
                <div class="table-content">
                    <h1>UPSIZE-Chiếc áo ngực vô hình</h1>

                    <p>5 phút trong một liệu trình để giữ vẻ đẹp trường tồn!</p>

                    <div class="table-shows">
                        <div class="row">
                            <!--1-->
                            <div class="col-lg-3 co-md-3 col-sm-3">
                                <div class="show-block">
                                    <img src="./index_files/show-1.png" alt="">

                                    <h3>Bước 1</h3>

                                    <p>Thoa kem lên vùng da đã vệ sinh sạch sẽ. Đầu tiên, mát xa ngực phải trong vòng 5-10 phút cho đến khi kem thẩm thấu hoàn toàn. Lặp lại vài lần.</p>
                                </div>
                            </div>
                            <!--2-->
                            <div class="col-lg-3 co-md-3 col-sm-3">
                                <div class="show-block">
                                    <img src="./index_files/show-2.png" alt="">

                                    <h3>Bước 2</h3>

                                    <p>Tiếp đến mát xa ngực bên trái. Sau đó đợi cho đến khi kem khô hoàn toàn.

                                    </p>
                                </div>
                            </div>
                            <!--3-->
                            <div class="col-lg-3 co-md-3 col-sm-3">
                                <div class="show-block">
                                    <img src="./index_files/show-3.png" alt="">

                                    <h3>Bước 3</h3>

                                    <p>Cuối cùng là mát xa cả 2 bên ngực với động tác chuyển động theo hình xoắn ốc với chiều từ dưới lên trên và kết thúc ở nơi bắt đầu.

                                        .</p>
                                </div>
                            </div>
                            <!--4-->
                            <div class="col-lg-3 co-md-3 col-sm-3">
                                <div class="show-block">
                                    <img src="./index_files/show-4.png" alt="">

                                    <h3>Bước 4</h3>

                                    <p>Thoa 2 lần/ngày: ban sáng và ban tối.

                                        .</p>
                                </div>
                            </div>
                        </div>
                        <div class="clear">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--2.6.spec-tell-->
    <section id="spec-tell">
        <div class="container">
            <div class="row">
                <!--spec-left-->
                <div class="col-lg-4 col-md-3 col-sm-3">
                    <div class="spec-left">
                        <img src="./index_files/woman.png" alt="">

                        <div class="spec-name">
                            <div>
                                <span>Larisa</span><br>
                                Bác sĩ thẩm mỹ
                            </div>
                        </div>
                    </div>
                </div>
                <!--spec-center-->
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="spec-center">
                        <h1>Ý KIẾN CHUYÊN GIA VỀ UPSIZE</h1>

                        <p><strong>Rất nhiều chị em phụ nữ ngày nay đang ao ước có được vòng 1 hoàn hảo, ai cũng muốn sở hữu khuôn ngực căng tròn và chẳng lấy gì làm lạ khi đây là bộ phận luôn thu hút ánh nhìn của cánh đàn ông. </strong></p>

                        <p>Nếu bạn dùng kem upsize hàng ngày, kích cỡ vòng 1 sẽ nở nang hơn trong vòng từ 3-4 tuần, khuôn ngực trở lên căng tròn và săn chắc, làn da đàn hồi và mềm mịn hơn.</p>

                        <p>Sản phẩm trải qua những thử nghiệm lâm sàng được tiến hành bởi các chuyên gia của Tổ chức Y tế Thế giới tại 14 quốc gia trên toàn thế giới. Hàng nghìn phụ nữ đã thừa nhận tính hiệu quả của kem nâng ngực upsize này.</p>
                    </div>
                </div>
                <!--spec-right-->
                <div class="col-lg-4 col-md-3 col-sm-3">
                    <div class="spec-right">
                        <img src="./index_files/formula.png" alt="">

                        <div class="formula-block">
                            <span>Deoxymiroestrol</span> Có tác dụng trẻ hoá, đồng thời thúc đẩy sự nở nang của vòng 1;
                        </div>
                        <div class="formula-block">
                            <span>Rễ cây Pueraria Mirifica</span> Dưỡng ẩm và bảo vệ da;
                        </div>
                        <div class="formula-block">
                            <span>Dầu tinh chất hoa hồng </span> Tăng khả năng đàn hồi, loại bỏ vết rạn da đồng thời ngăn sự xuất hiện lại.
                        </div>
                    </div>
                </div>
            </div>

            <div class="clear"></div>

            <div class="sertificates">
                <div class="sertificates-block">
                    <div class="row">
                        <div class="center-sertificates-block col-sm-3 col-xs-6"><img src="./index_files/sert-1.png" alt=""></div>
                        <div class="center-sertificates-block col-sm-3 col-xs-6"> <img src="./index_files/sert-2.png" alt=""></div>
                        <div class="center-sertificates-block col-sm-3 col-xs-6"><img src="./index_files/sert-3.png" alt=""></div>
                        <div class="center-sertificates-block col-sm-3 col-xs-6"><img src="./index_files/sert-4.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--2.7.comments-->
    <section id="comments">
        <div class="container">
            <h1>Kem nâng, nở Ngực Upsize</h1>

            <!--row1-->
            <div class="comment">
                <div class="row">
                    <!--left-->
                    <div class="col-lg-3 col-md-3 col-sm-2">
                        <div class="comment-image">
                            <img src="./index_files/comment-1.png" alt="">
                            <span>Татьяна, 42 года</span>
                        </div>
                    </div>

                    <!--right-->
                    <div class="col-lg-9 col-md-9 col-sm-10">
                        <div class="comment-content">
                            <p>
                                Gần đây tôi bắt đầu cảm nhận được những thay đổi của bộ ngực, làn da trở lên nhăn nheo và mất đi tính đàn hồi vốn có theo thời gian. Những bộ cánh xẻ ngực giờ không còn phù hợp để trưng diện, và tôi cũng chẳng thiết tha để mua sắm chúng nữa. Nhưng tôi đã tìm thấy cứu cánh của đời mình nhờ loại kem tuyệt vời này! Kết quả làm tôi hết sức ngạc nhiên! Trong vòng hai tuần làn da nhăn nheo và chảy xệ nơi vùng ngực đã hoàn toàn biến mất đồng thời kết cấu ngực trở lên săn chắc hơn. Một tháng sau đó, tôi bị dội bom bởi vô số những câu hỏi về nơi mình đã đi làm phẫu thuật để có được kết quả mỹ mãn như vậy – và chẳng ai tin rằng tôi chỉ dùng loại kem hết sức thông thường, thứ cứu cánh của đời tôi.
                            </p>


                        </div>
                    </div>
                </div>


                <div class="clear"></div>
            </div>

            <!--row2-->
            <div class="comment">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-2">
                        <div class="comment-image">
                            <img src="./index_files/comment-2.png" alt="">
                            <span>Елизавета, 24 года</span>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-10">
                        <div class="comment-content">
                            <p>Những vấn đề về hình dáng và độ săn chắc của vòng một bắt đầu xảy đến với mình ngay sau khi mình sút đi 21 kg. Đó thực sự là một cú sốc lớn! Vòng 1 trở lên chảy xệ và mất đi tính thẩm mỹ vốn có! Mình bắt đầu mua áo nâng chỉnh ngực để khắc phục vấn đề này. Cảm xúc thật kinh khủng, tinh thần xuống cấp nghiêm trọng. Vòng 1 như kiểu gái quá lứa dù mới bước sang tuổi 24! Rồi mẹ mình tặng một hộp kem bôi ngực nhân ngày sinh nhật. Ban đầu mình cảm thấy tự ái khi nhận một món quà như vậy, nhưng giờ đây mình thấy biết ơn bà rất nhiều! Trong vòng một tháng, vòng 1 như được tái sinh hoàn toàn, cảm giác như đang sở hữu bộ ngực của một nàng người mẫu trên tạp chí nào đó vậy! Cảm giác về bộ ngực hoàn hảo một cách hết sức tự nhiên!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </section>

    <!--2.10.form-->
    <section id="form">
        <div class="container">
            <div class="form-content" id="form-content">
                <div class="form-container">
                    <div class="row">
                        <!--left-->
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <div class="form-block">
                                <form class="form" id="order_form" name="email-form" data-name="Email Form" method="POST" action="index.php" enctype="multipart/form-data">
                                    <h1>Thông tin khách hàng</h1>
                                    <div><label for="fio">Họ và tên <span style="color: red;">*</span></label></div>
                                    <input id="fio" name="name" class="input_form" type="text" value="" oninvalid="setCustomValidity('Họ và tên không để trống')" oninput="setCustomValidity('')">

                                    <div><label for="address">Địa chỉ của bạn <span style="color: red;">*</span></label></div>
                                    <input id="address" name="address" class="input_form" type="text" value="" required=""  oninvalid="setCustomValidity('Địa chỉ không để trống')" oninput="setCustomValidity('')">

                                    <div><label for="phone">Điện Thoại <span style="color: red;">*</span></label></div>
                                    <input id="phone" name="phone" class="phone_input input_form only_number" type="text" value="" required="" pattern="^[0-9]{10,12}$" oninvalid="setCustomValidity('Số điện thoại không đúng')" oninput="setCustomValidity('')">

                                    <div><label for="quantity">Số lượng <span style="color: red;">*</span></label></div>
                                    <select name="quantity" id="quantity" style="height:35px; width: 100%; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 1px solid rgb(136, 136, 136); border-radius: 5px;">
                                        <option value="1">
                                            1 Tuýp
                                        </option>
                                        <option value="2">
                                            2 Tuýp
                                        </option>
                                        <option value="3">
                                            3 Tuýp
                                        </option>
                                        <option value="4">
                                            4 Tuýp
                                        </option>
                                        <option value="5">
                                            5 Tuýp
                                        </option>
                                        <option value="6">
                                            Mua sỉ
                                        </option>
                                    </select>

                                    <p style="margin-top:10px;margin-bottom:10px; font-size:20px;">Hotline: <strong>0979617634</strong></p>

                                    <input value="Đặt Hàng Ngay" name="submit" class="js_submit" type="submit">
                                </form>
                            </div>
                        </div>
                        <!--center-->
                        <div class="col-lg-2 col-md-2 col-sm-2">
                            <div class="image_center_form-container">
                                <img src="my_responsive/img/2.10.form/cream.png" alt="cream"/>
                            </div>
                        </div>
                        <!--right-->
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <div class="form-info">
                                <h2>- Chỉ trong hôm nay! -</h2>

                                <h1>Giá đặt biệt nhất từ trước tới giờ</h1>

                                <div class="icon-beg j_new_price js_new_price_curs">750.000 Đ</div>
                                <div class="form-older-price">Giá thị trường <span class="j_old_price js_old_price_curs">1.500.000 Đ</span></div>
                                <div class="finish-discount">Nhanh tay số lượng có hạn</div>
                                <div class="wrap-timer">
                                    <div class="timer">
                                        <div class="minutes">
                                            <div class="minute_1"><span>13</span></div>
                                            <div class="clear"></div>
                                            <div class="timer-info">Phút</div>
                                        </div>
                                        <div class="zap">
                                            <span>,</span>
                                        </div>
                                        <div class="seconds">
                                            <div class="seconde_1"><span>41</span></div>
                                            <div class="clear"></div>
                                            <div class="timer-info">Giây</div>
                                        </div>
                                        <img src="./index_files/clock.png" class="form-image" alt="">

                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div class="clear"></div>

                </div>
            </div>

            <div id="__ami_hidden_default">
                <img src="my_responsive/img/2.10.form/cream.png" alt="cream"/>
            </div>
        </div>
    </section>
</section>


<script src="my_responsive/js/script.js"></script>
</body>

</html>
