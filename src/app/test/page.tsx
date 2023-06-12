import { prisma } from '@/db';
import { Category } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import React from 'react';

// list of users
async function getCategories() {
	return await prisma.category.findMany();
}

// create a new user
async function createCategory(data: FormData) {
	'use server';
	await prisma.category.create({
		data: {
			name: data.get('name') as string,
		},
	});

	revalidatePath('/test');
}

export default async function Page() {
	const categories: Category[] = await getCategories();

	return (
		<div className="p-6">
			{JSON.stringify(categories)}
			<form action={createCategory}>
				<input
					type="text"
					className="border border-gray-400 bg-gray-300 rounded-md"
					name="name"
					placeholder="Kategori Adı"
				/>
				<br />
				<button
					type="submit"
					className="rounded-md bg-indigo-600 text-white text-sm w-32"
				>
					Kategori oluştur
				</button>
			</form>
		</div>
	);
}
