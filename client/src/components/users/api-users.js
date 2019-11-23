const list = () => {
	return fetch('/api/v1/users/', {
		method: 'GET',
		})
		.then(response => {
			return response.json()
	})
	.catch((err) => console.log(err))
}

const read = (params, credentials) => {
	return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/users/' + params.id, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + credentials.t
			}
	})
		.then((response) => {
			return response.json()
	}).catch((err) => {
			console.log(err)
	})
}

const remove = (params, credentials) => {
	return fetch('/api/users/' + params.userId, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + credentials.t
	}
		}).then((response) => {
			return response.json()
		}).catch((err) => {
			console.log(err)
	})
}

const update = (params, credentials, user) => {
  return fetch('/api/users/' + params.userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: user
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

export { list, read, update, remove }