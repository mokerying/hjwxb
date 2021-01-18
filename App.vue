
  
<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/uni.css'; 
	/*每个页面公共css */
	@font-face {
		font-family: Arial, sans-serif;
		font-size: 16upx;
	}
	.clearfix:after {
	  visibility: hidden;
	  display: block;
	  font-size: 0;
	  content: " ";
	  clear: both;
	  height: 0;
	}
	.fs14{font-size: .88rem;}
	.fr{float: right;}
	.gray{color: #9B9B9B;}
	.red{color: #F5222D;}
	.orange{color: #FF9800;}
	.green{color: #52C41A;}
	.blue{color: #1890FF;}
	.line-height20{line-height: 20upx;}
</style>
