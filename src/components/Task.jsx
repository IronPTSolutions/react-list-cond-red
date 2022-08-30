function Task({ name, deleteFromList }) {
  const handleClick = () => {
    deleteFromList(name);
  };

  return name === "task Edgar" ? null : (
    <li onClick={handleClick} className="list-group-item">
      {name}
    </li>
  );
}

export default Task;
