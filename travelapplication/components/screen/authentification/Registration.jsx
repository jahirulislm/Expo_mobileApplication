import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HeightSpace from "../../reusable_comps/HeightSpace";
import ReusableBTN from "../../reusable_comps/ReusableBTN";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(6, "Username is required").required(),
  password: Yup.string().min(8, "Password is required").required(),
  email: Yup.string().email("Email is required").required(),
});

const Registration = () => {
  const { loader, setLoader } = useState(false);
  const { responseData, setResponseData } = useState(null);
  const { obsecureText, setaObsecureText } = useState(false);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={validationSchema} // validation schema object create with formik
        onSubmit={(values) => values}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid, // isValid is true when form is valid
          setFieldTouched,
        }) => (
          <View>
            <View style={styles.wrapper}>
              <View>
                <Text style={styles.label}>User Name</Text>
                <View
                  style={styles.inputWrapper(
                    touched.username ? "grey" : "white"
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={"grey"}
                  />
                  <TextInput
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter your username"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onFocus={() => setFieldTouched("username")}
                    onBlur={() => setFieldTouched("username", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={{ color: "red", marginBottom: 5 }}>
                    {errors.username}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.wrapper}>
              <View>
                <Text style={styles.label}>Email</Text>
                <View
                  style={styles.inputWrapper(touched.email ? "grey" : "white")}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={"grey"}
                  />
                  <TextInput
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter your email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onFocus={() => setFieldTouched("email")}
                    onBlur={() => setFieldTouched("email", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={{ color: "red", marginBottom: 5 }}>
                    {errors.email}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? "grey" : "white"
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={"grey"}
                  />
                  <TextInput
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    secureTextEntry={obsecureText}
                    placeholder="Enter your password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onFocus={() => setFieldTouched("password")}
                    onBlur={() => setFieldTouched("password", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => setaObsecureText(!obsecureText)}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color={"grey"}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={{ color: "red", marginBottom: 5 }}>
                    {errors.password}
                  </Text>
                )}
              </View>
            </View>

            <HeightSpace height={10} />
            <ReusableBTN
              onPress={() => handleSubmit()}
              btnText={"Sign in"}
              width={"90%"}
              backgroundColor={"green"}
              borderColor={"gray"}
              borderWidth={1}
              textColor={"white"}
              fontWeight={"medium"}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registration;

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
    // justifyContent: "center",
    alignItems: "center",
  }),
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
    marginEnd: 10,
    textAlign: "right",
  },
});
