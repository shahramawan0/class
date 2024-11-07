import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "expo-router";

export default function home() {
 
  return (
    <View>
      <Link href="/registeration">Go to registeration</Link>
    </View>
  );
}
