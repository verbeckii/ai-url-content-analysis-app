export function removeHttpHttps(inputString) {
	const regex = /^(https?:\/\/)/i

	if (regex.test(inputString)) {
		const result = inputString.replace(regex, "")
		return result
	}

	return inputString
}
