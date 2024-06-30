import { Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';
export const TodoListItem = ({ listItem, listItemIdx, deleteTodo }) => {
  const handlelDelete = () => deleteTodo(listItem.id);
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {listItemIdx}
      </Text>
      <Text>{listItem.text}</Text>
      <button
        className={style.deleteButton}
        onClick={handlelDelete}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
