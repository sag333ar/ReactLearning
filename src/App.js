import React, { useState } from "react";

import Menu from "./components/UI/Menu/Menu";
import Entity from './components/UI/Entity/Entity';

import Data from "./Data/Data";
import Expenses from "./components/UI/Expenses/Expenses";

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const onChange = (item) => {
    setSelectedMenuItem(item);
  };

  const currentPage = (
    <div>
      <Expenses items={Data.transactions} headers={Data.transactionHeaders} hidden={selectedMenuItem !== 0} />
      <Entity items={Data.accounts} headers={Data.entityHeaders} hidden={selectedMenuItem !== 1} />
      <Entity items={Data.wallets} headers={Data.entityHeaders} hidden={selectedMenuItem !== 2} />
      <Entity items={Data.categories} headers={Data.entityHeaders} hidden={selectedMenuItem !== 3} />
      <Entity items={Data.location} headers={Data.entityHeaders} hidden={selectedMenuItem !== 4} />
    </div>
  );

  return (
    <div>
      <Menu items={Data.menuItems} selected={selectedMenuItem} onChange={onChange} />
      {currentPage}
    </div>
  );
}

export default App;
