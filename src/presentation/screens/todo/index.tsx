import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {appColors} from '../../../common/constants/appColors';
import {fontFamilies} from '../../../common/constants/fontFamily';
import {Spacing} from '../../../common/utils';
import {Todo} from '../../../core/entities/todo';
import {todoStore} from '../../../di/todo.di';
import {SpaceComponent} from '../../components';
import {
  ButtonComponent,
  Row,
  ScreenComponent,
  TextComponent,
} from '../../components/share';
import InputComponent from '../../components/share/input/InputComponent';

const TodoScreen = observer(() => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleChangeTitle = (text: string) => {
    setNewTodoTitle(text);
  };

  const renderItem: ListRenderItem<Todo> = ({item}) => {
    return (
      <Row
        alignContent="center"
        justifyContent="space-between"
        styles={styles.itemTodo}>
        <TextComponent
          style={{
            textDecorationLine: item.completed ? 'line-through' : 'none',
          }}>
          {item.title}
        </TextComponent>
        <Row alignContent="center">
          <TextComponent
            color="blue"
            onPress={() => todoStore.toggleTodo(item.id)}>
            Xong
          </TextComponent>
          <SpaceComponent width={Spacing(4)} />
          <TextComponent
            color="red"
            onPress={() => todoStore.deleteTodo(item.id)}>
            Xoá
          </TextComponent>
        </Row>
      </Row>
    );
  };

  return (
    <ScreenComponent>
      <View style={styles.container}>
        <TextComponent size={26} fullWidth fontfamily={fontFamilies.bold}>
          Todos
        </TextComponent>
        <SpaceComponent height={12} />
        <Row alignContent="center">
          <View style={{flex: 1}}>
            <InputComponent
              value={newTodoTitle}
              onChangeText={handleChangeTitle}
              placeholder="Nhập việc cần làm..."
              style={{
                color: appColors.text,
              }}
              prefixes={[
                {
                  iconName: 'Profile',
                  size: 16,
                },
              ]}
            />
          </View>
          <SpaceComponent width={12} />
          <ButtonComponent
            label="Thêm"
            onPress={() => {
              todoStore.addTodo(newTodoTitle);
              setNewTodoTitle('');
            }}
            width={100}
          />
        </Row>
        <SpaceComponent height={12} />
        {/* <Row>
          <TextComponent onPress={}>Xoá tất cả</TextComponent>
        </Row> */}
        <View style={styles.listTodo}>
          {todoStore.loading ? (
            <Row>
              <ActivityIndicator color={appColors.primary} size={'large'} />
            </Row>
          ) : (
            <FlashList
              data={todoStore.todos.slice()}
              extraData={todoStore.todos.slice()}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              estimatedItemSize={100}
              ItemSeparatorComponent={() => <SpaceComponent height={12} />}
            />
          )}
        </View>
      </View>
    </ScreenComponent>
  );
});

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing(4),
    paddingBottom: 0,
  },
  listTodo: {
    flex: 1,
  },
  itemTodo: {
    borderColor: appColors.grayStart,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: Spacing(4),
    paddingVertical: Spacing(4),
  },
});
