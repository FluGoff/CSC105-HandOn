import type { CreateTodoInput, Todo, UpdateTodoInput } from '../types/type.js';

// In-memory data store (in a real app, this would be a database)
const todos: Todo[] = [
    { id: 1, task: 'Learn Hono', completed: false },
    { id: 2, task: 'Build a REST API', completed: false },
    { id: 3, task: 'Test with Postman', completed: false },
];

// Get all todos
export function findAll(): Todo[] {
    return todos;
}

// Get a specific todo by ID
export function findById(id: number): Todo | undefined {
    return todos.find((t) => t.id === id)
}

// Create a new todo
export function create(input: CreateTodoInput): Todo {
    const newTodo: Todo = {
        id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
        task: input.task,
        completed: input.completed === true, // defaults to false if not provided
    };

    todos.push(newTodo);
    return newTodo;
}

// Update a todo completely
export function update(id: number, input: Todo): Todo | undefined {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        return undefined;
    }

    const updatedTodo: Todo = {
        ...input,
        id, // ensure ID doesn't change
    };

    todos[index] = updatedTodo;
    return updatedTodo;
}

// Update a todo partially
export function patch(id: number, input: UpdateTodoInput): Todo | undefined {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        return undefined;
    }

    const updatedTodo: Todo = {
        ...todos[index],
        ...(input.task !== undefined && { title: input.task }),
        ...(input.completed !== undefined && { completed: input.completed }),
    };

    todos[index] = updatedTodo;
    return updatedTodo;
}

// Delete a todo
export function remove(id: number): Todo | undefined {
    return
}

// Filter todos by completion status
export function findByCompleted(completed: boolean): Todo[] {
    return todos.filter((todo) => todo.completed === completed);
}

// Search todos by title
export function search(term: string): Todo[] {
    if (!term) return [];

    return todos.filter((t) => {t.task.includes(term)})
}