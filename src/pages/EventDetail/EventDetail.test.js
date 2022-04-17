import EventDetail from './EventDetail';
import {shallow} from 'enzyme';
import { useParams } from 'react-router-dom';
import  {useFetch} from '../../utils/FetchApi/useFetch';
import * as React from "react";

jest.mock('react-router-dom', () => {
    const spy = jest.fn()
    return {
      ...jest.requireActual('react-router-dom'),
      useParams: spy
    }
  });
  jest.mock('../../utils/FetchApi/useFetch', ()=>{
    const spy = jest.fn();
    return {
        __esModule: true,
    ...jest.requireActual('../../utils/FetchApi/useFetch'),
    useFetch: spy,
    }
});

describe('EventDetailPage', ()=>{
    it('should display loading till data is fetched', ()=>{
        useParams.mockImplementationOnce(() => ({
            id: '1'
          }));
         
    useFetch.mockImplementationOnce(()=>({
        data: null, 
        loading: true,
        error: null
    }));
        const wrapper = shallow(<EventDetail/>);
        const loadingDiv = wrapper.find('.loading');
        expect(loadingDiv.text()).toBe("Loading...");
        });

    it('should display the event deatils for an id', ()=>{
            useParams.mockImplementationOnce(() => ({
                id: '1'
              }));
             
        useFetch.mockImplementationOnce(()=>({
            data: {
                events: [
                    {
                        name: 'IPL',
                        description: 'Cricket League',
                        start_datetime: 'April 2022'
                    }
                ]
            }, 
            loading: false,
            error: null
        }));
        const wrapper = shallow(<EventDetail/>);
        const loadingDiv = wrapper.find('.loading');
        const name = wrapper.find('.name');
        const desc = wrapper.find('.desc');
        const startTime = wrapper.find('.startTime');
        expect(name.text()).toBe("Event Name: IPL ");
        expect(desc.text()).toBe("Event Description: Cricket League ");
        expect(startTime.text()).toBe("Start Time: April 2022 ");
        expect((loadingDiv).exists()).toBe(false);
    });

    it('should display Error with a failing newwork request', ()=>{
        useParams.mockImplementationOnce(() => ({
            id: '1'
          }));
         
    useFetch.mockImplementationOnce(()=>({
        data: null, 
        loading: false,
        error: 'Something went wrong'
    }));
        const wrapper = shallow(<EventDetail/>);
        const errorDiv = wrapper.find('.error-container');
        expect(errorDiv.text()).toBe("Something went wrong");
        });

})