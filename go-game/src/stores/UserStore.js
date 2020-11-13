import { extendObservable } from 'mobx';

/**
*UserStore
*/
class UserStore {
  constructor() {
    extendObservable(this,{
      loading:true,
      isloggedIn: false,
      username: ''
    })
  }
}

export default new UserStore();
