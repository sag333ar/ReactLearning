import React, { useState } from "react";

import Menu from "./components/Menu/Menu";
import Entity from "./components/Entity/Entity";

import Data from "./Data/Data";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const onChange = (item) => {
    setSelectedMenuItem(item);
  };

  const getUpdatedAccounts = () => {
    const values = [...Data.accounts];
    values.forEach((value) => delete value["amount"]);
    Data.transactions.forEach((item) => {
      let value = values.filter((value) => value.id === item.account.id)[0];
      if (value.amount !== undefined) {
        value.amount = value.amount + item.amount;
      } else {
        value.amount = item.amount;
      }
    });
    return values;
  };

  const getUpdatedWallets = () => {
    const values = [...Data.wallets];
    values.forEach((value) => delete value["amount"]);
    Data.transactions.forEach((item) => {
      let value = values.filter((value) => value.id === item.wallet.id)[0];
      if (value.amount !== undefined) {
        value.amount = value.amount + item.amount;
      } else {
        value.amount = item.amount;
      }
    });
    return values;
  };

  const getUpdatedCategories = () => {
    const values = [...Data.categories];
    values.forEach((value) => delete value["amount"]);
    Data.transactions.forEach((item) => {
      let value = values.filter((value) => value.id === item.category.id)[0];
      if (value.amount !== undefined) {
        value.amount = value.amount + item.amount;
      } else {
        value.amount = item.amount;
      }
    });
    return values;
  };

  const getUpdatedLocations = () => {
    const values = [...Data.location];
    values.forEach((value) => delete value["amount"]);
    Data.transactions.forEach((item) => {
      let value = values.filter((value) => value.id === item.location.id)[0];
      if (value.amount !== undefined) {
        value.amount = value.amount + item.amount;
      } else {
        value.amount = item.amount;
      }
    });
    return values;
  };

  const updatedAccounts = getUpdatedAccounts();
  const updatedWallets = getUpdatedWallets();
  const updatedCategories = getUpdatedCategories();
  const updatedLocations = getUpdatedLocations();

  const currentPage = (
    <div>
      <Expenses
        items={Data.transactions}
        headers={Data.transactionHeaders}
        hidden={selectedMenuItem !== 0}
      />
      <Entity
        items={updatedAccounts}
        headers={Data.entityHeaders}
        hidden={selectedMenuItem !== 1}
        title="Accounts"
      />
      <Entity
        items={updatedWallets}
        headers={Data.entityHeaders}
        hidden={selectedMenuItem !== 2}
        title="Wallets"
      />
      <Entity
        items={updatedCategories}
        headers={Data.entityHeaders}
        hidden={selectedMenuItem !== 3}
        title="Categories"
      />
      <Entity
        items={updatedLocations}
        headers={Data.entityHeaders}
        hidden={selectedMenuItem !== 4}
        title="Locations"
      />
    </div>
  );

  return (
    <div>
      <Menu
        icons={Data.menuIcons}
        items={Data.menuItems}
        selected={selectedMenuItem}
        onChange={onChange}
      />
      {currentPage}
    </div>
  );
}

export default App;
