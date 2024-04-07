import axios from 'axios'

// Data to be populated (JSON)
const items: any = []

// Length of the JSON data
const total = items.length

// Progress tracker
let i = 1

// Interval in milliseconds
const interval = 2500

// Full URL to make request to
const url = ''

// Header token
const token = ''
const Authorization = 'Bearer ' + token

// Function that loops over the data and makes requests
const sendRequests = async () => {
	for (const item of items) {
		try {
			await makeRequest(item)
			console.log('Progress: ', i++, '/', total)
		} catch (err) {
			console.log(err)
		}
		await new Promise((resolve) => setTimeout(resolve, interval))
	}
}

// Makes individual requests
const makeRequest = async (data: any) => {
	try {
		await axios.request({
			method: 'post',
			maxBodyLength: Infinity,
			url,
			headers: {
				'Content-Type': 'application/json',
				Authorization,
			},
			data: JSON.stringify(data),
		})
	} catch (error) {
		console.log(error)
	}
}

console.log('Total items: ', total)
sendRequests()
