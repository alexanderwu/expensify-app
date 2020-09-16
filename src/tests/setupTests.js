import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

Enzyme.configure({
  adapter: new Adapter()
});

DotEnv.config({ path: '.env.test' });
