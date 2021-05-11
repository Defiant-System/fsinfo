
const Section = {
	sharing:  @import "modules/sharing.js",
	openWith: @import "modules/openWith.js",
};

const fsinfo = {
	init() {
		// fast references
		this.content = window.find("content");

		// defiant.shell("fs -r ~/Desktop")
		// defiant.shell("fs -r ~/Applications/Solitaire")
		defiant.shell("fs -r ~/Desktop/coast.jpg")
		// defiant.shell("fs -r ~/Desktop/file-1.txt")
			.then(command => {
				fsinfo.dispatch({ type: "show-item-info", parsed: command.result });
			});

		// window height should obey contents height
		window.height = "auto";
	},
	dispatch(event) {
		let Self = fsinfo,
			view,
			el;
		switch (event.type) {
			// system events
			case "window.open":
				break;
			// custom events
			case "show-item-info":
				// window title
				window.title = event.parsed.base +" Info";

				// render content
				window.render({
					template: "content",
					target: Self.content,
					path: event.parsed.path,
				});

				// setTimeout(() => {
				// 	Self.content.find(".option-buttons_ > span:nth(0)").trigger("mousedown");
				// }, 1000);
				break;
			case "toggle-wrapper":
				event.el.toggleClass("expanded", event.el.hasClass("expanded"));
				break;
			default:
				// proxy event to section module
				el = event.target ? $(event.target) : event.el;
				if (!event.el && event.origin) el = event.origin.el;
				if (el) view = el.parents("[data-section]").data("section");
				if (view) Section[view].dispatch(event);
		}
	}
};

window.exports = fsinfo;
