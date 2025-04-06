import type { Context, Next } from 'hono';
import type { CreateTodoInput, UpdateTodoInput } from '../types/type.js';

export async function validateIdParam(c: Context, next: Next) {
    const id = c.req.param("id")
    if(!/^\d+/.test(id)) {
        return c.json({ error: 'Id is required and must be an integer' }, 400)
    }

    await next();
}

export async function validateCreateTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        if (!body.task || typeof body.task !== 'string') {
            return c.json({ error: 'Task is required and must be a string' }, 400);
        }

        if (body.completed !== undefined && typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', body as CreateTodoInput);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}

export async function validateUpdateTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        // For PUT, all fields are required
        if (!body.task || typeof body.task !== 'string') {
            return c.json({ error: 'task is required and must be a string' }, 400);
        }

        if (typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed is required and must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', body);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}

export async function validatePatchTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        // For PATCH, fields are optional but must be valid if present
        if (body.task !== undefined && typeof body.task !== 'string') {
            return c.json({ error: 'task must be a string' }, 400);
        }

        if (body.completed !== undefined && typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', body as UpdateTodoInput);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}