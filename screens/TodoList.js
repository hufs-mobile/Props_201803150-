import React  from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { useState, useCallback } from "react";

const TodoList = (props) => {
    return (
        <Text className="TodoList">
            <Text> 오늘 할 일 1 </Text>
            <Text> 오늘 할 일 2 </Text>
            <Text> 오늘 할 일 3 </Text>
        </Text>
    );
};
export default TodoList;