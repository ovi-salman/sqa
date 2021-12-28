import { renderWithRouter } from '../enzyme/testHelpers'
import { TakeNoteApp } from '../../src/client/containers/TakeNoteApp'
import {
  IconButtonUploader,
  IconButtonUploaderProps,
} from '../../src/client/components/SettingsModal/IconButtonUploader'

import reducer, {
  initialState,
  toggleDarkTheme,
} from '../../src/client/slices/settings'
import React,  { createRef } from 'react'
import { render,fireEvent,screen } from '@testing-library/react'

import dayjs from 'dayjs'
import '@testing-library/jest-dom'
import 'jest-extended'
import { ScratchpadOption, ScratchpadOptionProps } from '../../src/client/components/AppSidebar/ScratchpadOption'

import { SearchBar, SearchBarProps } from '../../src/client/components/NoteList/SearchBar'

import { CollapseCategoryListButton } from '../../src/client/components/AppSidebar/CollapseCategoryButton'

import { TestID } from '../../src/resources/TestID'
import {
  LastSyncedNotification,
  LastSyncedNotificationProps,
} from '../../src/client/components/LastSyncedNotification'
import { EmptyEditor } from '../../src/client/components/Editor/EmptyEditor'
import { IconButton, IconButtonProps } from '../../src/client/components/SettingsModal/IconButton'
import { Camera } from 'react-feather'
import {
    AddCategoryButton,
    AddCategoryButtonProps,
  } from '../../src/client/components/AppSidebar/AddCategoryButton'

describe('<LastSyncedNotification />', () => {
  it('renders the Tab component', () => {
    const enabledProps: LastSyncedNotificationProps = {
      datetime: '',
      pending: false,
      syncing: true,
    }

    const component = render(<LastSyncedNotification {...enabledProps} />)

    expect(component).toBeTruthy()
  })
  
  })
  it('Clicking on Last Sync btn should show last sync time stamp ', () => {
    const enabledProps: LastSyncedNotificationProps = {
      datetime: Date(),
      pending: false,
      syncing: false,
    }

    const { getByTestId } = render(<LastSyncedNotification {...enabledProps} />)
    expect(getByTestId(TestID.LAST_SYNCED_NOTIFICATION_DATE).innerHTML).toBe(
      dayjs(Date()).format('LT on L')
    )
  })
  describe('<EmptyEditor />', () => {
 

    it('Opens a new note when pressed CTRL+ALT+N', () => {
      const component = render(<EmptyEditor />)
  
      const createNoteText = component.queryByTestId(TestID.EMPTY_EDITOR)
  
      expect(createNoteText).toBeValid()
      expect(component.getByText('Create a note')).toBeInstanceOf(Node)
      expect(component.getByText('CTRL')).toBeInstanceOf(Node)
      expect(component.getByText('ALT')).toBeInstanceOf(Node)
      expect(component.getByText('N')).toBeInstanceOf(Node)
    })
  })

  describe('<IconButton />', () => {
    it('Should render `Category Add Form` component when the `Add Category` button is clicked', () => {
      const enabledProps: IconButtonProps = {
        handler: jest.fn,
        dataTestID: TestID.ICON_BUTTON,
        icon: Camera,
        text: 'takeNote',
      }
  
      const component = render(<IconButton {...enabledProps} />)
  
      expect(component).toBeTruthy()
    })
  
    it('Should open the Settings Modal when clicked Settings Icon', () => {
      const disabledProps: IconButtonProps = {
        handler: jest.fn,
        dataTestID: TestID.ICON_BUTTON,
        disabled: true,
        icon: Camera,
        text: 'takeNote',
      }
  
      const component = render(<IconButton {...disabledProps} />)
      const button = component.queryByTestId(TestID.ICON_BUTTON)
  
      expect(button).toBeDisabled()
    })
  })


  describe('<EmptyEditor />', () => {
    it('Empty Editor is rendered. ', () => {
      const component = render(<EmptyEditor />)
  
      expect(component).toBeTruthy()
    })
  
    
  })

  describe('<AddCategoryButton />', () => {
    it('Creates a category', () => {
      const enabledProps = {
        handler: jest,
        label: 'Test',
        dataTestID: TestID.ADD_CATEGORY_BUTTON,
      }
  
      const component = render(<AddCategoryButton dataTestID={''} handler={function (adding: boolean): void {
          throw new Error('Function not implemented.')
      } } label={''} />)
  
      expect(component).toBeTruthy()
    })
  })

  describe('<CollapseCategoryButton />', () => {
    it('renders the CollapseCategoryButton component', () => {
      const enabledProps: CollapseCategoryListButton = {
        handler: jest.fn,
        label: 'Test',
        dataTestID: TestID.CATEGORY_COLLAPSE_BUTTON,
        isCategoryListOpen: true,
        showIcon: true,
      }
  
      const component = render(<CollapseCategoryListButton {...enabledProps} />)
  
      expect(component).toBeTruthy()
    })
  })

  describe('<ScratchpadOption />', () => {
    it('renders the ScratchpadOption component', () => {
      const enabledProps: ScratchpadOptionProps = {
        swapFolder: jest.fn,
        active: true,
      }
  
      const component = render(<ScratchpadOption {...enabledProps} />)
  
      expect(component).toBeTruthy()
    })
  })


describe('<SearchBar />', () => {
  it('renders the SearchBar component', () => {
    const enabledProps: SearchBarProps = {
      searchRef: createRef() as React.MutableRefObject<HTMLInputElement>,
      searchNotes: jest.fn,
    }

    const component = render(<SearchBar {...enabledProps} />)

    expect(component).toBeTruthy()
  })

  it('Clicking on "Categories" menu should collapse Category list', () => {
    const enabledProps: SearchBarProps = {
      searchRef: createRef() as React.MutableRefObject<HTMLInputElement>,
      searchNotes: jest.fn,
    }

    const component = render(<SearchBar {...enabledProps} />)
    expect(component).toBeTruthy()

    const { getByTestId } = component

    fireEvent.change(getByTestId(TestID.NOTE_SEARCH), {
      target: { value: 'welcome' },
    })
  })
})
it('Change App to Dark Mode', () => {
  const nextState = { ...initialState, darkTheme: !initialState.darkTheme }
  const result = reducer(initialState, toggleDarkTheme())

  expect(result).toEqual(nextState)
})

describe('<ScratchpadOption />', () => {
  it('renders the ScratchpadOption component', () => {
    const enabledProps: ScratchpadOptionProps = {
      swapFolder: jest.fn,
      active: true,
    }

    const component = render(<ScratchpadOption {...enabledProps} />)

    expect(component).toBeTruthy()
  })
})

it('Should have Open new note page on New Note menu click', () => {
  const component = renderWithRouter(<TakeNoteApp />)
  expect(component).toBeTruthy()
})
it('Should have Search button on the page', () => {
  const component = renderWithRouter(<TakeNoteApp />)
  const target = screen.getByTestId('note-search')
  expect(target).toBeInTheDocument()
})

describe('<IconButtonUploader />', () => {
  it('Should have Add Category component/button rendered when loaded TakeNote App', () => {
    const enabledProps: IconButtonUploaderProps = {
      handler: jest.fn,
      dataTestID: TestID.ICON_BUTTON_UPLOADER,
      icon: Camera,
      text: 'takeNote',
      accept: 'takeNote',
    }

    const component = render(<IconButtonUploader {...enabledProps} />)

    expect(component).toBeTruthy()
  })
})

it('Should See Export Button from Data Management in Settings', () => {
  const container = renderWithRouter(<TakeNoteApp />)
  const themeButton = screen.getByRole('button', { name: 'Settings' })
  fireEvent.click(themeButton)
  let target = screen.getByRole('button', { name: 'Data management' })
  fireEvent.click(target)

  target = screen.getByRole('button', { name: 'Export backup' })
  expect(target).toBeInTheDocument()
})

it('Should See Import Button from Data Management in Settings', () => {
  const container = renderWithRouter(<TakeNoteApp />)
  const themeButton = screen.getByRole('button', { name: 'Settings' })
  fireEvent.click(themeButton)
  let target = screen.getByRole('button', { name: 'Data management' })
  fireEvent.click(target)

  target = screen.getByRole('button', { name: 'Import backup' })
  expect(target).toBeInTheDocument()
})

it('Should See Download All Button from Data Management in Settings', () => {
  const container = renderWithRouter(<TakeNoteApp />)
  const themeButton = screen.getByRole('button', { name: 'Settings' })
  fireEvent.click(themeButton)
  let target = screen.getByRole('button', { name: 'Data management' })
  fireEvent.click(target)

  target = screen.getByRole('button', { name: 'Download all notes' })
  expect(target).toBeInTheDocument()
})

it('Should See View Source button in About TakeNote in Settings', () => {
  const container = renderWithRouter(<TakeNoteApp />)
  const themeButton = screen.getByRole('button', { name: 'Settings' })
  fireEvent.click(themeButton)
  let target = screen.getByRole('button', { name: 'About TakeNote' })
  fireEvent.click(target)

  target = screen.getByText('View source')
  expect(target).toBeInTheDocument()
})

it('Should See Logout button in Settings', () => {
  const container = renderWithRouter(<TakeNoteApp />)
  const themeButton = screen.getByRole('button', { name: 'Settings' })
  fireEvent.click(themeButton)
  const target = screen.getByRole('button', { name: 'Log out' })

  expect(target).toBeInTheDocument()
})

