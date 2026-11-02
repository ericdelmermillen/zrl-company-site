import { AuthCredentials, AuthResponse } from "@/typing/interfaces";


// createUser: returning promise?
const createUser = () => {
  console.log("Creating user...")
}

// loginUser: returning promise?
const loginUser = async ({ email, password }: AuthCredentials): Promise<AuthResponse> => {
  console.log(`email: ${email}`)
  console.log(`password: ${password}`)

  return { 
    success: true,
    message: "User logged in successfully",
    userId: 1
  }
}

// checkUserSession: returning promise
const checkUserSession = async () => {

}

// logOutUser: returning promise?
const logoutUser = async () => {

}


export {
  createUser,
  loginUser,
  checkUserSession,
  logoutUser
};