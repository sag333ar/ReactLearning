import React, { useState } from "react";

import Menu from "./components/Menu/Menu";
import Accounts from "./components/Sections/Accounts/Accounts";
import Categories from "./components/Sections/Categories/Categories";
import Expenses from "./components/Sections/Expenses/Expenses";
import Locations from "./components/Sections/Locations/Locations";
import Wallets from "./components/Sections/Wallets/Wallets";

function App() {
  const items = ["Expenses", "Accounts", "Wallets", "Categories", "Locations"];
  const [selectedItem, setSelectedItem] = useState(0);
  const onChange = (item) => {
    setSelectedItem(item);
  };

  const currentPage = () => {
    switch (selectedItem) {
      case 0:
        return <Expenses />;
      case 1:
        return <Accounts />;
      case 2:
        return <Wallets />;
      case 3:
        return <Categories />;
      case 4:
        return <Locations />;
      default:
        return <Expenses />;
    }
  };

  return (
    <div>
      <Menu items={items} selected={selectedItem} onChange={onChange} />
      {currentPage()}
    </div>
  );
}

export default App;
