window.onload=function(){
	$(".inp img:eq(1)").click(function(){
		if($("#keyWord").attr("type")=="password"){
			$("#keyWord").attr("type","text")
		}else {
			$("#keyWord").attr("type","password")
		}
	})
	
}
