import queries from '../../css/media-queries.json';

export const MQ = (device) => {
	const devices = getDevices();
	let query = devices.find((item) => item.device === device);

	const showWarning = () => {
		notify(`Device "${device}" doesn't exist! Use one of the devices below.`, 'warning');
		showDevices();
	};

	if (query) {
		const breakpoint = query.breakpoint;
		let media = breakpoint;

		query = device.split(/(?=Down|Up)/);

		if (query[1]) {
			switch (query[1]) {
				case 'Up':
					media = `(min-width: ${breakpoint}px)`;
					break;
				case 'Down':
					media = `(max-width: ${breakpoint}px)`;
					break;
				default:
					showWarning();

					return false;
			}
		}

		return window.matchMedia(media).matches;
	} else {
		showWarning();

		return false;
	}
};


export const getDevices = () => Object.keys(queries).reduce((acc, group) => {
	if (group === 'breakpoints') {
		Object.keys(queries[group]).map((device) => {
			acc.push({
				device: `${device}Down`,
				breakpoint: parseInt(queries[group][device] - 1),
			});
			acc.push({
				device: `${device}Up`,
				breakpoint: parseInt(queries[group][device]),
			});
		});
	} else {
		Object.keys(queries[group]).map((device) => {
			acc.push({
				device: device,
				breakpoint: queries[group][device],
			});
		});
	}

	return acc;
}, []);


export const showDevices = () => {
	const devices = getDevices();

	if (console.table) {
		console.table(devices);
	} else {
		console.log(devices.map((item) => `${item.device}: ${item.breakpoint}`));
	}
};


export const getBreakpoint = (device) => {
	const devices = getDevices();
	const query = devices.find((item) => item.device === device);

	return query && query.breakpoint || 0;
};


export const notify = (message, type) => {
	if (type === 'warning') {
		console.log(`%c${message}`, 'font-weight: bold; font-size: 16px; color: red');
	}
};
