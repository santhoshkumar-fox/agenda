import { EventItem, PackedEvent, TimelineCalendar } from '@howljs/calendar-kit';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const exampleEvents = [
  {
    id: '1',
    title: 'Event 1',
    start: '2022-11-15T09:00:05.313Z',
    end: '2022-11-15T12:00:05.313Z',
    color: 'purple',
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2022-11-16T11:00:05.313Z',
    end: '2022-11-16T14:00:05.313Z',
    color: '#B1A',
  },
  {
    id: '3',
    title: 'test',
    start: '2022-11-14T09:00:05.313Z',
    end: '2022-11-14T12:00:05.313Z',
    color: 'purple',
  },
  {
    id: '4',
    title: 'test 2',
    start: '2022-11-17T11:00:05.313Z',
    end: '2022-11-17T14:00:05.313Z',
    color: '#B1A',
  },
];

const SimpleCalendar = ({initialDate}) => {
  const [events, setEvents] = useState(exampleEvents);
  const [selectedEvent, setSelectedEvent] = useState();

  const _onLongPressEvent = (event) => {
    setSelectedEvent(event);
  };

  const _onPressCancel = () => {
    setSelectedEvent(undefined);
  };

  const _onPressSubmit = () => {
    setEvents((prevEvents) =>
      prevEvents.map((ev) => {
        if (ev.id === selectedEvent?.id) {
          return { ...ev, ...selectedEvent };
        }
        return ev;
      })
    );
    setSelectedEvent(undefined);
  };

  const _renderEditFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={_onPressCancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={_onPressSubmit}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <TimelineCalendar
        viewMode="week"
        initialDate={initialDate}
        events={events}
        onLongPressEvent={_onLongPressEvent}
        selectedEvent={selectedEvent}
        onEndDragSelectedEvent={setSelectedEvent}
        // Optional
        dragStep={20}
        theme={{
          dragHourColor: 'red',
          dragHourBorderColor: '#001253',
          dragHourBackgroundColor: 'red',
          editIndicatorColor: '#FFF',
        }}
        // End Optional
      />
      {!!selectedEvent && _renderEditFooter()}
    </SafeAreaView>
  );
};

export default SimpleCalendar;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    height: 85,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 45,
    paddingHorizontal: 24,
    backgroundColor: '#1973E7',
    justifyContent: 'center',
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  btnText: { fontSize: 16, color: '#FFF', fontWeight: 'bold' },
});