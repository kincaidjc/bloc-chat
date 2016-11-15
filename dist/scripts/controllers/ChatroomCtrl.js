(function() {
	function ChatroomCtrl(Room) {
		window.foo = Room.all
		this.rooms = Room.all
	}

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', ChatroomCtrl]);
})();