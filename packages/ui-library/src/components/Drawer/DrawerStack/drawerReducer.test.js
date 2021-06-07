// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import drawerReducer, {
  CREATE_DRAWER,
  SHOW_DRAWER,
  HIDE_DRAWER,
  RESET_DRAWER,
  DRAWER_STATE_SHOW,
  DRAWER_STATE_HIDE,
  DRAWER_STATE_HIDDEN,
} from './drawerReducer'

test('throws an error when action type does not exist', () => {
  expect(() => {
    drawerReducer(new Map(), { type: 'ARBITRARY TYPE', id: '1' })
  }).toThrow()
})

test('throws an error when drawer id is not given', () => {
  expect(() => {
    drawerReducer(new Map(), { type: SHOW_DRAWER })
  }).toThrow()
})

describe('creating drawer', () => {
  it('adds drawer to the stack', () => {
    const stack = drawerReducer(new Map(), {
      type: CREATE_DRAWER,
      id: 'drawer1',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: '',
            state: DRAWER_STATE_HIDDEN,
          },
        ],
      ]),
    )
  })

  it('updates parent drawer when adding a child drawer', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          parentId: '',
          openChildId: '',
          state: DRAWER_STATE_HIDDEN,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: CREATE_DRAWER,
      id: 'drawer2',
      parentId: 'drawer1',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: '',
            state: DRAWER_STATE_HIDDEN,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDDEN,
          },
        ],
      ]),
    )
  })
})

describe('showing drawer', () => {
  it('updates state of itself', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          parentId: '',
          openChildId: '',
          state: DRAWER_STATE_HIDDEN,
        },
      ],
      [
        'drawer2',
        {
          id: 'drawer2',
          parentId: 'drawer1',
          openChildId: '',
          state: DRAWER_STATE_HIDDEN,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: SHOW_DRAWER,
      id: 'drawer1',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: '',
            state: DRAWER_STATE_SHOW,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDDEN,
          },
        ],
      ]),
    )
  })

  it('hides other child', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          parentId: '',
          openChildId: 'drawer2',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer2',
        {
          id: 'drawer2',
          parentId: 'drawer1',
          openChildId: '',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer3',
        {
          id: 'drawer3',
          parentId: 'drawer1',
          openChildId: '',
          state: DRAWER_STATE_HIDDEN,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: SHOW_DRAWER,
      id: 'drawer3',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: 'drawer3',
            state: DRAWER_STATE_SHOW,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDE,
          },
        ],
        [
          'drawer3',
          {
            id: 'drawer3',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_SHOW,
          },
        ],
      ]),
    )
  })
})

describe('hiding drawer', () => {
  it('hiding nested drawer updates state and parent drawer state', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          parentId: '',
          openChildId: 'drawer2',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer2',
        {
          id: 'drawer2',
          parentId: 'drawer1',
          openChildId: '',
          state: DRAWER_STATE_SHOW,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: HIDE_DRAWER,
      id: 'drawer2',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: '',
            state: DRAWER_STATE_SHOW,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDE,
          },
        ],
      ]),
    )
  })

  it('hiding parent will also hide child drawers', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          openChildId: 'drawer2',
          parentId: '',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer2',
        {
          id: 'drawer2',
          openChildId: 'drawer3',
          parentId: 'drawer1',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer3',
        {
          id: 'drawer3',
          openChildId: '',
          parentId: 'drawer2',
          state: DRAWER_STATE_SHOW,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: HIDE_DRAWER,
      id: 'drawer1',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            parentId: '',
            openChildId: '',
            state: DRAWER_STATE_HIDE,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDE,
          },
        ],
        [
          'drawer3',
          {
            id: 'drawer3',
            parentId: 'drawer2',
            openChildId: '',
            state: DRAWER_STATE_HIDE,
          },
        ],
      ]),
    )
  })
})

describe('resetting drawer', () => {
  it('updates state', () => {
    const initialStack = new Map([
      [
        'drawer1',
        {
          id: 'drawer1',
          parentId: '',
          openChildId: '',
          state: DRAWER_STATE_SHOW,
        },
      ],
      [
        'drawer2',
        {
          id: 'drawer2',
          parentId: 'drawer1',
          openChildId: '',
          state: DRAWER_STATE_HIDE,
        },
      ],
    ])

    const stack = drawerReducer(initialStack, {
      type: RESET_DRAWER,
      id: 'drawer2',
    })

    expect(stack).toEqual(
      new Map([
        [
          'drawer1',
          {
            id: 'drawer1',
            openChildId: '',
            parentId: '',
            state: DRAWER_STATE_SHOW,
          },
        ],
        [
          'drawer2',
          {
            id: 'drawer2',
            parentId: 'drawer1',
            openChildId: '',
            state: DRAWER_STATE_HIDDEN,
          },
        ],
      ]),
    )
  })
})
