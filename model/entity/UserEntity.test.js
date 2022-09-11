import UserEntity from "./UserEntity";

test('User Obj to Class',function(){
    const obj = {name:'Test User',login:'t@t.com',password:'123456',permission:1};
    const user = new UserEntity(obj);
    expect(user.name).toBe(obj.name);
    expect(user.login).toBe(obj.login);
});
test('User class instance to plain obj',function(){
    const user = new UserEntity({name:'Test User',login:'t@t.com',password:'123456',permission:1});
    const obj = user.toObj();
    expect(obj.name).toBe(user.name);
});
test('Empty User instance',function(){
    const user = new UserEntity();
    expect(user.name).toBeUndefined();
    expect(user.login).toBeUndefined();
});
