// component data imports
import user from "data/user.json";
import data from "data/data.json";
import transactions from  "data/transactions.json";

// global style and normalization imports
import { GlobalStyle } from "components/GlobalStyle";
import { ModernNormalize } from "emotion-modern-normalize";

// components imports
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

// everything is rendered inside this component
export default function App() {
  return (
    <div>
      <ModernNormalize />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      {/* <Statistics stats={data} /> */}

      <FriendList />

      <TransactionHistory items={transactions} />

      <GlobalStyle />
    
    </div>
  );
}
