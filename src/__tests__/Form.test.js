import App from '../App';
import Form from '../components/Form';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Form', () => {
  it('should show text', () => {
    const wrapper = shallow(<Form />);
    const text = wrapper.find('div div Link');
    expect(text.text()).toBe('Login');
  })
})

it("renders without crashing", () => {
  shallow(<App />);
});

it('should exist', function () {
  assert.isDefined(App);
});