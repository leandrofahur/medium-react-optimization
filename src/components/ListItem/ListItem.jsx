import PropTypes from "prop-types";

export default function ListItem(props) {
  const { item } = props;
  return <li>{item}</li>;
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};
