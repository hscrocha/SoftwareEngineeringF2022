import React from "react";
import UserEntity from "../model/entity/UserEntity";
import UserDao from '../model/dao/UserDaoLocal';
import dbConnect from "../model/LocalDbConnection";

export default class UserController{
    constructor(test = false){
        this.db = dbConnect(test?'test':UserDao.dbName());        
        this.dao = new UserDao(this.db);
    }

    async registerNewUser(userobj){
        if(!userobj.permission) userobj.permission = UserEntity.permNormal;
        if(!userobj.login) userobj.login = userobj.email;

        const exists = await this.findUserByLogin(userobj);
        if(exists==null){
            //The login/email do not exist in the db
            const created = await this.dao.create(userobj);
            return created;
        }
        else{
            //Login already in the database
            return null; //user already registered
        }
    }

    async findUserByLogin(userobj){
        let found = null;
        if(userobj.login) found = await this.dao.readOne({login: userobj.login});
        else if(userobj.email) found = await this.dao.readOne({login: userobj.email});
        return found;
    }
}