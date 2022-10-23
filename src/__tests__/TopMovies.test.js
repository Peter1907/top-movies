import renderer from 'react-test-renderer';
import TopMovies from '../_mocks_/TopMovies';

it('renders correctly', () => {
  const tree = renderer
    .create(<TopMovies />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
