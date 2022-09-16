import {expect, jest, test} from '@jest/globals';
import UserController from './UserController';
import UserDao from '../model/dao/UserDaoLocal';

let controller = null;
jest.mock('../model/dao/UserDaoLocal'); // All calls to UserDaoLocal will be mocked
const testData = [{name:'Jane Test',login:'t@t.com',password:'123456'}];

beforeEach(function(){
    controller = new UserController(true);
});
test('Register User when it does not exists',async function(){
    const newuser = {...testData[0]};
    //In the code bellow I am defining the behavior for when 
    //the controller calls dao.readOne to return null 
    // (i.e., when it does not find an user with this login already)
    controller.dao.readOne = jest.fn(obj=>null);
    // obj=>null is a short hand for function(obj){return null;}

    controller.dao.create = jest.fn(obj=>newuser);

    const registered = await controller.registerNewUser(newuser);
    expect(controller.dao.readOne).toHaveBeenCalled();  
    expect(controller.dao.create).toHaveBeenCalled();  
    expect(registered.name).toBe(newuser.name);
    expect(registered.permission).toBe(2);
});
test('Register User when it already exists',async function(){
    const newuser = {...testData[0]};
    
    controller.dao.readOne = jest.fn(obj=>newuser);

    const registered = await controller.registerNewUser(newuser);
    expect(controller.dao.readOne).toHaveBeenCalled();  
    expect(controller.dao.create).not.toHaveBeenCalled();  
    expect(registered).toBeNull();
});