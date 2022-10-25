export type IEvent = MouseEvent & {
  currentTarget: EventTarget & HTMLButtonElement;
};
