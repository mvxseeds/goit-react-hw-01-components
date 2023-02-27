import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from "./FriendListItem.styled";


export default function FriendListItem({ id, avatar, name, isOnline }) {
  // add isOnline conditional styling
  return (
    <Item key={id}>
      {isOnline ? <Status style={{ backgroundColor: "green"}}></Status> : <Status></Status>}
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
