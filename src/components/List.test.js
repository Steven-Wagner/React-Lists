import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('list component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List  Cards={[{ title: 'First card', content: 'lorem ipsum', id: 'a' }]}
        key="1"
        header="First list"/>, div);
        ReactDOM.unmountComponentAtNode(div);
        });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List Cards={[{ title: 'First card', content: 'lorem ipsum', id: 'a' }]}
                    key="1"
                    header="First list"/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})