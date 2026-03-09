export const FAKE_AUTH_TOKEN = "fake-jwt-seedbank-demo";

export const fakeAuthUser = {
  id: "client-001",
  login: "client@seedbank.com",
  email: "client@seedbank.com",
  password: "Seed1234",
  fullName: "Gabriel Mendes",
};

export const fakeClientProfile = {
  id: "client-001",
  fullName: "Gabriel Mendes",
  email: "client@seedbank.com",
  accountType: "Premium Student",
  availableBalance: 12840.55,
  currency: "USD",
  cardStatus: "Active",
  goalName: "Exchange Program",
  goalProgress: 68,
  recentTransactions: [
    {
      id: "txn-001",
      label: "Spotify",
      amount: -12.99,
      date: "2026-03-08",
    },
    {
      id: "txn-002",
      label: "Scholarship Deposit",
      amount: 850,
      date: "2026-03-05",
    },
  ],
};
