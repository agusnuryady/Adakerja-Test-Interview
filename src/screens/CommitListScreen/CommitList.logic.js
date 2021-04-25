//package import here
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

//local import here
import CommitListNavigator from './CommitList.navigator';
import { DATADUMMY, STORAGE_KEY } from '../../constants';
import { clearDataCommits, setDataCommits } from '../../redux/redux-actions';

const CommitListLogic = () => {
  //package value here
  const { navigator } = CommitListLogic.dependencies;
  const { goBack, goToLogin } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [username, setUsername] = useState('');
  const [sectionList, setSectionList] = useState([]);
  const [modalLogout, setModalLogout] = useState(false);
  const commitsState = useSelector((state) => state.commits);

  //variable value here

  useEffect(() => {
    //function here
    _getData();
  }, [_getData, commitsState.data]);

  useEffect(() => {
    //function here
    return () => {
      dispatch(clearDataCommits());
    };
  }, [dispatch]);

  //place your function in here
  const _getData = useCallback(async () => {
    let name = await AsyncStorage.getItem(STORAGE_KEY.TOKEN_LOGIN);
    setUsername(name);

    const DATA = Object.values(
      commitsState.data.reduce((acc, item) => {
        if (
          !acc[
            moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').format(
              'MMM DD, YYYY'
            )
          ]
        ) {
          acc[
            moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').format(
              'MMM DD, YYYY'
            )
          ] = {
            title: moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').format(
              'MMM DD, YYYY'
            ),
            data: [],
          };
        }
        acc[
          moment(item.commitDates, 'YYYY-MM-DD hh:mm:ss').format('MMM DD, YYYY')
        ].data.push(item);
        return acc;
      }, {})
    );
    setSectionList(DATA);
  }, [commitsState.data]);

  const _logOut = useCallback(() => {
    AsyncStorage.removeItem(STORAGE_KEY.TOKEN_LOGIN);
    goToLogin();
  }, [goToLogin]);

  const _fetchLoadMore = useCallback(() => {
    if (!commitsState.isLoading && commitsState.page < commitsState.totalPage) {
      const commites = DATADUMMY.repository.filter((item) =>
        item.title.includes(commitsState.title)
      );
      const page_number = commitsState.page + 1;
      const page_size = 5;
      const totalPage = Math.ceil(commites[0].commits.length / page_size);
      const sliceData = commites[0].commits.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
      const dataPagination = {
        data: sliceData,
        title: commitsState.title,
        page: page_number,
        totalPage,
        size: page_size,
      };
      dispatch(setDataCommits(dataPagination, true));
      console.log('load', dataPagination);
    }
  }, [
    commitsState.isLoading,
    commitsState.page,
    commitsState.title,
    commitsState.totalPage,
    dispatch,
  ]);

  return {
    //data props here
    data: {
      username,
      modalLogout,
      commitsState,
      sectionList,
    },
    //actions props here
    actions: {
      goBack,
      setModalLogout,
      _logOut,
      _fetchLoadMore,
    },
  };
};

export default CommitListLogic;

CommitListLogic.dependencies = {
  navigator: CommitListNavigator,
};
