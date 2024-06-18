import { redirect } from "@sveltejs/kit";
export const prerender = false;

export async function load({ locals, depends }) {
    depends("supabase:auth")

    const user = await locals.getUser()
    if (!user) throw redirect(303, "/login")
    return { user }
}