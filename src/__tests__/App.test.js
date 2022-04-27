import App from '../App';  
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div div div');
    expect(wrapper.find('div div div').text()).to.have.string('This is some text');
  })
})

it("renders without crashing", () => {
  shallow(<App />);
});

it('should exist', function () {
  assert.isDefined(App);
});