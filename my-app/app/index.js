import { View, Text, ActivityIndicator, FlatList } from "react-native";
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Class: {item.class}</Text>
          </View>
        )}
      />
    </View>
  );
}
