
const fsinfo = {
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
		};

		// defiant.shell("fs -r ~/Desktop")
		defiant.shell("fs -r ~/Applications/Calculator")
		// defiant.shell("fs -r ~/Desktop/coast.jpg")
			.then(command => {
				// console.log( command.result.xNode.xml );
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
				Self.els.content.find(".value-name").html(event.parsed.name);

				window.render({
					template: "general-wrapper",
					data: event.parsed.xNode,
					target: Self.els.content.find(".general.wrapper"),
				});

				console.log(event);
				break;
			case "toggle-wrapper":
				event.el.toggleClass("expanded", event.el.hasClass("expanded"));
				break;
		}
	}
};

window.exports = fsinfo;
