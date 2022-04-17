import React from 'react';
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
// import reactRouterDom from './__mocks__/react-router-dom';
import App from './app';

describe('testing app', ()=>{
    it("should render Events page as landing page", ()=>{
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/']}>
                <App></App>
            </MemoryRouter>
        );
        let eventsPage = getByTestId("events");
        expect(eventsPage).toBeInTheDocument();
    });

    it("should redirect to EventDetail page when event/id is provided", ()=>{
        const { getByTestId } = render(
            <MemoryRouter initialEntries={[`/event/123`]}>
                <App></App>
            </MemoryRouter>
        );
        let eventDetail = getByTestId("eventDetail");
        expect(eventDetail).toBeInTheDocument();
    });

    it("Should render page header and PageNotFound for invalid route", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/impressum']}>
                <App></App>
            </MemoryRouter>
        );
        let pageNotFound = getByTestId("pageNotFound");
        expect(pageNotFound).toBeInTheDocument();
    })
});