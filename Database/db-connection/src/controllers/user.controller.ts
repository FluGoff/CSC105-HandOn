import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};

const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName) {
			return c.json({
				success: false,
				data: null,
				msg: "Missing required fields",
			}, 400);
		}

		const firstName = body.firstName.trim();
		const lastName = body.lastName.trim();

		if (await userModel.isDuplicate(firstName, lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			}, 409);
		}

		const newUser = await userModel.createUser(firstName, lastName);

		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		console.error("Error creating user:", e);
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		}, 500);
	}
};

export { createUser };
