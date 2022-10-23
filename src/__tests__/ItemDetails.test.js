import renderer from 'react-test-renderer';
import ItemDetails from '../_mocks_/ItemDetails';

it('renders correctly', () => {
  const tree = renderer
    .create(<ItemDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
