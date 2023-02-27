import PropTypes from 'prop-types';
import friends from "../../data/friends.json";
import FriendListItem from "components/FriendListItem/FriendListItem";
import { FriendListWrapper } from './FriendList.styled';


export default function FriendList() {
  return (
    <FriendListWrapper>
      {friends.map((friend) => FriendListItem(friend))}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
};
