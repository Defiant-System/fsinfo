
const fsinfo = {
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
		};

		// defiant.shell("fs -r ~/Desktop")
		// defiant.shell("fs -r ~/Applications/Calculator")
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
				window.title = event.parsed.base;
				// 
				// Self.els.content.find(".value-name").html(event.parsed.name);

				window.render({
					template: "head-content",
					target: Self.els.content.find(".head"),
					path: event.parsed.path,
				});

				window.render({
					template: "general-wrapper",
					target: Self.els.content.find(".wrapper.general"),
					path: event.parsed.path,
				});

				window.render({
					template: "open-with-wrapper",
					target: Self.els.content.find(".wrapper.open-with"),
					path: event.parsed.path,
				});

				window.render({
					template: "preview-wrapper",
					target: Self.els.content.find(".wrapper.preview"),
					path: event.parsed.path,
				});

				window.render({
					template: "sharing-wrapper",
					target: Self.els.content.find(".wrapper.sharing"),
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
