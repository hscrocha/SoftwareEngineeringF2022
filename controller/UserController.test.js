import {expect, jest, test} from '@jest/globals';
import UserController from './UserController';
import UserDao from '../model/dao/UserDaoLocal';

let controller = null;
jest.mock('../model/dao/UserDaoLocal');

beforeEach(function(){
    controller = new UserController(true);
});
test('Register User',async function(){
    const newuser = {name:'Jane Test',login:'t@t.com',password:'123456'}

    const registered = controller.registerNewUser(newuser);
    expect(UserDao.create).toHaveBeenCalled();  
});