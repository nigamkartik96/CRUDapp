app.controller("myctrl",function($scope,crudfactory){
	$scope.id = crudfactory.getId();
	$scope.numberSelected = 0;
	$scope.add = function(){
		var desc = $scope.desc;
		var author = $scope.author;
		crudfactory.add(desc,author);
		$scope.noteList = crudfactory.getList();
		$scope.id = crudfactory.getId();
	}
	$scope.delete1 = function(){
		$scope.numberSelected = crudfactory.delete1($scope.numberSelected);
		$scope.noteList = crudfactory.getList();
		$scope.id = crudfactory.getId();
	}
	$scope.countSelected = function(){
		$scope.numberSelected = crudfactory.countSelected();}
	//$scope.numberSelected = crudfactory.countSelected();
	$bluer = false;
	$scope.handleClick = function(event){
		$bluer = !$bluer;
	}
});
