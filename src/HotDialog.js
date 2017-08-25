var HotDialog = (function (_super) {

    function HotDialog() {
        HotDialog.super(this);

        this.init();
    }

    Laya.class(HotDialog, "HotDialog", _super);

    var _proto = HotDialog.prototype;
    // 初始化函数
    _proto.init = function () {
        this.hotArr = [
            { month: 1001, bus: "商业", second: [false, true, false, false], frist: [false, true] },
            { month: 1002, bus: "农业", second: [false, true, false, false], frist: [false, true] },
            { month: 1003, bus: "哈哈", second: [false, true, false, false], frist: [true, false] },
            { month: 1004, bus: "大大", second: [false, true, false, false], frist: [false, true] },
            { month: 1005, bus: "小小", second: [false, true, false, false], frist: [true, false] },
            { month: 1006, bus: "小小", second: [false, true, false, false], frist: [false, true] },
            { month: 1007, bus: "呵呵呵", second: [true, false, false, false], frist: [false, true] },
            { month: 1008, bus: "尼玛", second: [false, false, true, false], frist: [false, true] },
            { month: 1009, bus: "我的天", second: [false, true, false, false], frist: [true, false] },
            { month: 1010, bus: "妈呀", second: [false, true, false, false], frist: [false, true] }
        ]

        this.outObj = {
            "0": 1, "1": 2, "2": 1, "3": 2, "4": 5, "5": 2, "6": 4, "7": 1, "8": 0, "9": 1, "10": 10, "11": 1, "12": 4, "13": 2, "14": 2,
            "15": 3, "16": 3, "17": 3, "18": 4
        }
        this.outArr = [];
        for (var i in this.outObj) {
            this.outArr.push(this.outObj[i])
        }
        this.hotLen = this.hotArr.length;
        this.outLen = this.outArr.length;
        // 创建最佳List
        this.createList();
        // 创建遗漏指数
        this.createOut();
        // tab切换
        this.tab.selectHandler = new Laya.Handler(this,this.selectChange);
    }
    // 创建最佳List
    _proto.createList = function () {
        var data = [];
        for (var i = 0; i < this.hotLen; i++) {
            data.push({
                monthLabel: { text: this.hotArr[i].month },
                busLabel: { text: this.hotArr[i].bus },
                first0: { visible: this.hotArr[i].frist[0] },
                first1: { visible: this.hotArr[i].frist[1] },
                second0: { visible: this.hotArr[i].second[0] },
                second1: { visible: this.hotArr[i].second[1] },
                second2: { visible: this.hotArr[i].second[2] },
                second3: { visible: this.hotArr[i].second[3] }
            })
        }
        this.hotList.array = data;
    }

    // 创建遗漏指数
    _proto.createOut = function () {
        for (var i = 0; i < this.outLen; i++) {
            var outBox = this.viewBox1.getChildByName("outBox" + i);
            var outLabel = outBox.getChildByName("outNum");
            if (i == 12) {
                var htmlDiv = new Laya.HTMLDivElement();
                var html = "<span style='color:#8D6340;" + "font:26px Arial' " + ">保险公司：已经有</span>"
                html += "<span style='color:#E33014;" + "font:26px Arial' " + ">" + this.outArr[i] + "月</span>"
                html += "<span style='color:#8D6340;" + "font:26px Arial' " + ">没有出现过经济萧条</span>"
                htmlDiv.innerHTML = html;
                htmlDiv.style.height = 72;
                htmlDiv.style.width = 602;
                htmlDiv.style.lineHeight = 72;
                htmlDiv.style.align = "center";
                outLabel.addChild(htmlDiv);
            } else {
                outLabel.text = this.outArr[i];
            }
        }
    }
    // tab切换
    _proto.selectChange = function(index){
        this.stack.selectedIndex = index;
    }
    return HotDialog;


})(ui.hotDialogUI);