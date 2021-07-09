import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
    <FriendListItem friends={friends} />
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
