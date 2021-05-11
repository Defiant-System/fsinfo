
// Section.sharing

{
	dispatch(event) {
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
				// read-write
				// read-only
				// no-access
				break;
		}
	}
}
