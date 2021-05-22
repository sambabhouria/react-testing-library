/* eslint-disable jest/valid-expect */
import React from 'react'
import { shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Foo, Bar} from '../foo-bar'


configure({adapter: new Adapter()});




test(' multiple test', () => {
    // const wrapper = shallow(<Bar />);
    // expect(wrapper.find('.in-foo')).toHaveLength(1);
    // expect(wrapper.find(Foo).render().find('.in-foo')).toHaveLength(1);
})
