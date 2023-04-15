export default function two_crystal_balls(breaks: boolean[]): number {

	// if you go half and half everytime and you've to come back to last valid state and then linearly traverse it,
	// it's still O(N)
	// whereas if you go sqrt(len) at a time and then come back to last valid pos, it's O(sqrt(N))

	// we've two balls, one we'll use to find the first invalid state (and that
	// ball breaks), now we traverse from last valid state (using another ball) up until we encouter
	// the invalid state

	let jump = Math.floor(Math.sqrt(breaks.length))  // don't just typecast floor to int (maybe that's not how it's done in TS)

	let i = jump;
	for (; i < breaks.length; i += jump) {
		if (breaks[i]) {  // invalid state encountered
			break;
		}
	}
	// get back to the valid state
	i -= jump;

	for (let j = i; j < i + jump && j < breaks.length; j++) {
		if (breaks[j]) {
			return j--;
		}
	}

	return -1;  // apparently this represents some failure

}
