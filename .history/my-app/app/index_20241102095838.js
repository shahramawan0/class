import { View, Text } from "react-native";
import React, {} from "react";
import axios from "axios";

export default function home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
