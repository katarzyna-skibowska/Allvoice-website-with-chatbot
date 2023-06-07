import { sendPasswordResetEmail } from "@firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/gerFormData";
import { Form } from "../../Form";
import { auth } from "../../../api/firebase";

export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();

    const { email } = getFormData(e);

    sendPasswordResetEmail(auth, email).catch((e) => {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    });
  };

  return (
    <Form
      submitText="Remind my password"
      onSubmit={handlePasswordReset}
      isPasswordHidden
    />
  );
};
