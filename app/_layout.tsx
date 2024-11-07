import "../global.css";
import { Text, View, SafeAreaView, TextInput, Button, FlatList, ScrollView } from "react-native";
import { useState } from "react";

export default function RootLayout() {
  const [todos, setTodos] = useState('');
  const [todosList, setTodosList] = useState([]);

  const AddTodo = () => {
    setTodosList([...todosList, todos]);
    setTodos("");
  }

  return (
    <SafeAreaView className="flex">
      < View className='mt-20 p-5'>
        <Text className="text-4xl font-bold">Todos</Text>
        <TextInput value={todos} className='border-solid border-purple-700 border-2 rounded-md mt-5 mb-5 p-2 text-xl' onChangeText={(e) => { setTodos(e) }} />
        <Button title="Add Todo" onPress={AddTodo}
          color="#841584"
          accessibilityLabel="Click on this button to add a Todo"
        />
        <Text className="text-2xl font-bold">All Todos:</Text>

        <ScrollView>
          <FlatList
            data={todosList}
            renderItem={({ item }) => <Text>- {item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View >
    </SafeAreaView>

  );
}
