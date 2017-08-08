

Module.register("MMM-empty-space", {
	// Default module config.
	defaults: {
        width: '25%',
        height: '25%',
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style = `width: ${this.config.width}; height: ${this.config.height}`;

		return wrapper;
    },
    
    start: function() {
    },

    // Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
	}
});

