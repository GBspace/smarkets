import Event from './Event';
import {shallow} from 'enzyme';
import * as React from "react";
import {customTheme} from '../../theme';
import toJson from 'enzyme-to-json';

describe('EventComponent', ()=>{
    it('renders correctly', () => {
        const wrapper = shallow(<Event id={1} theme={customTheme}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });

    it('should trigger the router link on being clicked',()=>{
        const wrapper = shallow(<Event id={1}/>);
        const link = wrapper.find('Link');
        expect(link.at(0).props().to).toBe('/event/1');
    });
})