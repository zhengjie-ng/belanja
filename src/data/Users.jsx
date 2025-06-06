const dataUsers = [
  {
    id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
    name: "Alan",
    email: "alan@belanja.com",
    mobile: 90909090,
    password: 80604914,
    avatar: "https://i.pravatar.cc/100?u=alan@belanja.com",
    lifeTimeSpending: 655.43,
    wallet: 545.22,
    coins: 22355,
    CoinsHistory: [
      {
        uuid: "77ec334e-03a4-4cb8-afb8-51f7060a1399",
        coins: 22355,
        mode: "demo",
        date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
      },
    ],
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "e2e66095-2d1e-4810-ba8c-e06493d4ea60",
        name: "Becky",
        debt: 20,
        debtLog: [
          {
            debtId: "e0587de7-2ac4-4365-8f2a-b37ce464fa36",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoAdd",
            newDebt: 20,
          },
        ],
      },
      {
        id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
        name: "Cindy",
        debt: -40.5,
        debtLog: [
          {
            debtId: "14fdcebc-6506-45e8-a619-0f8601b804c8",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoMinus",
            newDebt: 40.5,
          },
        ],
      },
      {
        id: "aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
        name: "Dove",
        debt: 0,
      },
    ],
    bills: [
      {
        id: "d23ea76e-9b41-4a8a-ae9e-4cea86483c67",
        name: "seafood alliance",
        payment: 143.44,
        mode: "split",
        settle: false,
        location: {
          address: "500 Clemenceau Avenue North, Singapore 229495",
        },
        date: { d: 19, m: 5, Month: "May", y: 2025, time: "9:01:21 PM" },
        fullPayeeList: [
          {
            id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
            name: "Alan",
            float: "",
            percentage: "",
          },
        ],
      },
      {
        id: "df78930e-5571-44ce-b57e-1c7b34b469a4",
        name: "timbre+",
        payment: 98.23,
        mode: "belanja",
        settle: false,
        date: { d: 3, m: 4, Month: "Apr", y: 2025, time: "10:21:55 PM" },
        location: {
          address:
            "73A Ayer Rajah Crescent, JTC LaunchPad @ one-north, Singapore 139957",
        },

        fullPayeeList: [
          {
            id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
            name: "Alan",
            float: "",
            percentage: "",
          },
        ],
      },
      {
        id: "c3cea1bc-be67-4b3b-8ea0-96bea61e6666",
        name: "mcdonalds",
        payment: 77.4,
        mode: "split",
        settle: false,
        date: { d: 7, m: 2, Month: "Feb", y: 2025, time: "11:11:31 AM" },
        location: {
          address: "Bedok Mall, 311 New Upper Changi Road, Singapore 467360",
        },

        fullPayeeList: [
          {
            id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
            name: "Alan",
            float: "",
            percentage: "",
          },
        ],
      },
    ],
  },
  {
    id: "e2e66095-2d1e-4810-ba8c-e06493d4ea60",
    name: "Becky",
    email: "becky@belanja.com",
    mobile: 80808080,
    password: 80604914,
    avatar: "https://i.pravatar.cc/100?u=e2e66095-2d1e-4810-ba8c-e06493d4ea60",
    lifeTimeSpending: 54.27,
    wallet: 30.45,
    coins: 1344,
    CoinsHistory: [
      {
        uuid: "e9a039b9-c50a-4274-b0ab-32af7ac6bc22",
        coins: 1344,
        mode: "demo",
        date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
      },
    ],
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
        name: "Alan",
        debt: -20,
        debtLog: [
          {
            debtId: "a36dfb38-1b9b-4085-8f6b-abd23e6368d5",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoMinus",
            newDebt: 20,
          },
        ],
      },
      {
        id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
        name: "Cindy",
        debt: 0,
      },
    ],
  },
  {
    id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
    name: "Cindy",
    email: "cindy@belanja.com",
    mobile: 70707070,
    password: 80604914,
    avatar: "https://i.pravatar.cc/100?u=f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
    lifeTimeSpending: 157.27,
    wallet: 330.45,
    coins: 7615,
    CoinsHistory: [
      {
        uuid: "409c6215-dba4-4aec-9e74-e219d6437194",
        coins: 7615,
        mode: "demo",
        date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
      },
    ],
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
        name: "Alan",
        debt: 40.5,
        debtLog: [
          {
            debtId: "c1a40501-b595-4455-ac5c-ec8a5ec6c29e",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoAdd",
            newDebt: 40.5,
          },
        ],
      },
      {
        id: "e2e66095-2d1e-4810-ba8c-e06493d4ea60",
        name: "Becky",
        debt: 0,
      },
      {
        id: "aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
        name: "Dove",
        debt: 5,
        debtLog: [
          {
            debtId: "bd2f7fbb-6378-4b55-b036-815991947203",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoAdd",
            newDebt: 5,
          },
        ],
      },
    ],
  },
  {
    id: "aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
    name: "Dove",
    email: "dove@belanja.com",
    mobile: 60606060,
    password: 80604914,
    avatar: "https://i.pravatar.cc/100?u=aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
    lifeTimeSpending: 9.4,
    wallet: 5.45,
    coins: 536,
    CoinsHistory: [
      {
        uuid: "b83f4ee9-9eee-4385-8f9b-a7688f9f1660",
        coins: 536,
        mode: "demo",
        date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
      },
    ],
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
        name: "Alan",
        debt: 0,
      },
      {
        id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
        name: "Cindy",
        debt: -5,
        debtLog: [
          {
            debtId: "c6722830-ed08-4bb9-a996-39fcde8508cc",
            date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
            mode: "demoMinus",
            newDebt: 5,
          },
        ],
      },
    ],
  },
  {
    id: "171320a7-f1ac-4f06-802e-82aba2ac345c",
    name: "Ethan",
    email: "ethan@belanja.com",
    mobile: 50505050,
    password: 80604914,
    avatar: "https://i.pravatar.cc/100?u=171320a7-f1ac-4f06-802e-82aba2ac345c",
    lifeTimeSpending: 1210.4,
    wallet: 655.1,
    coins: 11455,
    CoinsHistory: [
      {
        uuid: "bddb0f17-35e1-4835-ace4-a7eaf5bc1707",
        coins: 11455,
        mode: "demo",
        date: { d: 28, m: 5, Month: "May", y: 2025, time: "8:00:00 AM" },
      },
    ],
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "e2e66095-2d1e-4810-ba8c-e06493d4ea60",
        name: "Becky",
        debt: 0,
      },
      {
        id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
        name: "Cindy",
        debt: 0,
      },
      {
        id: "aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
        name: "Dove",
        debt: 0,
      },
    ],
  },
];

export default dataUsers;
