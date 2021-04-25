//package import here
import React from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';

//local import here
import styles from './Todo.styles';
import TodoLogic from './Todo.logic';
import I18n from '../../i18n';
import { Header, Button, Card } from '../../components';
import { COLORS, STYLES } from '../../configs';
import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronUpIcon,
  EditIcon,
  PlusIcon,
  TodoIcon,
  TrashIcon,
} from '../../assets/svgs';

const ExampleHooksScreen = () => {
  //logic value here
  const { data, actions } = TodoLogic();

  //place your extension component here
  const _renderItem = ({ item, index }) => (
    <View style={styles.wrapItem}>
      <View style={[styles.row, STYLES.fx1]}>
        <Button
          onPress={() => actions._handleCheck(item.status, index)}
          styleContainer={[
            styles.containerCheck,
            !item.status && styles.borderCheck,
          ]}
          styleWrap={[styles.wrapCheck, STYLES.mrr12]}
          color={COLORS.primaryWhite}
        >
          {item.status && <CheckIcon width="25" height="25" />}
        </Button>
        <Text
          numberOfLines={1}
          style={[styles.itemText, item.status && STYLES.txtDecLineT]}
        >
          {item.name}
        </Text>
      </View>
      <View style={[styles.row, STYLES.mrl12]}>
        {!item.status && (
          <Button
            onPress={() => actions._handleEdit(item.name, index)}
            styleContainer={[styles.menuCheck]}
            styleWrap={styles.wrapCheck}
            color={COLORS.green50}
          >
            <EditIcon width="12" height="12" fill={COLORS.primaryWhite} />
          </Button>
        )}
        <Button
          onPress={() => actions._onClickTrash(index)}
          styleContainer={[styles.menuCheck]}
          styleWrap={[styles.wrapCheck, STYLES.mrl4]}
          color={COLORS.red40}
        >
          <TrashIcon width="12" height="12" fill={COLORS.primaryWhite} />
        </Button>
      </View>
    </View>
  );

  const _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <TodoIcon width="50" height="50" fill={COLORS.black70} />
      <Text style={[styles.smallText, STYLES.mrt12]}>{I18n.t('empty')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header>
        <>
          <Button
            types="nude"
            onPress={actions.goBack}
            styleContainer={styles.backContainer}
            styleWrap={styles.backWrap}
          >
            <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
          </Button>
          <Text style={styles.headerTitle}>{I18n.t('todoList')}</Text>
        </>
      </Header>
      <View style={styles.content}>
        <Text style={styles.bigText}>{I18n.t('whatsUp')}</Text>
        <View style={styles.wrapCard}>
          <Text style={[styles.smallText, STYLES.mrb12]}>
            {data.todoState.data.length} {I18n.t('task')}
          </Text>
          <Text style={[styles.title, STYLES.mrb12]}>
            {actions._percentage()}% {I18n.t('complete')}
          </Text>
          <View style={styles.wrapIndicator}>
            <View
              style={[styles.indicator, { width: `${actions._percentage()}%` }]}
            />
          </View>
        </View>
        <Text style={[styles.smallText, STYLES.mrv16]}>
          {I18n.t('todayTask')}
        </Text>
        <FlatList
          data={data.todoState.data}
          extraData={data.todoState}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
          ListEmptyComponent={_renderEmptyItem}
          contentContainerStyle={
            data.todoState.data.length === 0 && styles.emptyList
          }
        />
        <View style={styles.wrapBottom}>
          {data.isVisible && (
            <View style={styles.wrapInput}>
              <TextInput
                placeholder={I18n.t('typeHere')}
                onChangeText={(text) => actions.setInput(text)}
                value={data.input}
                style={styles.textInput}
              />
            </View>
          )}
          <Card
            types="button"
            onPress={actions._handleAddData}
            color={COLORS.yellow60}
            styleContainer={styles.containerSave}
            styleWrap={styles.containerSave}
          >
            {data.input.length > 0 ? (
              <ChevronUpIcon
                width="20"
                height="20"
                fill={COLORS.primaryWhite}
              />
            ) : (
              <PlusIcon width="20" height="20" fill={COLORS.primaryWhite} />
            )}
          </Card>
        </View>
      </View>
    </View>
  );
};

export default ExampleHooksScreen;
