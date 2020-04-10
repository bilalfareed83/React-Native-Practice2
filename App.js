import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button, List } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    text: '',
    todos: [],
  };

  add = () => {
    if (this.state.text) {
      let margedTodo = [...this.state.todos, this.state.text];

      console.log('add function working');
      this.setState({ todos: margedTodo, text: '' });
    } else {
      alert('please enter some text');
    }
  };

  // componentDidMount() {}
  render() {
    console.log(this.state.todos);
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Todos App" style={{ alignItems: 'center' }} />
        </Appbar.Header>
        <TextInput
          label="Todo"
          placeholder="Add todo"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />

        <Button
          icon="heart"
          mode="contained"
          onPress={this.add}
          style={{ margin: 10 }}
        >
          Add Todo
        </Button>

        {this.state.todos.map((el, i) => {
          return (
            <List.Item
              title={el}
              description="Item description"
              left={(props) => <List.Icon {...props} icon="folder" />}
              onPress={() => {
                this.state.todos.splice(i, 1);
                this.setState({ todos: this.state.todos });
              }}
              id={i}
              key={i}
            />
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
