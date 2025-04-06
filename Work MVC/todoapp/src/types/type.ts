export type Todo = {
    id: number,
    task: string,
    completed: boolean,
};

export type CreateTodoInput = {
    task: string;
    completed?: boolean;
};

export type UpdateTodoInput = {
    task?: string;
    completed?: boolean;
};