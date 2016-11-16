(function() {
	function ChatroomCtrl(Room, Message, $uibModal, $cookies) {
		var $ctrl = this;
		this.rooms = Room.all;

		this.open = function () {
		  	console.log("open() was called")
		    var modalInstance = $uibModal.open({
		      templateUrl: '../templates/modal.html',
		      controller: "ModalCtrl",
		      controllerAs: "modal"
			});
		};



		this.newChat = function(room) {
			$ctrl.activeRoom = room;
			$ctrl.messages = Room.getMessages(room.$id);
		};

		this.sendMessage = function(room){
					Message.send({
						content: $ctrl.newMessage.content,
						sentAt: Date.now(),
						username: $cookies.get('blocChatCurrentUser'),
						roomId: $ctrl.activeRoom.$id
					})
				};

	}

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', 'Message', '$uibModal', '$cookies',  ChatroomCtrl]);
})();