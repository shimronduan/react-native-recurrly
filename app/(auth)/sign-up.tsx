import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        Go to Sign In
      </Link>
      <Link href="/" className="mt-4 rounded bg-primary text-white px-4 py-2">
        Go back to Home
      </Link>
    </View>
  );
};

export default SignUp;
