import { prisma } from '@/db';
import { User } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import React from 'react';

// list of users
async function getUsers() {
	return await prisma.user.findMany();
}

// create a new user
async function createUser(data: FormData) {
	'use server';
	await prisma.user.create({
		data: {
			username: data.get('username') as string,
			password: data.get('password') as string,
		},
	});

	revalidatePath('/test');
}

export default async function Page() {
	const users: User[] = await getUsers();

	return (
		<div className="p-6">
			{JSON.stringify(users)}
			<form action={createUser}>
				<input
					type="text"
					className="border border-gray-400 bg-gray-300 rounded-md"
					name="username"
					placeholder="Kullanıcı Adı"
				/>
				<br />
				<input
					type="password"
					className="border border-gray-400 bg-gray-300 rounded-md"
					name="password"
					placeholder="Şifre"
				/>
				<br />
				<button
					type="submit"
					className="rounded-md bg-indigo-600 text-white text-sm w-32"
				>
					Kayıt Ol
				</button>
			</form>
		</div>
	);
}
