import { shallow } from 'enzyme';
import Header from './Header';
import * as React from "react";

describe('Header Component', ()=>{
    it('should display `Popular Events` Link', ()=>{
        const wrapper = shallow(<Header/>);
        const link = wrapper.find('Link');
        expect(link.text()).toBe('Popular Events');
    });
    it('should render Link to homepage', ()=>{
        const wrapper = shallow(<Header/>);
        const link = wrapper.find('Link');
        expect(link.at(0).props().to).toBe('/');
    });
})
