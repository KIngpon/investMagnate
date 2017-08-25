var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameMainUI=(function(_super){
		function GameMainUI(){
			
		    this.btnList=null;
		    this.btnRule=null;
		    this.btnCountry=null;
		    this.btnInsurance=null;
		    this.btnCity=null;
		    this.btnGraziery=null;
		    this.btnFarming=null;
		    this.btnFinancial=null;
		    this.btnIndustry=null;
		    this.btnLivestock=null;
		    this.btnPoultry=null;
		    this.btnAquatic=null;
		    this.btnFood=null;
		    this.btnGreens=null;
		    this.btnFlowers=null;
		    this.btnStock=null;
		    this.btnFund=null;
		    this.btnFutures=null;
		    this.btnRestaurant=null;
		    this.btnKtv=null;
		    this.btnStore=null;
		    this.progress=null;
		    this.day=null;
		    this.btnReward=null;
		    this.userBeans=null;
		    this.addBeans=null;
		    this.betImg0=null;
		    this.betImg1=null;
		    this.betImg2=null;
		    this.betImg3=null;
		    this.betImg4=null;
		    this.betImg5=null;
		    this.betImg6=null;
		    this.betImg7=null;
		    this.betImg8=null;
		    this.betImg9=null;
		    this.betImg10=null;
		    this.betImg11=null;
		    this.betImg12=null;
		    this.betImg13=null;
		    this.betImg14=null;
		    this.betImg15=null;
		    this.betImg16=null;
		    this.betImg17=null;
		    this.betImg18=null;
		    this.btnRepeal=null;
		    this.btnBean0=null;
		    this.btnBean1=null;
		    this.btnBean2=null;
		    this.btnHot=null;
		    this.hotProject=null;
		    this.waitLottery=null;

			GameMainUI.__super.call(this);
		}

		CLASS$(GameMainUI,'ui.GameMainUI',_super);
		var __proto__=GameMainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMainUI.uiView);
		}

		STATICATTR$(GameMainUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":750,"height":1206,"gray":false},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"investMagnate/investMagnate_bg.png"}},{"type":"Button","props":{"y":3,"x":665,"width":60,"var":"btnList","stateNum":"1","skin":"investMagnate/btn_record.png","height":60}},{"type":"Button","props":{"y":3,"x":598,"width":60,"var":"btnRule","stateNum":"1","skin":"investMagnate/btn_rule.png","height":60}},{"type":"Image","props":{"y":67,"x":494,"skin":"investMagnate/bg_pro.png"}},{"type":"Button","props":{"y":333,"x":45,"width":192,"var":"btnCountry","stateNum":"1","skin":"investMagnate/btn_country.png","name":"investBtn17","height":108,"disabled":false}},{"type":"Button","props":{"y":356,"x":308,"var":"btnInsurance","stateNum":"1","skin":"investMagnate/btn_insurance.png","name":"investBtn12"}},{"type":"Button","props":{"y":333,"x":513,"var":"btnCity","stateNum":"1","skin":"investMagnate/btn_city.png","name":"investBtn18"}},{"type":"Button","props":{"y":505,"x":48,"width":114,"var":"btnGraziery","stateNum":"1","skin":"investMagnate/btn_graziery.png","name":"investBtn13","height":116}},{"type":"Button","props":{"y":505,"x":208,"width":114,"var":"btnFarming","stateNum":"1","skin":"investMagnate/btn_farming.png","name":"investBtn14","height":116}},{"type":"Button","props":{"y":505,"x":429,"width":114,"var":"btnFinancial","stateNum":"1","skin":"investMagnate/btn_financial .png","name":"investBtn15","height":116}},{"type":"Button","props":{"y":506,"x":589,"var":"btnIndustry","stateNum":"1","skin":"investMagnate/btn_industry.png","name":"investBtn16","label":"\\"}},{"type":"Button","props":{"y":667,"x":48,"var":"btnLivestock","stateNum":"1","skin":"investMagnate/btn_livestock.png","name":"investBtn0"}},{"type":"Button","props":{"y":789,"x":49,"var":"btnPoultry","stateNum":"1","skin":"investMagnate/btn_poultry.png","name":"investBtn1"}},{"type":"Button","props":{"y":910,"x":48,"var":"btnAquatic","stateNum":"1","skin":"investMagnate/btn_aquatic.png","name":"investBtn2"}},{"type":"Button","props":{"y":667,"x":208,"var":"btnFood","stateNum":"1","skin":"investMagnate/btn_food.png","name":"investBtn3"}},{"type":"Button","props":{"y":789,"x":208,"var":"btnGreens","stateNum":"1","skin":"investMagnate/btn_greens.png","name":"investBtn4"}},{"type":"Button","props":{"y":911,"x":207,"var":"btnFlowers","stateNum":"1","skin":"investMagnate/btn_flowers .png","name":"investBtn5"}},{"type":"Button","props":{"y":667,"x":429,"var":"btnStock","stateNum":"1","skin":"investMagnate/btn_stock.png","name":"investBtn6"}},{"type":"Button","props":{"y":789,"x":429,"var":"btnFund","stateNum":"1","skin":"investMagnate/btn_fund.png","name":"investBtn7"}},{"type":"Button","props":{"y":911,"x":429,"width":113,"var":"btnFutures","stateNum":"1","skin":"investMagnate/btn_futures.png","name":"investBtn8","height":116}},{"type":"Button","props":{"y":667,"x":588,"var":"btnRestaurant","stateNum":"1","skin":"investMagnate/btn_restaurant.png","name":"investBtn9"}},{"type":"Button","props":{"y":789,"x":588,"var":"btnKtv","stateNum":"1","skin":"investMagnate/btn_ktv.png","name":"investBtn10"}},{"type":"Button","props":{"y":911,"x":588,"var":"btnStore","stateNum":"1","skin":"investMagnate/btn_store.png","name":"investBtn11"}},{"type":"ProgressBar","props":{"y":128,"x":576,"var":"progress","value":0,"skin":"investMagnate/progress.png","sizeGrid":"0,0,0,0"}},{"type":"Label","props":{"y":79,"x":574,"width":123,"var":"day","text":"20天","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#5c270a","bold":true,"align":"center"}},{"type":"Button","props":{"y":217,"x":226,"var":"btnReward","stateNum":"1","skin":"investMagnate/btn_reward.png"}},{"type":"Text","props":{"y":1101,"x":20,"width":69,"valign":"middle","text":"总资产","height":26,"fontSize":26,"font":"Microsoft YaHei","color":"#eabe75","align":"center"}},{"type":"Image","props":{"y":1147,"x":19,"width":201,"skin":"investMagnate/bg_property.png","height":46}},{"type":"Label","props":{"y":1156,"x":32,"width":143,"var":"userBeans","text":"188888","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#eabe75","bold":false,"align":"left"}},{"type":"Button","props":{"y":1142,"x":180,"width":52,"var":"addBeans","stateNum":"1","skin":"investMagnate/btn_add.png","height":52}},{"type":"Image","props":{"y":707,"x":122,"width":68,"visible":false,"var":"betImg0","skin":"investMagnate/bg_sum.png","name":"betImg0","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":824,"x":122,"width":68,"visible":false,"var":"betImg1","skin":"investMagnate/bg_sum.png","name":"betImg1","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":944,"x":122,"width":68,"visible":false,"var":"betImg2","skin":"investMagnate/bg_sum.png","name":"betImg2","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":707,"x":282,"width":68,"visible":false,"var":"betImg3","skin":"investMagnate/bg_sum.png","name":"betImg3","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":824,"x":282,"width":68,"visible":false,"var":"betImg4","skin":"investMagnate/bg_sum.png","name":"betImg4","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":944,"x":282,"width":68,"visible":false,"var":"betImg5","skin":"investMagnate/bg_sum.png","name":"betImg5","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":707,"x":503,"width":68,"visible":false,"var":"betImg6","skin":"investMagnate/bg_sum.png","name":"betImg6","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":824,"x":503,"width":68,"visible":false,"var":"betImg7","skin":"investMagnate/bg_sum.png","name":"betImg7","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":944,"x":503,"width":68,"visible":false,"var":"betImg8","skin":"investMagnate/bg_sum.png","name":"betImg8","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":707,"x":661,"width":68,"visible":false,"var":"betImg9","skin":"investMagnate/bg_sum.png","name":"betImg9","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":824,"x":661,"width":68,"visible":false,"var":"betImg10","skin":"investMagnate/bg_sum.png","name":"betImg10","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":944,"x":664,"width":68,"visible":false,"var":"betImg11","skin":"investMagnate/bg_sum.png","name":"betImg11","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":352,"x":398,"width":68,"visible":false,"var":"betImg12","skin":"investMagnate/bg_sum.png","name":"betImg12","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":528,"x":122,"width":68,"visible":false,"var":"betImg13","skin":"investMagnate/bg_sum.png","name":"betImg13","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":528,"x":282,"width":68,"visible":false,"var":"betImg14","skin":"investMagnate/bg_sum.png","name":"betImg14","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":528,"x":503,"width":68,"visible":false,"var":"betImg15","skin":"investMagnate/bg_sum.png","name":"betImg15","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":528,"x":661,"width":68,"visible":false,"var":"betImg16","skin":"investMagnate/bg_sum.png","name":"betImg16","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":331,"x":195,"width":68,"visible":false,"var":"betImg17","skin":"investMagnate/bg_sum.png","name":"betImg17","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":331,"x":661,"width":68,"visible":false,"var":"betImg18","skin":"investMagnate/bg_sum.png","name":"betImg18","height":38,"alpha":0.8},"child":[{"type":"Label","props":{"y":0,"x":-2,"width":69,"text":"0","name":"beansNum","height":29,"fontSize":20,"font":"Microsoft YaHei","color":"#f6f6f6","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":1105,"x":615,"width":108,"var":"btnRepeal","stateNum":"1","skin":"investMagnate/btn_repeal.png","height":90}},{"type":"Button","props":{"y":1101,"x":243,"var":"btnBean0","stateNum":"2","skin":"investMagnate/btn_bean.png","selected":true,"name":"btnBean0"},"child":[{"type":"Label","props":{"y":60,"x":9,"width":82,"text":"100","name":"betType","height":22,"fontSize":22,"color":"#DFB16C","align":"center"}}]},{"type":"Button","props":{"y":1101,"x":355,"var":"btnBean1","stateNum":"2","skin":"investMagnate/btn_bean.png","name":"btnBean1"},"child":[{"type":"Label","props":{"y":60,"x":6,"width":82,"text":"100","name":"betType","height":22,"fontSize":22,"color":"#DFB16C","align":"center"}}]},{"type":"Button","props":{"y":1101,"x":468,"var":"btnBean2","stateNum":"2","skin":"investMagnate/btn_bean.png","name":"btnBean2"},"child":[{"type":"Label","props":{"y":60,"x":6,"width":82,"text":"100","name":"betType","height":22,"fontSize":22,"color":"#DFB16C","align":"center"}}]},{"type":"Box","props":{"y":67,"x":32,"var":"btnHot"},"child":[{"type":"Image","props":{"skin":"investMagnate/bg_hot.png"}},{"type":"Box","props":{"y":18,"x":80},"child":[{"type":"Button","props":{"y":10,"x":75,"stateNum":"1","skin":"investMagnate/btn_pullDown.png"}},{"type":"Label","props":{"width":77,"var":"hotProject","text":"餐厅","padding":"8,0,0,8","overflow":"hidden","height":57,"fontSize":30,"font":"Microsoft YaHei","color":"#eabe75","align":"center"}}]}]},{"type":"Label","props":{"y":476,"x":162,"width":450,"visible":false,"var":"waitLottery","valign":"middle","height":185,"gray":true,"fontSize":28,"color":"#fff","bgColor":"rgba(0,0,0,0.5)","alpha":0.5,"align":"center"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":450,"valign":"middle","text":"老板稍安勿躁，开奖正在进行～","height":185,"fontSize":28,"color":"#fff","align":"center"}}]}]};}
		]);
		return GameMainUI;
	})(View);
var hotDialogUI=(function(_super){
		function hotDialogUI(){
			
		    this.stack=null;
		    this.viewBox0=null;
		    this.hotList=null;
		    this.viewBox1=null;
		    this.livestockOut=null;
		    this.poultrywOut=null;
		    this.aquaticOut=null;
		    this.foodOut=null;
		    this.greensOut=null;
		    this.flowersOut=null;
		    this.stockOut=null;
		    this.fundOut=null;
		    this.futuresOut=null;
		    this.restaurantOut=null;
		    this.ktvOut=null;
		    this.storeOut=null;
		    this.grazieryOut=null;
		    this.farmingOut=null;
		    this.financialOut=null;
		    this.industryOut=null;
		    this.countryOut=null;
		    this.cityOut=null;
		    this.tab=null;

			hotDialogUI.__super.call(this);
		}

		CLASS$(hotDialogUI,'ui.hotDialogUI',_super);
		var __proto__=hotDialogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(hotDialogUI.uiView);
		}

		STATICATTR$(hotDialogUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":686,"height":911},"child":[{"type":"ViewStack","props":{"y":0,"x":0,"var":"stack","selectedIndex":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":686,"var":"viewBox0","name":"item0","height":911},"child":[{"type":"Image","props":{"y":439,"x":343,"width":686,"skin":"investMagnate/bg_zuijia.png","skewX":0,"height":879,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":879,"x":300,"width":86,"stateNum":"1","skin":"investMagnate/btn_closeHot.png","name":"close"}}]},{"type":"Box","props":{"y":101,"x":10},"child":[{"type":"Label","props":{"width":81,"valign":"middle","text":"月份","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"x":94,"width":81,"valign":"middle","text":"行业","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"x":200,"width":81,"valign":"middle","text":"畜牧 ","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"x":515,"width":81,"valign":"middle","text":"乡村 ","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":267,"width":81,"valign":"middle","text":" 种植 ","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"x":338,"width":81,"valign":"middle","text":" 金融 ","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"x":413,"width":81,"valign":"middle","text":" 服务","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":582,"width":81,"valign":"middle","text":" 城市","height":74,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}}]},{"type":"List","props":{"y":178,"x":4,"width":672,"var":"hotList","repeatY":0,"repeatX":1,"height":675},"child":[{"type":"Box","props":{"y":-4,"x":-2,"width":676,"name":"render","height":70},"child":[{"type":"Label","props":{"y":0,"width":90,"valign":"middle","text":"1001","name":"monthLabel","height":70,"fontSize":28,"color":"#8D6340","align":"center"}},{"type":"Label","props":{"y":0,"x":97,"width":90,"valign":"middle","text":"商业","name":"busLabel","height":70,"fontSize":28,"color":"#8D6340","bold":true,"align":"center"}},{"type":"Image","props":{"y":20,"x":547,"visible":false,"skin":"investMagnate/cir_r.png","name":"first0"}},{"type":"Image","props":{"y":20,"x":620,"visible":false,"skin":"investMagnate/cir_r.png","name":"first1"}},{"type":"Image","props":{"y":20,"x":227,"width":28,"visible":false,"skin":"investMagnate/cir_g.png","name":"second0","height":28}},{"type":"Image","props":{"y":20,"x":369,"visible":false,"skin":"investMagnate/cir_g.png","name":"second2"}},{"type":"Image","props":{"y":20,"x":444,"visible":false,"skin":"investMagnate/cir_g.png","name":"second3"}},{"type":"Image","props":{"y":20,"x":296,"visible":false,"skin":"investMagnate/cir_g.png","name":"second1"}}]}]}]},{"type":"Box","props":{"y":0,"x":0,"var":"viewBox1","name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"investMagnate/bg_yilou.png"},"child":[{"type":"Button","props":{"y":764,"x":300,"stateNum":"1","skin":"investMagnate/btn_closeHot.png","name":"close"}}]},{"type":"Label","props":{"y":100,"x":0,"width":686,"valign":"middle","text":"据说根据遗漏投资的老板99%都赚到了","height":78,"fontSize":28,"font":"Arial","color":"#8D6340","bold":true,"align":"center"}},{"type":"Box","props":{"y":319,"x":5,"name":"outBox0"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"家畜","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"livestockOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":389,"x":5,"name":"outBox1"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"家禽","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"poultrywOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":459,"x":5,"name":"outBox2"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"水产","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"aquaticOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":316,"x":175,"name":"outBox3"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"粮食","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"foodOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":386,"x":175,"name":"outBox4"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"蔬菜","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"greensOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":459,"x":175,"name":"outBox5"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"花卉","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"flowersOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":316,"x":345,"name":"outBox6"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"股票","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"stockOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":386,"x":345,"name":"outBox7"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"基金","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"fundOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":456,"x":345,"name":"outBox8"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"期货","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"futuresOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":316,"x":515,"name":"outBox9"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"餐厅","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"restaurantOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":386,"x":515,"name":"outBox10"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":93,"valign":"middle","text":"KTV","height":68,"fontSize":28,"color":"#8D6340","bold":false,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"ktvOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":456,"x":515,"name":"outBox11"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"商场","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"storeOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":648,"x":45,"name":"outBox12"},"child":[{"type":"Label","props":{"width":602,"valign":"middle","name":"outNum","height":72,"fontSize":28,"align":"center"}}]},{"type":"Box","props":{"y":246,"x":6,"name":"outBox13"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"畜牧","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"grazieryOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":246,"x":176,"name":"outBox14"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"种植","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"farmingOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":246,"x":346,"name":"outBox15"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"金融","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"financialOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":246,"x":515,"name":"outBox16"},"child":[{"type":"Label","props":{"width":93,"valign":"middle","text":"服务","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":95,"width":71,"var":"industryOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","align":"left"}}]},{"type":"Box","props":{"y":177,"x":0,"name":"outBox17"},"child":[{"type":"Label","props":{"width":211,"valign":"middle","text":"乡村投资","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":210,"width":130,"var":"countryOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":177,"x":344,"name":"outBox18"},"child":[{"type":"Label","props":{"width":211,"valign":"middle","text":"城市投资","height":68,"fontSize":28,"color":"#8D6340","bold":true,"align":"right"}},{"type":"Label","props":{"x":210,"width":130,"var":"cityOut","valign":"middle","text":"5","name":"outNum","height":68,"fontSize":28,"color":"#E33014","bold":true,"align":"left"}}]},{"type":"Label","props":{"y":559,"x":128,"width":432,"text":"遗漏指数即某项目连续N个月没有盈利。","height":26,"fontSize":26,"color":"#8D6340","bold":false,"align":"center"}},{"type":"Label","props":{"y":594,"x":201,"width":439,"text":"项目太长时间不盈利的概率很小哟~","height":26,"fontSize":26,"color":"#8D6340","align":"left"}},{"type":"Label","props":{"y":594,"x":82,"width":111,"text":"温馨提示:","height":26,"fontSize":26,"color":"#8D6340","bold":true}}]}]},{"type":"Tab","props":{"y":22,"x":137,"var":"tab","space":0,"selectedIndex":0},"child":[{"type":"Button","props":{"stateNum":"2","skin":"investMagnate/btn_investment.png","name":"item0"}},{"type":"Button","props":{"x":206,"stateNum":"2","skin":"investMagnate/btn_out.png","name":"item1"}}]}]};}
		]);
		return hotDialogUI;
	})(Dialog);
var ruleUI=(function(_super){
		function ruleUI(){
			
		    this.btnBackGame=null;
		    this.rulePanel=null;

			ruleUI.__super.call(this);
		}

		CLASS$(ruleUI,'ui.ruleUI',_super);
		var __proto__=ruleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ruleUI.uiView);
		}

		STATICATTR$(ruleUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":600,"height":761},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"investMagnate/bg_record.png","height":761}},{"type":"Button","props":{"width":386,"var":"btnBackGame","stateNum":"1","skin":"investMagnate/btn_backGame.png","name":"close","left":107,"height":86,"bottom":84}},{"type":"Panel","props":{"y":135,"x":80,"width":445,"var":"rulePanel","height":423},"child":[{"type":"Label","props":{"y":0,"x":0,"width":27,"text":"label","height":12}}]}]};}
		]);
		return ruleUI;
	})(Dialog);