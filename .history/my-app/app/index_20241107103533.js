import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function home() {
 
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
