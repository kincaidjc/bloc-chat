(function() {
	function ChatroomCtrl(Room, $uibModal) {

		window.foo = Room.all;
		this.rooms = Room.all;


		this.open = function () {
		  	console.log("open() was called")
		    var modalInstance = $uibModal.open({
		      templateUrl: '../templates/modal.html',
		      controller: "ModalCtrl",
		      controllerAs: "modal"
			});
		};

		this.ok = function() {
			console.log('ok was called')
			modalInstance.close();
		};

		this.cancel = function() {
			console.log('cancel was called')
			$uibModalInstance.dismiss('cancel');
		};

	}

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room','$uibModal',  ChatroomCtrl]);
})();