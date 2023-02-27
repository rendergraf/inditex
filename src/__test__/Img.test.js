import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Load components
import Img from '../components/Img';

Enzyme.configure({ adapter: new Adapter() });

describe('Img', () => {
    it('renders an image with the correct props', () => {
        const wrapper = shallow(
            <Img
                src='https://picsum.photos/200/300'
                alt='Test image'
                width={200}
                height={300}
            />
        );

        //se muestra un elemento <s> (Transition) porque estás utilizando react-lazy-load-image-component
        expect(wrapper.find('s').prop('src')).toEqual(
            'https://picsum.photos/200/300'
        );
        expect(wrapper.find('s').prop('alt')).toEqual('Test image');
        expect(wrapper.find('s').prop('width')).toEqual(200);
        expect(wrapper.find('s').prop('height')).toEqual(300);
    });
});
