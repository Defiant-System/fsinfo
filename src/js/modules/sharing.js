
// Section.sharing

{
	dispatch(event) {
		let Self = Section.sharing,
			value;
		switch (event.type) {
			case "unlock-actions":
				isOn = event.el.hasClass("icon-padlock-open");
				event.el.toggleClass("icon-padlock-open", isOn);
				break;
			case "users.select-user":
				console.log(event.arg);
				break;
			case "remove-user":
				console.log(event);
				break;
			case "set-privelege":
				value = event.xMenu.getAttribute("name");
				event.origin.el.nextAll("span").html(value);
				// handle event argument
				switch (event.arg) {
					case "read-write":
					case "read-only":
					case "no-access":
						break;
				}
				break;
		}
	}
}
