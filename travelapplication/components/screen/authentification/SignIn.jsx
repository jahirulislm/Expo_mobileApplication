import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// import { object, string, number, date, InferType } from "yup";

// let userSchema = object({
//   name: string().required(),
//   age: number().required().positive().integer(),
//   email: string().email(),
//   website: string().url().nullable(),
//   createdOn: date().default(() => new Date()),
// });

const validationSchema = Yup.object().shape({
  password: Yup.string().min(8, "Password is required").required(),
  email: Yup.string().email("Email is required").required(),
});

const SignIn = () => {
  const { loader, setLoader } = useState(false);
  const [responseData, setResponseData] = useState();
  const { obsecureText, setaObsecureText } = useState();
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View
              style={styles.inputWrapper(touched.email ? "white" : "red")}
            ></View>

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 14,
  }),
});
