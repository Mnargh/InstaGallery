import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Postfeed from '../components/postfeed';

describe ('Postfeed component', () => {
    let wrapper; 
    beforeEach(() => { wrapper = shallow(<Postfeed />);
    });

    it('Postfeed renders as a div', () => {
        expect(wrapper.type()).toBe('div');
    });
});