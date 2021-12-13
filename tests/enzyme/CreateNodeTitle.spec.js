import React from 'react'
import { shallow, mount, render } from 'enzyme';
import App from '../../src/client/components/NoteList/ContextMenuOption';



import { EmptyEditor } from '@/components/Editor/EmptyEditor'

describe('<EmptyEditor />', () => {
  it('renders the EmptyEditor component', () => {
    const component = shallow(<EmptyEditor />)

    expect(component).toBeTruthy()
  })

  it('renders the EmptyEditor component and its texts', () => {
    const component = shallow(<EmptyEditor />)

  })
})
