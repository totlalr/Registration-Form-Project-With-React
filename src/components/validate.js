export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "User Name required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Emial Name required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email Address is inavalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Passwors need to be 6 charactor or more ";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm the Password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwors do not match ";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our regulations";
  }

  return errors;
};
