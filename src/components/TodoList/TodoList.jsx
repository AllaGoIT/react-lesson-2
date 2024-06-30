import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ items, deleteTodo }) => {
  return (
    <Grid>
      {items.map((item, idx) => (
        <GridItem key={item.id}>
          <TodoListItem
            deleteTodo={deleteTodo}
            listItem={item}
            listItemIdx={idx + 1}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
