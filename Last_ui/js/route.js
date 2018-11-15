// PJAX 目标绑定
var x = $(document).pjax('a', '#app')
// $.pjax.defaults.timeout = 1200
// $.pjax.defaults.dataType = "JSON"


// 按下即触发
$(document).on('ready pjax:click', function(event) {
	alert("点击触发")
	// 立即判断 url 激活对应的模板框架, 等待数据填充
	// $.getScript("plugin/Last_Pjax/js/bbs.js")
	// 填充数据, 但是怎样了解已经完成了模板的加载?
})

// 交互完毕后触发
$(document).on('ready pjax:complete', function(event) {
	//alert()
	// 填充数据, 但是怎样了解已经完成了模板的加载?
	// json 是来自 pjax 的全局变量
	if (json.code==0){
		alert(json.code)
		// 若模板已加载完毕, 执行数据填充
	} else {
		// 输出错误信息
		alert(json.message)
	}
})

// 载入成功后初始化监听型 JS 部件
$(document).on('ready pjax:end', function(event) {
	// alert("结束触发")
	// 释放上一页使用的 js 文件 (如果返回呢..)
	// 从返回数据中获得本页要使用的 js 文件列表
	//$.getScript("plugin/Last_Pjax/js/bbs.js");
	//$.getScript("plugin/Last_Pjax/js/avatar.js");
	//$.getScript("plugin/z_highlight/highlight.pack.js");
})


var del = /[^.]*/
var reg = /[^-]*/
var str = location.pathname
str = del.exec(str.substr(str.lastIndexOf("/")+1))
str = reg.exec(str)

// 伪静态下的简单路由
//if (str=="index") $.getScript("plugin/Last_ui/js/index.js")

