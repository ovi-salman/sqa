import React from 'react'
import {  screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'

import { TestID } from '@resources/TestID'
import { EmptyEditor } from '@/components/Editor/EmptyEditor'
import { shallow, mount, render } from 'enzyme';

describe('<EmptyEditor />', () => {
  it('renders the EmptyEditor component', () => {
    const component = render(<EmptyEditor />)

    expect(component).toBeTruthy()
  })


})