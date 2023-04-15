export default function bubble_sort(arr: number[]): void {

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			// at the end of each iteration, there will be one (extra) sorted
			// element at the end of array
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}

}
