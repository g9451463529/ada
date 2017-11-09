$(document).ready(function(){
	
	//访问明细
	var testdata1 = [['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:29:50','125.84.94.29','中国，重庆','广告联盟B','火狐浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:29:33','218.85.0.0','中国，上海','广告联盟C','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:26:59','218.86.127.255','中国，武汉','论坛A','火狐浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:26:20','124.72.255.255','中国，成都','论坛B','QQ浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:23:11','220.162.255.255','菲律宾，马尼拉','论坛C','安卓系统','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:23:03','222.184.0.0','菲律宾，宿务','贴吧A','微信内置浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:22:51','221.231.255.255','菲律宾，达沃','贴吧B','iOS系统','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:22:45','192.168.1.1','泰国，曼谷','贴吧C','搜狗高速浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:18:26','192.168.1.1','柬埔寨，金边','贴吧D','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:16:55','192.168.1.1','越南，胡志明市','广告联盟A','UC浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:16:42','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx'],
	                 ['2017-08-31 15:30:59','192.168.1.1','中国，北京','广告联盟A','谷歌浏览器','http://www.51out.tk/idenx']
				];
	$('#testtable2').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':testdata1 /*传入的表格数据*/
		}
	});
	
	
	
	//渠道分析 明细列表
	var source = [['广告联盟A','534','334','333','100','<a href="channel_EUV.html">60<a/>','<a href="channel_EIP.html">40</a>','<a href="channel_Ad.html">查看详情</a>'],
	              ['广告联盟B','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟C','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['论坛A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['论坛B','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['论坛C','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['贴吧A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['贴吧B','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['贴吧C','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>'],
	              ['广告联盟A','534','334','333','100','60','40','<a>查看详情</a>']
				];
	$('#testtable_source').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':source /*传入的表格数据*/
		}
	});
	
	//渠道分析-广告列表
	var chan_Ad = [
	               	  ['游戏A','534','334','333','100','60','40'],
		              ['游戏B','534','334','333','100','60','40'],
		              ['游戏C','534','334','333','100','60','40'],
		              ['游戏D','534','334','333','100','60','40'],
		              ['游戏E','534','334','333','100','60','40'],
		              ['游戏F','534','334','333','100','60','40'],
		              ['游戏H','534','334','333','100','60','40'],
		              ['游戏J','534','334','333','100','60','40'],
		              ['游戏K','534','334','333','100','60','40'],
		              ['游戏L','534','334','333','100','60','40'],
		              ['游戏M','534','334','333','100','60','40'],
		              ['游戏N','534','334','333','100','60','40'],
		              ['游戏O','534','334','333','100','60','40'],
		              ['游戏P','534','334','333','100','60','40'],
		              ['游戏Q','534','334','333','100','60','40'],
		              ['游戏R','534','334','333','100','60','40'],
		              ['游戏S','534','334','333','100','60','40']
					];
	$('#channel_Ad').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':chan_Ad /*传入的表格数据*/
		}
	});
	
	//广告列表
	var Ad = [['1','游戏A','<a>http://www.zcool.com.cn/</a>','<a href="index_ChannelSet.html">编辑渠道</a>   <a onclick="del();">删除</a>'],
	          ['2','游戏B','<a>http://www.51out.tk/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['3','游戏C','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['4','商城A','<a>http://www.iconfont.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['5','商城B','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['6','商城C','<a>http://www.58pic.com/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['7','游戏A','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['8','游戏A','<a>http://www.58pic.com/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['9','游戏A','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['10','游戏A','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['11','游戏A','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
	          ['12','游戏A','<a>http://www.zcool.com.cn/</a>','<a>编辑渠道</a>   <a>删除</a>'],
				];
	$('#AdList').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':Ad /*传入的表格数据*/
		}
	});
	
	//站点列表
	var Site = [ 
	              ['1','天猫','<a>http://www.zcool.com.cn/</a>','<a href="index.html">查看报表</a> <a onclick="code();">统计代码</a> <a href="index_FieldSet.html">设置</a> <a onclick="del();">删除</a>'],
	              ['2','蘑菇街','<a>http://www.mogujie.com.cn/</a>','<a href="index.html">查看报表</a> <a onclick="code();">统计代码</a> <a href="index_FieldSet.html">设置</a> <a onclick="del();">删除</a>'],
	              ['3','寺库','<a>http://www.siku.com.cn/</a>','<a href="index.html">查看报表</a> <a onclick="code();">统计代码</a> <a href="index_FieldSet.html">设置</a> <a onclick="del();">删除</a>'],
	              ['4','当当网','<a>http://www.dangdangwang.com.cn/</a>','<a href="index.html">查看报表</a><a onclick="code();">统计代码</a> <a href="index_FieldSet.html">设置</a> <a onclick="del();">删除</a>']
			 ];
	
	$('#SiteList').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':Site /*传入的表格数据*/
		}
	});
	
	//地域分析
	var region = [
		          ['黑龙江','888','555','444','200','<a href="Ad_EUV.html">60</a>','<a href="Ad_EIP.html">40</a>','<a href="ad_Channel.html">查看详情</a>'],
		          ['吉林','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['辽宁','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['河北','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['湖南','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['四川','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['贵州','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['重庆','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['云南','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['广东','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['江苏','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['江西','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['福建','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['台湾','888','555','444','200','60','40','<a>查看详情</a>']
				];
	$('#region').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':region /*传入的表格数据*/
		}
	});
	
	
	
	//广告分析
	var AdA = [
	          
		          ['游戏A','888','555','444','200','<a href="Ad_EUV.html">60</a>','<a href="Ad_EIP.html">40</a>','<a href="ad_Channel.html">查看详情</a>'],
		          ['游戏B','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏C','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏D','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['商城A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['商城B','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['商城C','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>'],
		          ['游戏A','888','555','444','200','60','40','<a>查看详情</a>']
				];
	
	jQuery.ajax({
		  url: "$!webPath/user/updatePassword.htm",     
		    type: "post",               
		   	dataType: "json",      
		    success:function(data){
		    	if(data.status == 'success'){
		    		
		    		
		    	}
		    	
		    }
	});
	
	$('#AdA').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':AdA /*传入的表格数据*/
		}
	});
	
	//广告分析- 渠道列表
	var ad_Chan = [
	                  ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟B','534','334','333','100','60','40'],
		              ['广告联盟C','534','334','333','100','60','40'],
		              ['论坛A','534','334','333','100','60','40'],
		              ['论坛B','534','334','333','100','60','40'],
		              ['论坛C','534','334','333','100','60','40'],
		              ['贴吧A','534','334','333','100','60','40'],
		              ['贴吧B','534','334','333','100','60','40'],
		              ['贴吧C','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40'],
		              ['广告联盟A','534','334','333','100','60','40']
				];
	
	$('#ad_Channel').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':ad_Chan /*传入的表格数据*/
		}
	});
	
	//来源分析 - EIP
	var EIP = [
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a onclick="details();">查看IP详情</a>'],
	                  ['19.177.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['255.138.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['133.128.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.188.1.255','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>'],
	                  ['19.168.1.231','534','天天访问、频繁切换IP、疑似作弊软件、','<a>查看IP详情</a>']
				];
	$('#EIP').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':EIP /*传入的表格数据*/
		}
	});
	
	//来源分析 - EUV
	var EUV = [
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空'],
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空'],
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空'],
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空'],
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空'],
               ['sdasd545443434','534','不同IP重复访问'],
               ['空','534','客户端ID为空']
			];
	
	$('#EUV').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':EUV /*传入的表格数据*/
		}
	});
	
	var Field = [
                 ['1','www.mogujie.com','2017-09-19 10:30:03','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
                 ['2','www.mogujie.cn','2017-09-19 10:30:03','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
                 ['3','mysite.com','2017-09-19 10:30:03','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
                 ['4','sub.mysite.com','2017-09-19 10:30:03','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>']
                
			];
	
	$('#FieldList').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':Field /*传入的表格数据*/
		}
	});
	
	var ChannelSet = [
	                  ['1','广告联盟A','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
	                  ['2','论坛A','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
	                  ['3','贴吧A','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
	                  ['4','广告联盟B','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
	                  ['5','广告联盟C','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>'],
	                  ['6','广告联盟D','source = taobao','<a onclick="edit();">修改</a>  <a onclick="del();">删除</a>']
	                 
	 			];
	
	$('#ChannelSet').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':ChannelSet /*传入的表格数据*/
		}
	});
	
	
	//来源分析 - Eip详情
	var Eip_details = [
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03'],
	                   ['','','www.163.cn','http://www.zcool.com.cn/','2017-09-19 10:30:03']
	                  
	  			];
	

	$('#Eip_details').yhhDataTable({
		'paginate':{
			'changeDisplayLen':true,
			'type':'updown',
			'visibleGo': true
		},
		'tbodyRow':{
			'zebra':true
		},
		'tbodyData':{
			'enabled':true,  /*是否传入表格数据*/
			'source':Eip_details /*传入的表格数据*/
		}
	});
	
	//$('#testtable5').yhhDataTable({
	//	'tbodyRow':{
	//		'write':function(d){ /*表格生成每行数据的方法*/
	//			return that.drawRow(d);
	//		}
	//	},
    //	'paginate':{
    //		'visibleGo': true, /*是否开启直接翻至某页功能*/
    //		'type':'full', /*默认按钮样式递增（numbers只有数字按钮，updown增加上下页按钮，full增加首尾页按钮）*/
    //		'displayLen':10,  /*每页显示条数*/
    //		'currentPage':1 /*当前页码（初始页码）*/ 
   // 	},
    //	'serverSide': true, /*是否从服务器获取数据*/  
    	/*ajax参数*/ 
    //	'ajaxParam': {
	//		'url':projectHttpAjax.baseUrl + listActionName, /*url地址*/
	//		'type':'GET', /*ajax传输方式*/
	//		'dataType':'jsonp', /*ajax传送数据格式*/
	//		'jsonp':'callback', /*dataType是jsonp的时候，传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名*/
	//		'jsonpCallback':'jsonpCallBack', /*dataType是jsonp的时候，自定义的jsonp回调函数名称*/
	//		'data':data /*传到服务器的数据*/
	//	},
	//	'sendDataHandle':function(d){
	//		d.pageNumber = d.currentPage;
	//		delete d.currentPage;
	//		d.pageCount = d.displayDataLen;
	//		delete d.displayDataLen;
	//		console.log('检索结果入参：' + JSON.stringify(d));
	//		return d;
	//	},  /*传递到服务器的数据预处理方法*/
	//	'backDataHandle':function(d){
	//		console.log('检索结果出参：' + JSON.stringify(d));
	//		var r = {'errFlag':false,'errMsg':'','dataLen':0,'data':[],'origData':null};
	//		if (d == null) {
	//			r.errFlag=true,r.errMsg=_ERR_MSG;
	//		} else if (d.flag != '0') {
	//			r.errFlag=true,r.errMsg=d.message;
	//		} else {
	//			r.errMsg=d.message,r.dataLen=d.data.totalCount,r.data=d.data.list;
	//			r.origData=d.data;
	//		}
	//		return r;
	//	},  /*预处理从服务器的接收数据或者js传入的数据*/
    //	'beforeShow':function(){loadingDialog.show();},  /*显示之前的额外处理事件*/
    //	'afterShow':function(errFlag,errMsg,dataLen,listData){
    //		loadingDialog.hide();
    //		if (errFlag) {
    //			$page.find('.recorder-counts').text(0);
    //			msgDialog.show(errMsg);
    //		} else {
    //			$page.find('.recorder-counts').text(listData.totalCount);
    //			$table.find('.operation-btn').button();
    //			$table.find('.disable-operation-btn').button().button('disable');
    //		}
    //		$table.find('.results-checkbox-all').removeClass('fa-check-square-o').addClass('fa-square-o');
    //	}  /*显示之后的额外处理事件*/
	//});*/
	
	/*更新表格*/ 
	var refreshTable = function(data,page){
			if ($.isEmptyObject(data)) data = {};
			var toData = {
				'ajaxParam':{'data':data}
			}
			if (!$.isEmptyObject(page)){
				toData.paginate = {};
				toData.paginate.currentPage = page;
			}
			var $table = $page.find('.result-list');
			$table.yhhDataTable('refresh',toData);
		}
});