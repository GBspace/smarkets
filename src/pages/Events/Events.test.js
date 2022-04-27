import Events from './Events';
import EventDetail from '../EventDetail/EventDetail';
import * as React from "react";
import {shallow} from 'enzyme';
import  {useFetch} from '../../utils/FetchApi/useFetch';
import {customTheme} from '../../theme';
import toJson from 'enzyme-to-json';

  jest.mock('../../utils/FetchApi/useFetch', ()=>{
    const spy = jest.fn();
    return {
        __esModule: true,
    ...jest.requireActual('../../utils/FetchApi/useFetch'),
    useFetch: spy,
    }
});

describe('EventsPage', ()=>{
    it('renders correctly when events are fetched', () => {
        useFetch.mockImplementationOnce(()=>({
            data: {
                popular_event_ids: [1,2,3]
            }, 
            loading: false,
            error: null
        }));
        const wrapper = shallow(<Events theme={customTheme}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should display loading till data is fetched', ()=>{
        useFetch.mockImplementationOnce(()=>({
            data: null, 
            loading: true,
            error: null
        }));
        const wrapper = shallow(<Events/>);
        const loadingDiv = wrapper.find('.loading');
        expect(loadingDiv.text()).toBe("Loading...");
        });

    it('should display the events', ()=>{
        useFetch.mockImplementationOnce(()=>({
            data: {
                popular_event_ids: [1,2,3]
            }, 
            loading: false,
            error: null
        }));
        const wrapper = shallow(<Events/>);
        const loadingDiv = wrapper.find('.loading');
        const eventComponent = wrapper.children().find('Event');
        expect(eventComponent).toHaveLength(3);
        expect((loadingDiv).exists()).toBe(false);
    });

    it('should display the message in case of no events are scheduled', ()=>{
        useFetch.mockImplementationOnce(()=>({
            data: {
                // popular_event_ids: []
            }, 
            loading: false,
            error: null
        }));
        const wrapper = shallow(<Events/>);
        const loadingDiv = wrapper.find('.loading');
        const eventComponent = wrapper.children().find('Event');
        expect(eventComponent).toHaveLength(0);
        expect((loadingDiv).exists()).toBe(false);
    });

    it('should display Error with a failing newwork request', ()=>{
        useFetch.mockImplementationOnce(()=>({
            data: null, 
            loading: false,
            error: 'Something went wrong'
        }));
        const wrapper = shallow(<Events/>);
        const errorDiv = wrapper.find('.error-container');
        expect(errorDiv.text()).toBe("Something went wrong");
    });
})