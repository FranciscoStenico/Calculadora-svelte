export type IOperations = '+' | '-' | 'x' | ':';
export type IEvent = MouseEvent & {
  currentTarget: EventTarget & HTMLButtonElement;
};