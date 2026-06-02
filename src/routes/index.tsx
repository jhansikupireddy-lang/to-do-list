import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">My Todo List</h1>
          
          <div className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              className="flex-1"
            />
            <Button onClick={addTodo} className="bg-blue-600 hover:bg-blue-700">
              Add
            </Button>
          </div>

          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No todos yet. Add one to get started!</p>
            ) : (
              todos.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-gray-800">{todo}</span>
                  <Button
                    onClick={() => removeTodo(index)}
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}