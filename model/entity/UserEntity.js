export default class UserEntity{
    //Standard class attributes
    name;
    login;
    password;
    permission;

    constructor(userObj){
        if(userObj!==undefined){
            Object.assign(this, userObj);
        }
    }
    toObj(){
        const {...obj} = this;
        return obj;
    }
}