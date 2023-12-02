"use client";
import EventDescriptions from "@/components/events/EventDescriptions";
import CalendarEvent from "@/components/events/Calendar";
import { useState, useEffect } from "react";
import axios from "axios";

const EvnetsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_CALENDAR_ID
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime&timeMin=${new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        ).toISOString()}&timeMax=${new Date(
          new Date().getMonth() === 11
            ? new Date().getFullYear() + 1
            : new Date().getFullYear(),
          new Date().getMonth() === 11 ? 0 : new Date().getMonth() + 1,
          1
        ).toISOString()}`
      )
      .then((result) => {
        setEvents(
          result.data.items.map((event) => ({
            ...event,
            allDay: event.start.dateTime ? false : true,
            start: event.start.dateTime
              ? new Date(event.start.dateTime)
              : new Date(event.start.date + "T00:00:00-07:00"),
            end: new Date(event.end.dateTime || event.end.date),
            color: "green",
          }))
        );
      });
  }, []);
  return (
    <>
      <CalendarEvent events={events} />
      <EventDescriptions events={events} />
    </>
  );
};

export default EvnetsPage;
