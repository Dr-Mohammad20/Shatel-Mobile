export const validate = (data, type) => {
  const errors = {};

  if (type === 'Signup') {
    if (!data.name.trim()) {
      errors.name = 'UserName is Required';
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = 'Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = 'password is Required';
    } else if (data.password.length < 8) {
      errors.password = 'password need to be 8 character or more';
    } else {
      delete errors.password;
    }
  } else if (type === 'Login') {
    if (!data.email) {
      errors.email = 'Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = 'password is Required';
    } else if (data.password.length < 8) {
      errors.password = 'password need to be 8 character or more';
    } else {
      delete errors.password;
    }
  }

  return errors;
};
