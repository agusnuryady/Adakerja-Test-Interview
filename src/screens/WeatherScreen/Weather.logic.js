//package import here
import { useEffect, useState, useCallback, useMemo } from 'react';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import WeatherNavigator from './Weather.navigator';
import { IMAGES } from '../../configs';
import { getWeather } from '../../apis';

const WeatherLogic = () => {
  //package value here
  const { navigator } = WeatherLogic.dependencies;
  const { goBack } = navigator();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    //function here
    _getWeather();
    return () => controller.abort();
  }, [_getWeather, controller]);

  //place your function in here
  const _getWeather = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getWeather(abort);
      if (res.dataseries.length > 0) {
        setIsLoading(false);
        setData(res.dataseries);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error', error);
      if (!abort.aborted) {
        setIsLoading(false);
      }
    }
  }, [abort]);

  const _windSpeed = useCallback((val) => {
    switch (val) {
      case 1:
        return '0.3';
      case 2:
        return '0.3 - 3.4';
      case 3:
        return '3.4 - 8';
      case 4:
        return '8 - 10.8';
      case 5:
        return '10.8 - 17.2';
      case 6:
        return '17.2 - 24.5';
      case 7:
        return '24.5 - 32.6';
      case 8:
        return '+32.6';
    }
  }, []);

  const _weatherName = useCallback((val) => {
    switch (val) {
      case 'clear':
        return 'Clear';
      case 'pcloudy':
        return 'Cloudy';
      case 'mcloudy':
        return 'Cloudy';
      case 'cloudy':
        return 'Cloudy';
      case 'humid':
        return 'Foggy';
      case 'lightrain':
        return 'Rain';
      case 'oshower':
        return 'Rain';
      case 'ishower':
        return 'Rain';
      case 'rain':
        return 'Rain';
      case 'lightsnow':
        return 'Snow';
      case 'snow':
        return 'Snow';
      case 'rainsnow':
        return 'Snow';
      case 'ts':
        return 'Thunderstorm';
      case 'tsrain':
        return 'Thunderstorm';
      default:
        return 'Clear';
    }
  }, []);

  const _weatherColor = useCallback((val) => {
    switch (val) {
      case 'clear':
        return '#ECE3B2';
      case 'pcloudy':
        return '#B2DEEC';
      case 'mcloudy':
        return '#B2DEEC';
      case 'cloudy':
        return '#B2DEEC';
      case 'humid':
        return '#E5E5E5';
      case 'lightrain':
        return '#CACECF';
      case 'oshower':
        return '#CACECF';
      case 'ishower':
        return '#CACECF';
      case 'rain':
        return '#CACECF';
      case 'lightsnow':
        return '#FFF';
      case 'snow':
        return '#FFF';
      case 'rainsnow':
        return '#FFF';
      case 'ts':
        return '#383F41';
      case 'tsrain':
        return '#383F41';
      default:
        return '#ECE3B2';
    }
  }, []);

  const _weatherIcon = useCallback((val) => {
    switch (val) {
      case 'clear':
        return IMAGES.sunny;
      case 'pcloudy':
        return IMAGES.cloudy;
      case 'mcloudy':
        return IMAGES.cloudy;
      case 'cloudy':
        return IMAGES.cloudy;
      case 'humid':
        return IMAGES.foggy;
      case 'lightrain':
        return IMAGES.rain;
      case 'oshower':
        return IMAGES.rain;
      case 'ishower':
        return IMAGES.rain;
      case 'rain':
        return IMAGES.rain;
      case 'lightsnow':
        return IMAGES.snow;
      case 'snow':
        return IMAGES.snow;
      case 'rainsnow':
        return IMAGES.snow;
      case 'ts':
        return IMAGES.thunderstorm;
      case 'tsrain':
        return IMAGES.thunderstorm;
      default:
        return IMAGES.sunny;
    }
  }, []);

  return {
    //data props here
    data: {
      isLoading,
      data,
    },
    //actions props here
    actions: {
      goBack,
      _getWeather,
      _windSpeed,
      _weatherName,
      _weatherColor,
      _weatherIcon,
    },
  };
};

export default WeatherLogic;

WeatherLogic.dependencies = {
  navigator: WeatherNavigator,
};
