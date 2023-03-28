import type { Events, Event, Screen, Meta, Option } from './eventData.types';

const gameID = 'corpo';

export function newEvent(): Event {
  const meta = newMeta();
  return {
    meta,
    start: newScreen('start'),
  };
}

function newMeta(): Meta {
  const id = crypto.randomUUID();
  return {
    title: null,
    repeatable: false,
    slug: '',
    id,
  };
}

function newScreen(title?: string): Screen {
  if (typeof title === undefined) title = null;
  return {
    title: title,
    text: null,
    options: [newOption()],
  };
}

function newOption(): Option {
  return {
    text: null,
    next: null,
  };
}

export function setLocalStorage(gameID: string, events: Events): void {
  localStorage.set(gameID, JSON.stringify(events));
}

export function getLocalStorage(gameID: string): Events {
  return JSON.parse(localStorage.getItem(gameID));
}
