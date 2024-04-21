export type App1713693601 = {
  version: '0.1.0'
  name: 'app_1713693601'
  instructions: [
    {
      name: 'close'
      accounts: [
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'app1713693601'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'decrement'
      accounts: [
        {
          name: 'app1713693601'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'increment'
      accounts: [
        {
          name: 'app1713693601'
          isMut: true
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'initialize'
      accounts: [
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'app1713693601'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: []
    },
    {
      name: 'set'
      accounts: [
        {
          name: 'app1713693601'
          isMut: true
          isSigner: false
        },
      ]
      args: [
        {
          name: 'value'
          type: 'u8'
        },
      ]
    },
  ]
  accounts: [
    {
      name: 'app1713693601'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'count'
            type: 'u8'
          },
        ]
      }
    },
  ]
}

export const IDL: App1713693601 = {
  version: '0.1.0',
  name: 'app_1713693601',
  instructions: [
    {
      name: 'close',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'app1713693601',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'decrement',
      accounts: [
        {
          name: 'app1713693601',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'increment',
      accounts: [
        {
          name: 'app1713693601',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initialize',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'app1713693601',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'set',
      accounts: [
        {
          name: 'app1713693601',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'value',
          type: 'u8',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'app1713693601',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'count',
            type: 'u8',
          },
        ],
      },
    },
  ],
}
