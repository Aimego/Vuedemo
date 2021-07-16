<template>

	<ul class="subnav-entry">
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon1"></span>
				<span>WIFI电话卡</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon2"></span>
				<span>保险·签证</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon3"></span>
				<span>外币兑换</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon4"></span>
				<span>购物</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon5"></span>
				<span>当地向导</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon6"></span>
				<span>自由行</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon7"></span>
				<span>境外玩乐</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon8"></span>
				<span>礼品卡</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon9"></span>
				<span>信用卡</span>
			</a>
		</li>
		<li>
			<a href="#">
				<span class="subnav-entry-icon-icon10"></span>
				<span>更多</span>
			</a>
		</li>
	</ul>

</template>

<script>
	export default{
		name:'subnav'
	}
</script>

<style>
	.subnav-entry{
		display: flex;
		border-radius: 8px;
		background-color: #fff;
		margin: 0px 4px;
		flex-wrap: wrap;
		font-size: 12px;
		margin-top: 6px;
	}
	.subnav-entry li{
		
		flex: 20%;
	}
	.subnav-entry li a{
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.subnav-entry li [class^="subnav-entry-icon"]{
		margin: 9px 0px;
		width: 20px;
		height: 20px;
		background: url(../../assets/subnav-entry/wifi.png) no-repeat center top;
		background-size: 20px !important;
	}
	
	.subnav-entry li .subnav-entry-icon-icon2{
		background: url(../../assets/subnav-entry/保险.png) no-repeat center top;
	}
	
	.subnav-entry li .subnav-entry-icon-icon3{
		background: url(../../assets/subnav-entry/外币兑换.png) no-repeat center top;
	}
	
	.subnav-entry li .subnav-entry-icon-icon4{
		background: url(../../assets/subnav-entry/购物.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon5{
		background: url(../../assets/subnav-entry/向导.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon6{
		background: url(../../assets/subnav-entry/自由行.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon7{
		background: url(../../assets/subnav-entry/境外旅行.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon8{
		background: url(../../assets/subnav-entry/礼品.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon9{
		background: url(../../assets/subnav-entry/信用卡.png) no-repeat center top;
		
	}
	.subnav-entry li .subnav-entry-icon-icon10{
		background: url(../../assets/subnav-entry/更多.png) no-repeat center top;
		
	}
</style>
