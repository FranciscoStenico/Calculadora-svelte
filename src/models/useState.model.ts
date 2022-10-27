const CLEAR = true;
const NO_CLEAR = false;

export class ReactiveCalculator {
  #value: string;
  #clean: boolean;
  #operation: string;
  #memo: number;
  //   prettier-ignore
  constructor(value: string = null, clean: boolean = false, op: string = null, memo: number = null) {
    this.#value = value;
    this.#clean = clean;
    this.#operation = op;
    this.#memo = memo;
  }

  get value() {
    return this.#value || '0';
  }

  addChar(newValue: string): ReactiveCalculator {
    return new ReactiveCalculator(
      this.#clean || !this.#value || this.#value === '0'
        ? newValue
        : this.value + newValue,
      NO_CLEAR,
      this.#operation,
      this.#memo
    );
  }

  addCommas() {
    console.log(parseFloat(this.#value));
    return new ReactiveCalculator(
      this.#value?.includes('.') ? this.#value : this.#value + '.',
      NO_CLEAR,
      this.#operation,
      this.#memo
    );
  }

  calculate(value: string = null) {
    const accumulator = !this.#memo
      ? parseFloat(this.#value)
      : eval(`${this.#memo}${this.#operation}${this.#value}`);
    const output = !this.#memo ? this.#value : `${accumulator}`;

    return new ReactiveCalculator(
      output,
      value ? CLEAR : NO_CLEAR,
      value,
      value === '=' ? null : accumulator
    );
  }

  resetInstance() {
    return new ReactiveCalculator();
  }
}
