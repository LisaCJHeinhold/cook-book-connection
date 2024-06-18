import { fail, redirect } from '@sveltejs/kit'
export const prerender = false;

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const firstName = formData.get('firstname')
    const email = formData.get('email')
    const password = formData.get('password')

    const { data, error } = await supabase.auth.signUp({
      firstName,
      email,
      password
    })

    if (error) {
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }

    throw redirect(303, '/dashboard')
  },
}