import React from 'react'
import { shallow, mount, render } from 'enzyme';

import { TestID } from '@resources/TestID'
import {
  AddCategoryButton,
  AddCategoryButtonProps,
} from '@/components/AppSidebar/AddCategoryButton'

describe('<AddCategoryButton />', () => {
  it('Creates A Catagory', () => {
    const enabledProps = {
      handler: jest,
      label: 'Test',
      dataTestID: TestID.ADD_CATEGORY_BUTTON,
    }

    const component = shallow(<AddCategoryButton />)

    expect(component).toBeTruthy()
  })
})