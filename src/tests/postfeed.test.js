import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Postfeed from '../components/postfeed';
import Post from "../components/postfeed";


describe ('Postfeed component', () => {
    let wrapper; 
    beforeEach(() => { 
        wrapper = shallow(<Postfeed />);
    });
    

    it('Postfeed renders as a div', () => {
        expect(wrapper.type()).toBe('div');
    });

    it("Postfeed renders 5 Posts inside of it", () => {
        expect(wrapper.find('Post')).toHaveLength(5);
    });
});