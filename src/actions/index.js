exports saveHours = (slot, hours) =>  axios.post('/savehours', {slot, hours}, {headers:{'Authorization':'JWT' + localStorage.getItem('token')}})
