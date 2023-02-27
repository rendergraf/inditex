import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Load components
import Card from '../components/Card';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
    it('renders the podcast data correctly', () => {
        const podcast = {
            id: { attributes: { 'im:id': 123 } },
            'im:image': [
                undefined,
                undefined,
                { label: 'https://picsum.photos/200/300' },
            ],
            'im:artist': { label: 'Pepetueno' },
            'im:name': { label: 'Podcast de Pepetueno' },
            summary: { label: 'Descripción del podcast' },
        };
        const wrapper = shallow(<Card podcast={podcast} />);

        expect(wrapper.find('h2').text()).toEqual('Podcast de Pepetueno');
        expect(wrapper.find('h3').text()).toEqual('by Pepetueno');
        expect(wrapper.find('p').text()).toEqual('Descripción del podcast');
        expect(wrapper.find('Img').prop('src')).toEqual(
            'https://picsum.photos/200/300'
        );
        expect(wrapper.find('Styled(Link)').prop('to')).toEqual('/podcast/123');
    });
});
