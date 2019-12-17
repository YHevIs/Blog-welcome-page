class Web {
    constructor() {
            this.abt = false;
            this.goNav = false;
            this.init();
        }
        //初始化
    init() {
            this.consoleInit();
            this.setEvent();


            this.timeAxis(() => {
                $('#body').animate({
                    width: '98%',
                })
            }, 200)
            $('.logo').show();
            this.timeAxis(() => {
                $('header').animate({
                    top: '0',
                    backgroundColor: 'rgba(0,0,0,.0)'
                }, 800)
            }, 300)
            $('.logo-sm').addClass('degAnim');
            this.timeAxis(() => {
                $('.logo-btm').animate({
                    width: '70%',
                }, 3000)
                $('.nav').animate({
                    opacity: '1'
                }, 200)
                $('.nav > ul li').addClass('btnshadow')
            }, 310)
            $('.navMain').hide();

        }
        //事件
    setEvent() {
        $('#goHome').click(() => {
            $('#goHome span').html('请稍等...')
            $(location).attr('href', '/index.php');
        })
        $('#goNav').click(() => {
            if ($('#goNav span').html() == '导航') {
                this.goNav = true;
                $('.logo-sm').removeClass('degAnim');
                $('.navMain').show();
                $('.logo-btm').animate({
                    width: '0',
                }, 3000)

                $('#goNav span').html('返回')
                $('body').addClass('goNav');
                $('.navMain').animate({
                    width: '40%',
                    opacity: '1',
                    marginLeft: '10%',
                    padding: '6% 3% 0 '
                })
                $('#body').addClass('body-nav');
                $('#body,.navMain').addClass('navBox');
                $('.navMain').addClass('navMain-nav');
                $('#body').animate({
                    width: '40%',
                    marginRight: '10%'
                })
                $('.nav>ul li').animate({
                    margin: '10px'
                })
            } else {
                this.goNav = false;
                $('.logo-sm').addClass('degAnim');
                $('.logo-btm').animate({
                    width: '70%',
                }, 3000)
                $('#goNav span').html('导航')
                $('body').removeClass('goNav');
                $('.navMain').animate({
                    width: '0',
                    opacity: '0',
                    marginLeft: '0',
                    padding: '0'
                }, 200)
                $('#body').removeClass('body-nav');
                $('#body,.navMain').removeClass('navBox');
                $('.navMain').removeClass('navMain-nav');
                $('#body').animate({
                    width: '98%',
                    marginRight: '0'
                })
                $('.nav>ul li').animate({
                    margin: '0 30%'
                })
            }

        })

        $('#notice').click(() => {
            alert("如果是手机端则无法查看导航栏目，该页面处于开发中（电脑端则可以查看）；您可以点击进入按钮直接进入博客")
        })
        $('.abt').click(() => {
            if (this.goNav == true) {
                this.goNav == false;
                $('#goNav').click();
            }
            switch (this.abt) {
                case false:
                    $('body').addClass('abtTo');
                    $('#abtMain').show();
                    this.autotype($('.abtCont'));
                    $('#body').hide();
                    this.abt = true;
                    break;
                case true:
                    $('body').removeClass('abtTo');
                    $('.abtZ').hide();
                    $('#abtMain').hide();
                    $('#body').show();
                    this.abt = false;
                    break;

            }
        })
    }

    //console
    consoleInit() {
            console.log("这份前端页面会在github上开源，请扒站大佬手下留情Orz");
        }
        //延时器
    timeAxis(fun, time) {
        window.setTimeout(() => {
            fun();
        }, time)
    }


    //打字机
    autotype(e) {
        var $text = $(e);
        var str = $text.html(); //返回被选 元素的内容
        var index = 0;
        var x = $text.html('');
        //$text.html()和$(this).html('')有区别
        var timer = setInterval(function() {
                //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
                var current = str.substr(index, 1);
                if (current == '<') {
                    //indexOf() 方法返回">"在字符串中首次出现的位置。
                    index = str.indexOf('>', index) + 1;
                } else {
                    index++;
                }
                //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
                //substring() 方法用于提取字符串中介于两个指定下标之间的字符
                $text.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                if (index >= str.length) {
                    $('.abt').show();
                    clearInterval(timer);
                }
            },
            23);
    };

}

$(() => {
    window.web = new Web();
})
