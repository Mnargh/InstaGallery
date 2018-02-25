import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />)

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe ('testing App component', () => { 
   let wrapper;  
   beforeEach(() => { wrapper = shallow(<App />);
   }); 
   
   it('App renders as a div', () => {    
     expect(wrapper.type()).toBe('div');  
    });

   it('App renders a Postfeed', () => {
    expect(wrapper.find('Postfeed')).toHaveLength(1);
   });
});
