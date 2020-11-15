app.controller('brandController',function ($scope,$controller,brandService){

    $controller('baseController',{$scope:$scope});//继承

    $scope.findAll = function () {
        brandService.findAll.success(function (response) {
            $scope.list = response;
        });
    };

    $scope.findPage = function (pageNum,pageSize) {
        brandService.findPage(pageNum,pageSize).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total;
        })
    };

    $scope.findOne = function(id){
        brandService.findOne(id).success(function (response) {
            $scope.entity = response;
        })
    }

    $scope.save = function () {
        var obj = null;
        if ($scope.entity.id != null) {
            obj = brandService.update($scope.entity);
        }else{
            obj = brandService.add($scope.entity);
        }
        obj.success(
            function (response) {
                if (response.success){
                    $scope.reloadList();
                }else {
                    alert($scope.message);
                }
            })
    }

    //批量删除
    $scope.dele=function(){
        //获取选中的复选框
        brandService.dele($scope.selectIds).success(
            function(response){
                if(response.success){
                    $scope.reloadList();//刷新列表
                }
            }
        );
    }

    $scope.searchEntity={};//定义搜索对象
    //条件查询
    $scope.search=function(page,rows){
        brandService.search(page,rows,$scope.searchEntity).success(
            function(response){
                $scope.paginationConf.totalItems=response.total;//总记录数
                $scope.list=response.rows;//给列表变量赋值
            }
        );
    }

});