import React from 'react';
import renderer from 'react-test-renderer';
import Header, { DEFAULT_HEADER_TEXT } from "../Header";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

/*
describe('Header', () => {
    test('renders default header text', () => {
        const component = renderer.create(
            <Header />
        );

        const tree = component.toJSON();
        const firstChild = tree.children[0];

        console.log(component);
        console.log(tree);

        expect(firstChild).toBe(DEFAULT_HEADER_TEXT);
    });

    test('renders provided header text', () => {
        const headerText = 'Testing';

        const component = renderer.create(
            <Header text={headerText} />
        );

        const tree = component.toJSON();
        const firstChild = tree.children[0];

        expect(firstChild).toBe(headerText);
    });
});
 */

describe('Header Unit test', () => {
    test('renders default header text', () => {
        const wrapper = shallow(
            <Header/>
        );

        console.log(wrapper);

        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.contains(DEFAULT_HEADER_TEXT)).toBe(true);
    });

    test('renders provided header text', () => {
        const headerText = 'Testing';

        const wrapper = shallow(
            <Header text={headerText} />
        );

        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.contains(headerText)).toBe(true);
    });
});

describe('Header Snapshot test', () => {
    test('renders default header text', () => {
        const component = renderer.create(
            <Header/>
        );

        const tree = component.toJSON();

        expect(tree)
            .toMatchSnapshot();
    });

    test('renders provided header text', () => {
        const headerText = 'Testing';

        const component = renderer.create(
            <Header text={headerText} />
        );

        const tree = component.toJSON();

        expect(tree)
            .toMatchSnapshot();
    });
});
