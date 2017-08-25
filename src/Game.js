/**
 * 游戏对象
 */
var Game = (function () {
    var Brower = Laya.Browser;// 浏览器对象
    var Stage = Laya.Stage;  // 舞台对象
    var WebGL = Laya.WebGL;

    function Game() {
        Laya.init(750, 1206, WebGL);
        Laya.stage.scaleMode = "exactfit";// 屏幕适配
        Laya.stage.screenMode = "vertical";// 屏幕适配
        Laya.loader.load("res/atlas/investMagnate.json", Laya.Handler.create(this, this.init), null, Laya.Loader.ATLAS);
    }

    // 游戏初始化
    Game.prototype.init = function () {
        // 请求接口
        this.GameView = new GameView();
        this.GameView.init(10, 100000, [100, 200, 300]);
        Laya.stage.addChild(this.GameView);
        this.textArr = ["大大大大", "小小小小", "大大大大", "小小小小", "大大大大", "小小小小", "大大大大", "小小小小"]
        this.sliderTextLen = this.textArr.length; // 轮播条数
        this.createSlide();
        Laya.timer.loop(3000, this, this.slider); // 循环轮播监听
    }
    // 创建panel
    Game.prototype.createSlide = function () {
        for (var i = 0; i < this.sliderTextLen; i++) {
            $("#slideList").append("<li>" + this.textArr[i] + "</li>");
        }
        this.sliderHeight = $("#slideList").find("li:first").height();
    }
    // 做轮播循环
    Game.prototype.slider = function () {
        $("#slideList").animate({
            marginTop: - this.sliderHeight
        }, 2000, "ease", function () {
            $("#slideList").css({
                marginTop: 0
            }).find("li:first").appendTo($("#slideList"));
        })
    }




    return Game;
}());
var InvestMagnate = new Game();