import defaultImage from "../default.jpg";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) =>
  friends.map(({ id, isOnline, avatar, name }) => (
    <li className="item" key={id}>
      <span className="status">{isOnline.toString()}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  ));

FriendListItem.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultImage,
    })
  ),
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
