<template>
  <div
    class="grid gap-4 my-auto align-middle grid-cols-1-to-2 justify-items-center"
  >
    <h1 class="col-span-2 mb-4 text-2xl font-bold">Number Convertion Tool</h1>
    <label
      for="decimal"
      class="self-center font-semibold text-gray-700 justify-self-end"
    >
      decimal
    </label>
    <div class="flex w-2/3">
      <input
        v-model="decimal"
        @keyup="calculateFromDecimal()"
        id="decimal"
        type="text"
        class="w-full h-10 px-3 pl-12 pr-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>

    <label
      for="binary"
      class="self-center font-semibold text-gray-700 justify-self-end"
    >
      binary
    </label>
    <div class="flex w-2/3">
      <div class="px-3 py-2 text-white bg-gray-700 rounded-tl rounded-bl">
        0b
      </div>
      <input
        v-model="binary"
        @keyup="calculateFromBinary()"
        id="binary"
        type="text"
        class="w-full h-10 px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>

    <label
      for="octal"
      class="self-center font-semibold text-gray-700 justify-self-end"
    >
      octal
    </label>
    <div class="flex w-2/3">
      <div class="px-3 py-2 text-white bg-gray-700 rounded-tl rounded-bl">
        0o
      </div>
      <input
        v-model="octal"
        @keyup="calculateFromOctal()"
        id="octal"
        type="text"
        class="w-full h-10 px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded-tr rounded-br appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>

    <label
      for="hexadecimal"
      class="self-center font-semibold text-gray-700 justify-self-end"
    >
      hexadecimal
    </label>
    <div class="flex w-2/3">
      <div class="px-3 py-2 text-white bg-gray-700 rounded-tl rounded-bl">
        0x
      </div>
      <input
        v-model="hexadecimal"
        @keyup="calculateFromHexadecimal()"
        id="hexadecimal"
        type="text"
        class="w-full h-10 px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function fromDecimal(decimal: string, base: number) {
  return Number(decimal).toString(base);
}

function toDecimal(input: string, base: number) {
  return parseInt(input, base).toString();
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      decimal: '123',
      binary: fromDecimal('123', 2),
      octal: fromDecimal('123', 8),
      hexadecimal: fromDecimal('123', 16),
    };
  },
  methods: {
    calculateFromDecimal() {
      if (this.decimal === '') {
        this.binary = this.octal = this.hexadecimal = '';

        return;
      }

      if (/^\d+$/.test(this.decimal) === false) {
        this.binary = this.octal = this.hexadecimal = 'Invalid Input';

        return;
      }

      this.binary = fromDecimal(this.decimal, 2);
      this.octal = fromDecimal(this.decimal, 8);
      this.hexadecimal = fromDecimal(this.decimal, 16);
    },
    calculateFromBinary() {
      if (this.binary === '') {
        this.decimal = this.octal = this.hexadecimal = '';

        return;
      }

      if (/^[0-1]+$/.test(this.binary) === false) {
        this.decimal = this.octal = this.hexadecimal = 'Invalid Input';

        return;
      }

      this.decimal = toDecimal(this.binary, 2);

      this.octal = fromDecimal(this.decimal, 8);
      this.hexadecimal = fromDecimal(this.decimal, 16);
    },
    calculateFromOctal() {
      if (this.octal === '') {
        this.decimal = this.binary = this.hexadecimal = '';

        return;
      }

      if (/^[0-7]+$/.test(this.octal) === false) {
        this.decimal = this.binary = this.hexadecimal = 'Invalid Input';

        return;
      }

      this.decimal = toDecimal(this.octal, 8);

      this.binary = fromDecimal(this.decimal, 2);
      this.hexadecimal = fromDecimal(this.decimal, 16);
    },
    calculateFromHexadecimal() {
      if (this.hexadecimal === '') {
        this.decimal = this.binary = this.octal = '';

        return;
      }

      if (/^[0-9a-fA-F]+$/.test(this.hexadecimal) === false) {
        this.decimal = this.binary = this.octal = 'Invalid Input';

        return;
      }

      this.decimal = toDecimal(this.hexadecimal, 16);

      this.binary = fromDecimal(this.decimal, 2);
      this.octal = fromDecimal(this.decimal, 8);
    },
  },
});
</script>
