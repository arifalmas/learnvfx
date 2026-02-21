"use server"

// Login form action
export async function LoginFormAction(formData : FormData) {

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const loginData = {
    email,
    password
  }

  console.log(loginData)
}

// Registration form action
export async function SignupFormAction(formData : FormData) {

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const signupData = {
    name,
    email,
    password
  }

  console.log(signupData)
}