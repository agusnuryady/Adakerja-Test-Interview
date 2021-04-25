//package import here
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

//local import here
import HomeNavigator from './Home.navigator';
import { COLORS } from '../../configs';
import { DATADUMMY, STORAGE_KEY } from '../../constants';
import { setDataCommits } from '../../redux/redux-actions';

const HomeLogic = () => {
  //package value here
  const { navigator } = HomeLogic.dependencies;
  const { goBack, goToLogin, goToCommitList } = navigator();
  const dispatch = useDispatch();

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
    setSearch('facebook/react-native');
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

  const _handleToCommit = useCallback(
    (title, commites) => {
      const page_number = 1;
      const page_size = 5;
      const totalPage = Math.ceil(commites.length / page_size);
      const sliceData = commites.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
      const dataPagination = {
        data: sliceData,
        title,
        page: page_number,
        totalPage,
        size: page_size,
      };
      dispatch(setDataCommits(dataPagination, false));
      goToCommitList();
    },
    [dispatch, goToCommitList]
  );

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
      _handleToCommit,
    },
  };
};

export default HomeLogic;

HomeLogic.dependencies = {
  navigator: HomeNavigator,
};
