//package import here
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import HomeNavigator from './Home.navigator';
import { COLORS } from '../../configs';
import { DATADUMMY, STORAGE_KEY } from '../../constants';

const HomeLogic = () => {
  //package value here
  const { navigator } = HomeLogic.dependencies;
  const { goBack, goToLogin } = navigator();

  //state value here
  const persistState = useSelector((state) => state.persist);
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('');
  const [dataList, setDataList] = useState([]);
  const [modalLogout, setModalLogout] = useState(false);

  //variable value here

  useEffect(() => {
    //function here
    _getData();
  }, [_getData, persistState.language]);

  //place your function in here
  const _getData = useCallback(async () => {
    let name = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);
    let dataDummy = DATADUMMY.repository;
    setUsername(name);
    setDataList(dataDummy);
  }, []);

  const _logOut = useCallback(() => {
    AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
    goToLogin();
  }, [goToLogin]);

  const _pinColor = useCallback((language) => {
    switch (language) {
      case 'JavaScript':
        return COLORS.yellow30;
      case 'C++':
        return COLORS.red30;
      case 'Java':
        return COLORS.brown50;
      default:
        return COLORS.primaryBlue;
    }
  }, []);

  const _handleSearch = useCallback(() => {
    const dataFilter = DATADUMMY.repository.filter((item) =>
      item.title.includes(search)
    );
    setDataList(dataFilter);
  }, [search]);

  return {
    //data props here
    data: {
      username,
      search,
      dataList,
      modalLogout,
    },
    //actions props here
    actions: {
      goBack,
      setSearch,
      setModalLogout,
      _logOut,
      _pinColor,
      _handleSearch,
    },
  };
};

export default HomeLogic;

HomeLogic.dependencies = {
  navigator: HomeNavigator,
};
