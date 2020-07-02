export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })

    $axios.onResponse(res => {
      console.log(res)
      if(res.data.errno && res.data.errmsg){
        alert(res.data.errmsg)
      }
    })
  }