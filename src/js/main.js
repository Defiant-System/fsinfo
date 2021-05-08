
const fsinfo = {
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
		};

		// defiant.shell("fs -r ~/Desktop")
		// defiant.shell("fs -r ~/Applications/Solitaire")
		// defiant.shell("fs -r ~/Desktop/coast.jpg")
		defiant.shell("fs -r ~/Desktop/file-1.txt")
			.then(command => {
				fsinfo.dispatch({ type: "show-item-info", parsed: command.result });
			});

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
				// window title
				window.title = event.parsed.base +" Info";

				// render content
				window.render({
					template: "content",
					target: Self.els.content,
					path: event.parsed.path,
				});

				// console.log(event);
				break;
			case "toggle-wrapper":
				event.el.toggleClass("expanded", event.el.hasClass("expanded"));
				break;
		}
	}
};

window.exports = fsinfo;
