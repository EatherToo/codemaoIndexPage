Vue.component('headblock', {
  // 在 JavaScript 中是 camelCase 的
  props: ['value'],
  template: '<li class=\'headblock\'><p>{{ value }}</p></li>'
})
Vue.component('ide',{
	template:'<div class="some"><div class="some_up"><img src="img/i1.jpg" width="100%" height="100%" style="border-radius: 10px 10px 0 0;"/></div><div class="some_down"><div><p style="color: #000000;font-size: 1.3em;">源码编辑器</p></div><div><p style="color: gray;">200万人都在用的2D图形化编辑器</p></div><div><p style="color:firebrick;">新手入门</p></div></div></div>'
})
var head = new Vue({
	el:"#head",
	data:{
		width:'65%',
		screenWidth:document.body.clientWidth,
		items:['首页','发现','社区','素材','课程','更多']
	},
	methods: {
		changeWidth: function() {
			this.width = 100+'';
		}
	},
	mounted:function(){
		window.onresize = function windowResize()
		{
			this.screenWidth = window.innerWidth;
			this.screenHeight = window.innerHeight;
			
		}
	},
	
})
var carrousel = new Vue({
	el:"#carrousel",
	data:{
		mark:0,
		items:['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']
	},
	created:function(){
		this.play();
	},
	methods: {
		autoplay:function(){
			this.mark++;
			if(this.mark==5)
				this.mark=0;
		},
		play:function(){
			setInterval(this.autoplay,3000);
		},
		sub:function() {
			if(this.mark>0)
			--this.mark;
		},
		add:function(){
			if(this.mark<4)
			++this.mark;
		}
	},
	
})

var content = new Vue({
	el:"#content",
	data() {
		return {
			isall: true,
			ishalf:false,
			items:[
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			{src:"img/1333890.png",name:"旅行青蛙",author:"Tom"},
			]
		}
	},
	methods: {
		left: function() {
			this.isall = true;
			this.ishalf = false;
		},
		right: function(){
			this.isall = false;
			this.ishalf = true;
		}
	},
})
