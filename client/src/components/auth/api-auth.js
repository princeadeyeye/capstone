const signin = (user) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/auth/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const signout = () => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/auth/signout/', {
    method: 'GET',
  }).then(response => {
      return response.json()
  }).catch((err) => console.log(err))
}

const createUser = ( credentials, user) => {
  return fetch('http://adeyeyeteamwork.herokuapp.com/api/v1/auth/create-user/', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + credentials.t
  },
    mode: 'no-cors',
    body: JSON.stringify(user)
  })
    .then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}
/*
const list = () => {
  return fetch('/api/users/', {
    method: 'GET',
    })
    .then(response => {
      return response.json()
  })
  .catch((err) => console.log(err))
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
}*/

export { createUser, signin, signout }
