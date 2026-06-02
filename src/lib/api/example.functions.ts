// Example API functions
// Add your API calls here

export async function fetchTodos() {
  try {
    const response = await fetch('/api/todos');
    if (!response.ok) throw new Error('Failed to fetch todos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
}

export async function addTodo(todo: string) {
  try {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: todo }),
    });
    if (!response.ok) throw new Error('Failed to add todo');
    return await response.json();
  } catch (error) {
    console.error('Error adding todo:', error);
    return null;
  }
}

export async function deleteTodo(id: string) {
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
    return true;
  } catch (error) {
    console.error('Error deleting todo:', error);
    return false;
  }
}