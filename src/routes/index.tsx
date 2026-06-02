import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trash2, Plus } from 'lucide-react'

interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: input,
          completed: false,
          createdAt: new Date(),
        },
      ])
      setInput('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">My To-Do List</CardTitle>
            <CardDescription>
              {completedCount} of {todos.length} tasks completed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Input Section */}
            <div className="flex gap-2">
              <Input
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                className="flex-1"
              />
              <Button onClick={addTodo} className="gap-2">
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </div>

            {/* Todo List */}
            <div className="space-y-2">
              {todos.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No tasks yet. Add one to get started!
                </p>
              ) : (
                todos.map(todo => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    <span
                      className={`flex-1 ${
                        todo.completed
                          ? 'line-through text-muted-foreground'
                          : ''
                      }`}
                    >
                      {todo.title}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Stats */}
            {todos.length > 0 && (
              <div className="pt-4 border-t text-sm text-muted-foreground">
                <p>Total tasks: {todos.length}</p>
                <p>Completed: {completedCount}</p>
                <p>Remaining: {todos.length - completedCount}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
