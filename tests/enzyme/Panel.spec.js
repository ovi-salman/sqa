import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../../src/client/components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
});
