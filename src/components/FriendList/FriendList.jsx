import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem";
import { FriendListWrapper } from './FriendList.styled';


export default function FriendList({friends}) {
  return (
    <FriendListWrapper>
      {friends.map((friend) => <FriendListItem friend={friend} key={friend.id} />)}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
};
