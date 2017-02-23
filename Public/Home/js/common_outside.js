/**
* 埋点统一方式
*	typeK: 传入的参数1
*   typeV: 传入的参数2
*   locationUrl: 传入的参数3
**/
function commonStatistics(typeK,typeV,locationUrl){
	var posetype="1";
	if(typeK=='linkPosition') {
		posetype ="1";
	}else if(typeK=='buttonPosition'){
		posetype ="2";
	}else if(typeK=='pmId'){
		posetype = "3";
	}
	
	// 如果有url，则证明是页面跳转，否则本页内发生跳转
	if(locationUrl != null && locationUrl != ''){
		addTrackPositionToCookie(posetype,typeV);
		window.location = locationUrl;
	}else{
		gotracker(posetype,typeV,null);
	}
} 