import PasswordUtil from "./PasswordUtil";

test('Hashing and Comparing a password',function(){
    let mypass = "TestingPassword";
    let hashedpass = PasswordUtil.hash(mypass);
    let comparison = PasswordUtil.compare(mypass,hashedpass);
    expect(comparison).toBeTruthy();
});
test('Comparing a wrong password',function(){
    let mypass = "TestingPassword";
    let hashedpass = PasswordUtil.hash(mypass);
    let comparison = PasswordUtil.compare('something else',hashedpass);
    expect(comparison).toBeFalsy();
});