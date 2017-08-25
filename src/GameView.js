/**
 * Created by gkfonline on 2017/6/1.
 */
/**
 * 游戏的ui继承类
 */

var GameView = (function (_super) {

    function GameView() {
        GameView.super(this);
    }

    // 注册一个类
    Laya.class(GameView, "GameView", _super);
    GameView.prototype.init = function (dayNum, userBeans, arr) {
        // 金豆类型
        this.betNumType = 100;
        // 用户金豆数
        this.userGoldBean = userBeans;
        // 天数
        this.daySum = dayNum;
        this.defaultDay = dayNum;
        // 投资项目总数
        this.btnNum = 19;
        // 投注数额的量
        this.betTypelen = arr.length;
        // 投注总数
        this.betSum = this.userGoldBean;
        // 同一金豆类型点击数目
        this.clickSum = 0;
        this.initBtn();
        // 初始化金豆的点击额度
        for (var n = 0; n < this.betTypelen; n++) {
            this.btnBean = this.getChildByName("btnBean" + n);
            this.btnBean.betType = arr[n];
            this.btnBean.selectIndex = n;
            this.betType = this.btnBean.getChildByName("betType");
            this.betType.text = arr[n];
        }
        Laya.stage.on(Laya.Event.CLICK, this, this.StageClick);
        //撤销按钮
        this.btnRepeal.on(Laya.Event.CLICK, this, this.repealClick);
        // 热门点击
        this.btnHot.zOrder = 99999;
        this.btnHot.on(Laya.Event.CLICK, this, this.hotClick);
        // 规则点击
        this.btnRule.on(Laya.Event.CLICK, this, this.ruleShow);
        // 进度条循环
        this.progress.changeHandler = new Laya.Handler(this, this.proOnChange);
        Laya.timer.loop(1000, this, this.changeValue);
        // 初始化天数
        this.day.text = dayNum + "天";
        // 初始化用户金豆数
        this.userBeans.text = userBeans;
        // 初始化recordDialog
        this.ruleDialog = new ruleUI();
        // 初始化热门的dialog
        this.hotDialog = new HotDialog();
        this.isRevoke = false;//用户是否撤销
        this.typeWriteHtml();
    }
    // 初始化点击按钮
    GameView.prototype.initBtn = function () {
        for (var i = 0; i < this.btnNum; i++) {
            this.investBtn = this.getChildByName("investBtn" + i);
            this.investBtn.disabled = false;
            this.investBtn.value = i;
            // 点击次数
            this.investBtn.clickNum = 0;
        }
    }
    GameView.prototype.StageClick = function (evt) {
        if (evt.target.name.indexOf("investBtn") > -1) {
            this.investClick(evt);
        } else if (evt.target.name.indexOf("btnBean") > -1) {
            this.btnBeanClick(evt);
        }
    }
    // 金豆更改事件
    GameView.prototype.btnBeanClick = function (evt) {
        var e = evt || window.event;
        var target = e.target;
        var index = target.selectIndex;
        for (var i = 0; i < this.betTypelen; i++) {
            if (i === index) {
                this.getChildByName("btnBean" + i).selected = true;
            } else {
                this.getChildByName("btnBean" + i).selected = false;
            }
        }
        this.betNumType = target.betType;
    }
    // 投资点击事件
    GameView.prototype.investClick = function (evt) {
        this.isRevoke = false;
        console.log(this.isRevoke);
        var e = evt || window.event;
        this.getPosition(e);
    }
    // 金豆显示动画
    GameView.prototype.getPosition = function (evt) {
        var target = evt.target; // 发生事件的本身
        target.clickNum++;  // 发生事件点击次数
        this.clickSum++;
        this.showBetImg(target.value, target.clickNum);
        var x = target.x + target.width / 2;
        var y = target.y + target.height / 2;
        var goodBean = new Laya.Sprite();
        goodBean.loadImage("../bin/res/goodBean.png");
        goodBean.pos(50, 1110);
        goodBean.pivot(12, 16);
        Laya.stage.addChild(goodBean);
        Laya.Tween.to(goodBean, {
            x: x,
            y: y,
            scaleY: 1.5,
            scaleX: 1.5
        }, 500, null, Laya.Handler.create(this, this.beansRemove(goodBean)), false, true);
    }
    // 显示投注的投注的显示
    GameView.prototype.showBetImg = function (value, clickNum) {
        this.betImg = this.getChildByName("betImg" + value); // 获取投注显示图片
        this.beansText = this.betImg.getChildByName("beansNum");  // 获取投注文字
        this.beansText.text = this.betNumType * clickNum;
        if (!this.betImg.visible) {
            this.betImg.visible = true;
        }
    }
    // 金豆动画结束的回调函数
    GameView.prototype.beansRemove = function (bean) {
        this.betSum = this.userGoldBean - this.betNumType * this.clickSum;
        this.userBeans.text = this.betSum;
        setTimeout(function () {
            bean.visible = false;
        }, 500)
    }
    // 进度条的 changeHandler
    GameView.prototype.proOnChange = function (value) {
        if (value === 1) {
            this.dayEnd();
        }
    }
    // 进度条循环事件
    GameView.prototype.changeValue = function () {
        if (this.progress.value >= 1) {
            Laya.timer.clear(this, this.changeValue);
        } else {
            this.progress.value += (1 / this.daySum);
            this.day.text = this.defaultDay-- + "天"
        }
    }
    // 进度条结束
    GameView.prototype.dayEnd = function () {
        // // console.log("发送数据");
        // investMagnate.init();
        //TODO:向后台发送数据，开始播放动画
        this.waitLottery.visible = true;
        var val = 0;
        var sendData = {};
        this.btnRepeal.disabled = true;
        for (var i = 0; i < this.btnNum; i++) {
            val = parseInt(this.getChildByName("betImg" + i).getChildByName("beansNum").text);
            this.getChildByName("investBtn" + i).disabled = true;
            if (val == 0) {
                continue
            } else {
                sendData[i] = val;
            }
        }
        console.log("isRevoke", this.isRevoke);
        console.log(JSON.stringify(sendData));
        console.log(this.betSum);
    }
    // 撤销按钮
    GameView.prototype.repealClick = function () {
        this.betSum = this.userGoldBean;// 重置所有用户金豆
        this.userBeans.text = this.betSum;// 重置用户金豆的显示
        this.clickSum = 0;// 将点击的数改成0
        for (var i = 0; i < this.btnNum; i++) {
            this.betImg = this.getChildByName("betImg" + i);
            this.beansNum = this.betImg.getChildByName("beansNum");
            this.beansNum.text = 0;
            // 如果有显示的betImg就将他隐藏掉
            if (this.betImg.visible) {
                this.betImg.visible = false;
            }
        }
        this.isRevoke = true;
        console.log(this.isRevoke);
        // 重置所有的按钮
        this.initBtn();
    }
    // 热门点击事件
    GameView.prototype.hotClick = function () {
        // TODO：在这里请求后台数据；数据返回成功后打开弹出窗
        this.hotDialog.popup(true);
    }
    // 显示规则模态窗
    GameView.prototype.ruleShow = function () {
        this.ruleDialog.popup(true); // 显示 规则模态窗，关闭其他的模态窗
    }
    // 打字机
    GameView.prototype.typeWriteHtml = function () {
        console.log(moment().format('LLL'));
        $("#date").html(moment().format('LLL'));
        var data = {
            "end": 1,
            'bus': ["经济大萧条"],
            'num': 1000,
            'userName': "隋鑫dadadadawdad"
        }

        var dataArr = [];
        dataArr.push(
            {target: "#boss", text: data.userName},
            {target: "#hText", text: "老板，本月行情如下"}
        );
        if (data.bus.length === 1) {
            dataArr.push(
                {target: "#fIndex", text: "001:"},
                {target: "#fLoad", text: "经济大萧条，只有购买了"},
                {target: "#fBus", text: "萧条保险"},
                {target: "#fText", text: "的老板保证了收益"}
            )
        } else {
            dataArr.push(
                {target: "#fIndex", text: "001:"},
                {target: "#fBus", text: data.bus[0]},
                {target: "#fText", text: "大热"},
                {target: "#sIndex", text: "002:"},
                {target: "#sBus", text: data.bus[1]},
                {target: "#sText", text: "前景一片大好"},
                {target: "#tIndex", text: "003:"},
                {target: "#tLoad", text: "投资了"},
                {target: "#tBus", text: data.bus[2]},
                {target: "#tText", text: "养殖的老板都一夜暴富"}
            )
        }

        if (data.end === 1) {
            $("#warnText").removeClass("gText").addClass("rText");
            $("#cNum").removeClass("bText").addClass("rText");
            dataArr.push(
                {target: "#warnText", text: "【恭喜】"},
                {target: "#cIndex", text: "你本月投资获利"},
                {target: "#cNum", text: data.num.toString()},
                {target: "#cText", text: "金豆"}
            )
        } else if (data.end === 2) {
            $("#warnText").removeClass("gText").addClass("bText");
            dataArr.push(
                {target: "#warnText", text: "你本月未参与投资"}
            )
        } else if (data.end === 0) {
            dataArr.push(
                {target: "#warnText", text: "【抱歉】"},
                {target: "#cIndex", text: "你本月投资没有获利,请不要灰心"}
            )
        }
        var sumStr = 0;
        for (var i = 0; i < dataArr.length; i++) {
            sumStr += dataArr[i].text.length;
        }
        var starTime = new Date();
        var typeInterval = 6000 / sumStr;
        !(function iterator(i) {
            if (i == dataArr.length) {
                var endTime = new Date();
                console.log(endTime - starTime);
                return;
            }
            new TypeWriting({
                targetElement: document.querySelector(dataArr[i].target),
                inputString: dataArr[i].text,
                typingInterval: typeInterval,
                blinkInterval: "1s",
                cursorColor: "rgba(0,0,0,0)"
            }, function () {
                iterator(i + 1);
            })
        })(0);

    }

    return GameView;

})(ui.GameMainUI)