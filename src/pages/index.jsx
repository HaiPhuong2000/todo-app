import './index.less';
import TodoList from '../components/TodoList';

export default function IndexPage() {
  return (
    <div className="container">
      <div>
        <h1>To do list</h1>
        <TodoList />
      </div>
    </div>
  );
}
