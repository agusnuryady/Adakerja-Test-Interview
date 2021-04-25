//package import
import React from 'react';
import { Text, ScrollView, View } from 'react-native';

//local import here
import styles from './Component.styles';
import ComponentLogic from './Component.logic';
import I18n from '../../i18n';
import { COLORS, STYLES } from '../../configs';
import {
  Alert as AlertPopUp,
  Button,
  Card,
  Header,
  Input,
} from '../../components';

const ComponentScreen = () => {
  //logic value here
  const { data, actions } = ComponentLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.title}>{I18n.t('listComponent')}</Text>
      </Header>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <AlertPopUp
          visible={data.alertSuccess}
          title={I18n.t('successAlert')}
          desc={I18n.t('successAlert')}
          types="success"
          duration={10000}
          close={() => {
            actions.setAlertSuccess(false);
          }}
        />

        <AlertPopUp
          visible={data.alertWarning}
          title={I18n.t('warningAlert')}
          desc={I18n.t('warningAlert')}
          types="warning"
          duration={10000}
          close={() => {
            actions.setAlertWarning(false);
          }}
        />

        <AlertPopUp
          visible={data.alertInformation}
          title={I18n.t('informationAlert')}
          desc={I18n.t('informationAlert')}
          types="information"
          duration={10000}
          close={() => {
            actions.setAlertInformation(false);
          }}
        />

        <AlertPopUp
          visible={data.alertError}
          title={I18n.t('errorAlert')}
          desc={I18n.t('errorAlert')}
          types="error"
          duration={10000}
          close={() => {
            actions.setAlertError(false);
          }}
        />
        <Button
          title={I18n.t('filledButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          // onPress={_handleLogin}
          color={COLORS.primaryBlue}
        />
        <Button
          title={I18n.t('ghostButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          types="ghost"
        />
        <Button
          title={I18n.t('nudeButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          types="nude"
        />
        <Button
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          isLoading={true}
          disabled
        />
        <Button
          title={I18n.t('disabledButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          disabled={true}
        />
        <Text style={[styles.text, STYLES.mrb12]}>{I18n.t('alert')}</Text>
        <Button
          title={I18n.t('successAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            actions.setAlertSuccess(true);
          }}
          color={COLORS.green80}
          isLoading={false}
        />
        <Button
          title={I18n.t('warningAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            actions.setAlertWarning(true);
          }}
          color={COLORS.yellow70}
          isLoading={false}
        />
        <Button
          title={I18n.t('informationAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            actions.setAlertInformation(true);
          }}
          color={COLORS.blue80}
          isLoading={false}
        />
        <Button
          title={I18n.t('errorAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            actions.setAlertError(true);
          }}
          color={COLORS.red70}
          isLoading={false}
        />
        <Text style={[styles.text, STYLES.mrb12]}>{I18n.t('card')}</Text>
        <Card styleWrap={[STYLES.mrh8, STYLES.mrv16]}>
          <Text style={[styles.text, STYLES.mrb12]}>
            Basic {I18n.t('card')}{' '}
          </Text>
        </Card>
        <Card types="button" styleWrap={[STYLES.mrh8, STYLES.mrv16]}>
          <Text style={[styles.text, STYLES.mrb12]}>
            Button {I18n.t('card')}
          </Text>
        </Card>
        <Text style={[styles.text, STYLES.mrb12]}>{I18n.t('input')}</Text>
        <Input
          label="Input Basic"
          placeholder="Placeholder"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          isError={true}
          errorMessage={I18n.t('formCantEmpty')}
        />
        <Input
          label="Input Basic Secure"
          value="Text Secure"
          onChangeText={(val) => {}}
          placeholder="Placeholder"
          styleWrap={STYLES.mrb20}
          isSecure={true}
        />
        <Input
          types="dropdown"
          label="Input Dropdown"
          placeholder="Placeholder"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
        />
        <Input
          types="textarea"
          label="Input Textarea"
          placeholder="Placeholder"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
        />
        <View style={STYLES.pdh8}>
          <Input
            types="button"
            label="Input Button"
            placeholder="Placeholder"
            returnKeyType="done"
            styleWrap={STYLES.mrb20}
            titleButton="Button"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ComponentScreen;
