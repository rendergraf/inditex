import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Load components
import Player from '../components/Player';

Enzyme.configure({ adapter: new Adapter() });

describe('Player', () => {
    const episode = {
        trackName: 'Test Episode',
        description: 'This is a test episode description',
        episodeUrl:
            'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_603.mp3?dest-id=2422538',
        artworkUrl600: 'https://picsum.photos/200/300',
    };
    it('renders correctly', () => {
        const wrapper = shallow(<Player episode={episode} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('displays the episode name', () => {
        const wrapper = shallow(<Player episode={episode} />);
        expect(wrapper.find('h1').text()).toEqual('Test Episode');
    });

    it('displays the episode description', () => {
        const wrapper = shallow(<Player episode={episode} />);
        expect(wrapper.find('p').prop('dangerouslySetInnerHTML'));
    });

    it('displays the audio player with the correct source', () => {
        const wrapper = shallow(<Player episode={episode} />);
        expect(wrapper.find('source').prop('src')).toEqual(
            'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_603.mp3?dest-id=2422538'
        );
        expect(wrapper.find('source').prop('type')).toEqual('audio/mpeg');
    });
});
