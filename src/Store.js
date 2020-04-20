import { observable } from 'mobx'

class Store {
    state = observable({
        manuscripts:[],
        current_page_id: null,
        selected_item: null,
        auth:{
            loggedIn:false
        }
    })
}

const store = new Store()

export default store