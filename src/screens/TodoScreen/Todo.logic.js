//package import
import { useEffect, useCallback, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//local import here
import TodoNavigator from './Todo.navigator';
import I18n from '../../i18n';
import {
  addData,
  deleteData,
  checkTask,
  editData,
} from '../../redux/redux-actions';

const TodoLogic = () => {
  //package value here
  const { navigator } = TodoLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const todoState = useSelector((state) => state.todo);

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleDeleteData = useCallback(
    (index) => {
      setInput('');
      setIsEdit(false);
      setIsVisible(false);
      dispatch(deleteData(index));
    },
    [dispatch]
  );

  const _onClickTrash = useCallback(
    (item) => {
      Alert.alert(I18n.t('delete'), I18n.t('youSure'), [
        { text: I18n.t('no') },
        { text: I18n.t('yes'), onPress: () => _handleDeleteData(item) },
      ]);
    },
    [_handleDeleteData]
  );

  const _handleAddData = useCallback(() => {
    if (input.length > 0) {
      if (isEdit) {
        dispatch(editData(input, editIndex));
        setInput('');
        setIsEdit(false);
        setIsVisible(false);
        Keyboard.dismiss();
      } else {
        dispatch(addData(input));
        setInput('');
        setIsVisible(false);
        Keyboard.dismiss();
      }
    } else {
      setIsVisible(!isVisible);
    }
  }, [dispatch, editIndex, input, isEdit, isVisible]);

  const _handleCheck = useCallback(
    (status, index) => {
      dispatch(checkTask(!status, index));
    },
    [dispatch]
  );

  const _handleEdit = useCallback(
    (name, index) => {
      if (isEdit) {
        setIsEdit(!isEdit);
        setInput('');
        setEditIndex(null);
        setIsVisible(!isVisible);
      } else {
        setIsEdit(!isEdit);
        setInput(name);
        setEditIndex(index);
        setIsVisible(!isVisible);
      }
    },
    [isEdit, isVisible]
  );

  const _percentage = useCallback(() => {
    let filter = todoState.data.filter((item) => item.status === true);
    const formula = (filter.length / todoState.data.length) * 100;
    if (isNaN(formula)) {
      return 0;
    } else {
      return formula.toString().slice(0, 4);
    }
  }, [todoState.data]);

  return {
    //data props here
    data: {
      todoState,
      isVisible,
      input,
    },
    //actions props here
    actions: {
      goBack,
      _onClickTrash,
      _handleAddData,
      _handleCheck,
      _handleEdit,
      _percentage,
      setInput,
    },
  };
};

export default TodoLogic;

TodoLogic.dependencies = {
  navigator: TodoNavigator,
};
