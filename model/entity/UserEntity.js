export default class UserEntity{
    //Standard class attributes
    name;
    login;
    password;
    permission;

    static permNormal = 2; //Permission for Normal user
    static permAdmin = 1; //Permission for Adm

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