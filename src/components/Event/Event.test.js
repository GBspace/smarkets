import Event from './Event';
import {shallow} from 'enzyme';
import * as React from "react";

describe('EventComponent', ()=>{
    it('should trigger the router link on being clicked',()=>{
        const wrapper = shallow(<Event id={1}/>);
        const link = wrapper.find('Link');
        expect(link.at(0).props().to).toBe('/event/1');
    });
})