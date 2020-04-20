import { observable } from 'mobx'

class Store {
    state = observable({
        manuscripts:[],
        selected_item: null,
        auth:{
            loggedIn:false
        }
    })
}

const store = new Store()

export default store