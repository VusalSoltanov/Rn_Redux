import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/index';

interface AddTodoProps {
  visible: boolean;
  onClose: () => void;
  onAddTodo: (task: string) => void;
}

const Addtodo: React.FC<AddTodoProps> = ({visible, onClose, onAddTodo: onAddTodo}) => {
  const [inputtodo, setInputtodo] = useState('');

  let dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTodo(inputtodo));
    onAddTodo(inputtodo);
    setInputtodo('');
  };

  const HandlePress = () => {
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={HandlePress}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.ModalContainer}>
              <Text style={styles.ModalHeader}>Add New Todo</Text>
              <TextInput
                style={styles.textInput}
                placeholder="enter new todo name"
                value={inputtodo}
                onChangeText={text => setInputtodo(text)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  columnGap: 16,
                }}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddTask}>
                  <Text style={styles.addButtonLabel}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.cancelButtonLabel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Addtodo;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalContainer: {
    backgroundColor: '#DADADA',
    width: '80%',
    padding: 20,
    borderRadius: 5,
  },
  ModalHeader: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#575767',
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#575767',
  },
  addButton: {
    backgroundColor: '#4742a1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
  },
  cancelButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
});