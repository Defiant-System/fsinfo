
const fsinfo = {
	init() {
		// fast references
		this.content = window.find("content");

		// window height should obey contents height
		window.height = "auto";
	},
	dispatch(event) {
		switch (event.type) {
			case "window.open":
				break;
			case "toggle-wrapper":
				event.el.toggleClass("expanded", event.el.hasClass("expanded"));
				break;
		}
	}
};

window.exports = fsinfo;
