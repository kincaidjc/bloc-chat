(function() {
	function newChat(Message) {


		return {
			templateUrl: '../templates/directives/newChat.html',
			replace: true,
			restrict: 'E',
			scope: { },
			link: function(scope, element, attributes) {

			},
			controller: function(Message, Room, $cookies){
				var $ctrl = this;

				this.messages = Message.messages

				this.sendMessage = function(room){
					Message.send({
						content: $ctrl.newMessage.content,
						sentAt: Date.now(),
						username: $cookies.get('blocChatCurrentUser')
					})
				}
			},
			controllerAs: "newChat"
		};
	}

	angular
		.module('blocChat')
		.directive('newChat', ['Message', newChat]);
})();