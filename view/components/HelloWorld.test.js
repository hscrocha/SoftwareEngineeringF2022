import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from "./HelloWorld";

test('Hello World Comp. Snapshot Test',function(){
    const rnElement = renderer.create(<HelloWorld />).toJSON();
    expect(rnElement).toMatchSnapshot();
});