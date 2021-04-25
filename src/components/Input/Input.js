//package import
import React, { memo, forwardRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS, STYLES } from '../../configs';
import Button from '../Button';
import {
  ArrowDropdownIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '../../assets/svgs';

const Input = forwardRef(
  (
    {
      types,
      styleWrap,
      styleLabel,
      label,
      isError,
      styleError,
      errorMessage,
      styleBox,
      onChangeText,
      placeholder,
      value,
      styleTextInput,
      isSecure,
      maxLengthTextArea,
      onPressButton,
      colorButton,
      disableButton,
      titleButton,
      shadow,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    const InputComponent = () => {
      switch (types) {
        case 'basic':
          return (
            <View
              style={[styles.boxInput, isError && styles.boxError, styleBox]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[styles.textInput, styleTextInput]}
                secureTextEntry={isSecure ? isVisible : false}
                {...props}
              />
              {isSecure && (
                <Button
                  types="nude"
                  onPress={() => setIsVisible(!isVisible)}
                  styleWrap={styles.wrapButtonEye}
                  styleContainer={styles.containerButtonEye}
                >
                  {isVisible ? (
                    <VisibilityIcon
                      width="24"
                      height="24"
                      fill={COLORS.black80}
                    />
                  ) : (
                    <VisibilityOffIcon
                      width="24"
                      height="24"
                      fill={COLORS.black80}
                    />
                  )}
                </Button>
              )}
            </View>
          );
        case 'dropdown':
          return (
            <Button
              types="ghost"
              styleWrap={styles.wrapBoxInputDropdown}
              styleContainer={[
                styles.boxInputDropdown,
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                editable={false}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[styles.textInput, styleTextInput]}
                {...props}
              />
              <ArrowDropdownIcon width="12" height="12" fill={COLORS.black70} />
            </Button>
          );
        case 'textarea':
          return (
            <View
              style={[
                styles.boxInputTextArea,
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                multiline={true}
                maxLength={maxLengthTextArea}
                style={[styles.textInput, styleTextInput]}
                {...props}
              />
            </View>
          );
        case 'button':
          return (
            <View
              style={[
                styles.boxInputButton,
                isError && styles.boxError,
                shadow && styles.shadow,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[styles.textInput, STYLES.pdh8, styleTextInput]}
                {...props}
              />
              <Button
                onPress={onPressButton}
                styleWrap={styles.wrapInputButton}
                color={colorButton}
                disabled={disableButton}
                styleContainer={styles.containerInputButton}
                title={titleButton}
              />
            </View>
          );
      }
    };

    return (
      <View style={[styles.wrapInput, styleWrap]}>
        {label ? (
          <Text style={[styles.textLabel, styleLabel]}>{label}</Text>
        ) : null}
        {InputComponent()}
        <View style={styles.wrapError}>
          {isError && errorMessage ? (
            <Text style={[styles.textError, styleError]}>{errorMessage}</Text>
          ) : (
            <View />
          )}
          {types === 'textarea' && (
            <Text style={styles.textLength}>
              {value.length}/{maxLengthTextArea}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

Input.propTypes = {
  types: PropTypes.oneOf(['basic', 'dropdown', 'textarea', 'button']),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  label: PropTypes.string,
  isError: PropTypes.bool,
  styleError: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  errorMessage: PropTypes.string,
  styleBox: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  styleTextInput: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  isSecure: PropTypes.bool,
  maxLengthTextArea: PropTypes.number,
  onPressButton: PropTypes.func,
  colorButton: PropTypes.string,
  disableButton: PropTypes.bool,
  titleButton: PropTypes.string,
  shadow: PropTypes.bool,
};

Input.defaultProps = {
  types: 'basic',
  styleWrap: {},
  styleLabel: {},
  label: '',
  isError: false,
  styleError: {},
  errorMessage: '',
  styleBox: {},
  onChangeText: () => null,
  placeholder: '',
  value: '',
  styleTextInput: {},
  isSecure: false,
  maxLengthTextArea: 250,
  onPressButton: () => {},
  colorButton: COLORS.primaryBlue,
  disableButton: false,
  titleButton: '',
  shadow: true,
};

Input.displayName = 'Input';

export default memo(Input);
