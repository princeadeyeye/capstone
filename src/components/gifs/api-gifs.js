const createGif = ( credentials, formData ) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs', {
    method: 'POST',
    headers: {
      'Content-type': 'multipart/form-data',
      'Authorization': 'Bearer ' + credentials.t
    },
  body: formData
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const update = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const remove = (params, credentials) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/' + params.postId, {
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



const comment = (params, credentials, postId, comment) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/gifs/'+ params.userId +'/comment', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, postId: postId, comment: comment})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const feeds = (params, credentials, postId, comment) => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/feed/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({userId:params.userId, postId: postId, comment: comment})
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}
const list = () => {
  return fetch('https://adeyeyeteamwork.herokuapp.com/api/v1/sample/gifs', {
    method: 'GET',
    })
    .then(response => {
      return response.json()
  })
  .catch((err) => console.log(err))
}

export {
  createGif,
  remove,
  read,
  comment,
  list,
  update,
  feeds
}