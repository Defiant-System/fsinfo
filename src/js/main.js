
const fsinfo = {
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
		};

		// window height should obey contents height
		window.height = "auto";
	},
	dispatch(event) {
		let Self = fsinfo,
			el;
		switch (event.type) {
			// system events
			case "window.open":
				break;
			// custom events
			case "show-item-info":
				Self.els.content.prop({ className: `kind-${event.parsed.kind}` });
				console.log(event);
				break;
			case "toggle-wrapper":
				event.el.toggleClass("expanded", event.el.hasClass("expanded"));
				break;
		}
	}
};

window.exports = fsinfo;
