import App from '../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';


it("renders without crashing", () => {
  shallow(<App />);
});

it('should exist', function () {
  assert.isDefined(App);
});