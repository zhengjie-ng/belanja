const dataUsers = [
  {
    id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
    name: "Alan",
    email: "alan@belanja.com",
    mobile: 90909090,
    password: 11111111,
    avatar: "https://i.pravatar.cc/100?u=alan@belanja.com",
    lifeTimeSpending: 655.43,
    wallet: 545.22,
    coins: 22355,
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "e2e66095-2d1e-4810-ba8c-e06493d4ea60",
        name: "Becky",
        debt: 20,
      },
      {
        id: "f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
        name: "Cindy",
        debt: -40.5,
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
        date: { d: 19, m: 5, Month: "May", y: 2025 },
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
        date: { d: 3, m: 4, Month: "Apr", y: 2025 },
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
        date: { d: 3, m: 2, Month: "Feb", y: 2025 },
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
    password: 11111111,
    avatar: "https://i.pravatar.cc/100?u=e2e66095-2d1e-4810-ba8c-e06493d4ea60",
    lifeTimeSpending: 54.27,
    wallet: 30.45,
    coins: 1344,
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
        name: "Alan",
        debt: -20,
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
    password: 11111111,
    avatar: "https://i.pravatar.cc/100?u=f9d972d7-0e44-4ad8-a997-56f4377e1aaf",
    lifeTimeSpending: 157.27,
    wallet: 330.45,
    coins: 7615,
    notifications: {
      notify: false,
      list: [],
    },
    friends: [
      {
        id: "69392e71-eeb8-40cc-9b4e-4770362e8d5c",
        name: "Alan",
        debt: 40.5,
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
      },
    ],
  },
  {
    id: "aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
    name: "Dove",
    email: "dove@belanja.com",
    mobile: 60606060,
    password: 11111111,
    avatar: "https://i.pravatar.cc/100?u=aacd7ba9-ec01-42e4-8913-a8fc8d65f3aa",
    lifeTimeSpending: 9.4,
    wallet: 5.45,
    coins: 536,
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
      },
    ],
  },
  {
    id: "171320a7-f1ac-4f06-802e-82aba2ac345c",
    name: "Ethan",
    email: "ethan@belanja.com",
    mobile: 50505050,
    password: 11111111,
    avatar: "https://i.pravatar.cc/100?u=171320a7-f1ac-4f06-802e-82aba2ac345c",
    lifeTimeSpending: 1210.4,
    wallet: 655.1,
    coins: 11455,
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
