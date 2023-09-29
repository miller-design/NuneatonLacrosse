/*
  utility functions to be used across project
*/
export const createImageSrcSizes = (data: number[]) => {
	/*
    Function is used to convert an array of numbers into a
    string that can be usesd on the next image sizes attribute.
    Values are provied in the order of [mobile, tablet, desktop]
    for example: [100, 50, 25]
    will become: (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  */
	let string = ``
	const bps = [`(max-width: 768px)`, `(max-width: 1200px)`, ``]

	if (data.length === 0) {
		// no values have been supplied
		console.log(`no sizes have been provided`)
	} else if (data.length > 3) {
		// too many values have been supplied
		console.log(`to many sizes have been provied, please limit to 3`)
	} else {
		// get last index from array
		const lastIndex = data.length - 1
		// loop over the array and prepend sizes info based on the array count
		for (let i = 0; i < data.length; i++) {
			// if is last index then we dont need bp data to be prepended
			if (i != lastIndex) {
				string += `${bps[i]} ` + data[i] + `vw, `
			} else {
				string += data[i] + `vw`
			}
		}

		return string
	}
}
