import { ActionResponse, SendMoreInfoEmailPayload } from "@/typing/interfaces";


// getMoreInfoEmail: reeturning promise
const getMoreInfoEmail = async () => {
  console.log("Here's the moreInfoEmail")
};

// editMoreInfoEmail: returning promise
const editMoreInfoEmail = async () => {
  console.log("Editing the moreInforEmail")
};

// sendMoreInfoEmail: returning promise
const sendMoreInfoEmail = async ({
  name,
  email,
  phone = null
}: SendMoreInfoEmailPayload): Promise<ActionResponse> => {
  console.log(name)
  console.log(email)
  console.log(phone)

  // Logic here
  return {
    success: true,
    message: "Email sent successfully",
    hasSubscribed: true
  }
};

// sendMoreInfoTestEmail: returning promise
const sendMoreInfoTestEmail = async () => {
  console.log("Sending moreInfoemail")
};

export {
  getMoreInfoEmail,
  editMoreInfoEmail,
  sendMoreInfoEmail,
  sendMoreInfoTestEmail
};