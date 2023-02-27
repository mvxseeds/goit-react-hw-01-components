import PropTypes from 'prop-types';
import { Status, Avatar, Name, Item } from './FriendListItem.styled';

export default function FriendListItem({friend}) {
  const { avatar, name, isOnline } = friend;

  return (
    <Item>
      {isOnline ? (
        <Status style={{ backgroundColor: 'green' }}></Status>
      ) : (
        <Status></Status>
      )}
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
