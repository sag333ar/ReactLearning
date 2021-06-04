const Data = {
  menuItems: ["Expenses", "Accounts", "Wallets", "Categories", "Locations"],
  entityHeaders: ["#", "Name", "Icon"],
  accounts: [
    { name: "Personal", icon: "🏡", id: 1 },
    { name: "Business", icon: "💼", id: 2 },
    { name: "Office", icon: "👨‍💻", id: 3 },
  ],
  categories: [
    { name: "Food", icon: "🥗", id: 1 },
    { name: "Groceries", icon: "🥦", id: 2 },
    { name: "Electronics", icon: "💻", id: 3 },
    { name: "Fitness", icon: "🏃‍♀️", id: 4 },
    { name: "Health", icon: "🏥", id: 5 },
    { name: "Bills", icon: "🧾", id: 6 },
    { name: "Insurance", icon: "❤️‍🩹", id: 7 },
    { name: "Investment", icon: "💰", id: 8 },
    { name: "Rent", icon: "🏡", id: 9 },
    { name: "Travel", icon: "✈️", id: 10 },
    { name: "Furniture", icon: "🪑", id: 11 },
  ],
  wallets: [
    { name: "HDFC Bank", icon: "🏦", id: 1 },
    { name: "Diners Card", icon: "💳", id: 2 },
    { name: "Cash", icon: "💵", id: 3 },
    { name: "ICICI Bank", icon: "💸", id: 4 },
  ],
  location: [
    { name: "Amazon", icon: "🛒", id: 1 },
    { name: "IKEA", icon: "🛋", id: 2 },
    { name: "Flipkart", icon: "🏪", id: 3 },
    { name: "Jio Store", icon: "🛍", id: 4 },
    { name: "Bakery Store", icon: "🥖", id: 5 },
    { name: "Home", icon: "🥖", id: 6 },
  ],
  transactions: [
    {id: 1, label: "Electricity Bill", date: "2021-06-01", account: 1, category: 6, wallet: 2, location: 6, amount: 110.10 },
    {id: 2, label: "iPhone Case", date: "2021-06-02", account: 2, category: 3, wallet: 1, location: 1, amount: 50.50},
    {id: 3, label: "2 Chairs", date: "2021-06-03", account: 2, category: 3, wallet: 3, location: 2, amount: 300 },
    {id: 4, label: "Water bill", date: "2021-06-03", account: 1, category: 6, wallet: 4, location: 6, amount: 45.50 },
    {id: 5, label: "Office Telephone Bill", date: "2021-06-04", account: 3, category: 6, wallet: 4, location: 6, amount: 210.25 },
    {id: 6, label: "Flight booked", date: "2021-06-05", account: 3, category: 10, wallet: 2, location: 3, amount: 320.50 },
  ],
  transactionHeaders: ["#", "Info", "Date", "Account", "Category", "Wallet", "Location", "Amount"]
};

export default Data;
