//package import
import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import moment from 'moment';

//local import
import SholatNavigator from './Sholat.navigator';
import { getJadwal } from '../../redux/redux-actions';
import { COLORS } from '../../configs';

const SholatLogic = () => {
  //package value
  const { navigator } = SholatLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value
  const sholatState = useSelector((state) => state.sholat);
  let arr = [...Array(8).keys()];

  //variable value
  const abort = controller.signal;

  useEffect(() => {
    //function here
    if (sholatState.isFirst) {
      _getSchedule();
    }
    return () => controller.abort();
  }, [_getSchedule, controller, sholatState.isFirst]);

  //place your function in here
  const _getSchedule = useCallback(() => {
    const curentDate = moment().format('YYYY-MM-DD');
    dispatch(getJadwal('667', curentDate, abort));
  }, [abort, dispatch]);

  const _timeChecker = useCallback((before, after) => {
    if (
      moment().isBetween(
        moment(before, 'hh:mm').add(-1, 'minutes'),
        moment(after)
      )
    ) {
      return { color: COLORS.primaryWhite };
    } else if (moment().isBefore(moment(before, 'hh:mm'))) {
      return { color: COLORS.black };
    } else {
      return { color: COLORS.gray };
    }
  }, []);

  return {
    data: {
      emptyAray: arr,
      sholatState,
    },
    actions: {
      goBack,
      _getSchedule,
      _timeChecker,
    },
  };
};

export default SholatLogic;

SholatLogic.dependencies = {
  navigator: SholatNavigator,
};
