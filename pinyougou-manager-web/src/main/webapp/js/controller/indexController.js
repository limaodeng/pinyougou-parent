app.controller('indexController',function($scope,loginService){
	
	
	//显示当前用户名
	$scope.showLoginName=function(){
        debugger;
		loginService.loginName().success(
			function(response){
				debugger;
				$scope.loginName=response.loginName;				
			}
		);		
	}
	
	
});