import React from "react";
import { useFormik } from "formik";
import { Button, Text, TextInput } from "react-native";

const SignUpScreen = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return <Text>Form</Text>;
};
export default SignUpScreen;
