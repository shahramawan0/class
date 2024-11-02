import { View, Text,  } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from Laravel API
    axios
      .get("http://192.168.1.3:8000/api/students")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
