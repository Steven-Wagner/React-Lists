import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('cards component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
        });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card title='first card'
                    content='lorum ibsum'
                    key='a'/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})