<template>
  <div class="grid gap-4 my-auto align-middle grid-cols-[2fr,3fr,1fr] justify-items-center">
    <h1 class="col-span-full mt-8 mb-4 text-2xl font-bold">Number Conversion Tool</h1>
    <label for="decimal" class="justify-self-end self-center font-semibold text-gray-700">
      decimal
    </label>
    <div class="flex w-full">
      <div class="py-2 px-3 w-12"></div>
      <input
        v-model="decimal"
        @keyup="calculateFromDecimal()"
        id="decimal"
        type="text"
        class="
          py-2
          px-3
          w-full
          h-10
          leading-tight
          text-gray-700
          bg-gray-200
          rounded
          appearance-none
          focus:outline-none
          focus:shadow-outline
        "
      />
      <Button @copy="copyToClipboard(decimal)"></Button>
    </div>
    <div class="w-full"></div>

    <label for="binary" class="justify-self-end self-center font-semibold text-gray-700">
      binary
    </label>
    <div class="flex w-full">
      <div class="py-2 px-3 w-12 text-white bg-gray-700 rounded-tl rounded-bl">0b</div>
      <input
        v-model="binary"
        @keyup="calculateFromBinary()"
        id="binary"
        type="text"
        class="
          py-2
          px-3
          w-full
          h-10
          leading-tight
          text-gray-700
          bg-gray-200
          rounded-tr rounded-br
          appearance-none
          focus:outline-none
          focus:shadow-outline
        "
      />
      <Button @copy="copyToClipboard(binary)"></Button>
    </div>
    <div class="w-full"></div>

    <label for="octal" class="justify-self-end self-center font-semibold text-gray-700">
      octal
    </label>
    <div class="flex w-full">
      <div class="py-2 px-3 w-12 text-white bg-gray-700 rounded-tl rounded-bl">0o</div>
      <input
        v-model="octal"
        @keyup="calculateFromOctal()"
        id="octal"
        type="text"
        class="
          py-2
          px-3
          w-full
          h-10
          leading-tight
          text-gray-700
          bg-gray-200
          rounded-tr rounded-br
          appearance-none
          focus:outline-none
          focus:shadow-outline
        "
      />
      <Button @copy="copyToClipboard(octal)"></Button>
    </div>
    <div class="w-full"></div>

    <label for="hexadecimal" class="justify-self-end self-center font-semibold text-gray-700">
      hexadecimal
    </label>
    <div class="flex w-full">
      <div class="py-2 px-3 w-12 text-white bg-gray-700 rounded-tl rounded-bl">0x</div>
      <input
        v-model="hexadecimal"
        @keyup="calculateFromHexadecimal()"
        id="hexadecimal"
        type="text"
        class="
          py-2
          px-3
          w-full
          h-10
          leading-tight
          text-gray-700
          bg-gray-200
          rounded-tr rounded-br
          appearance-none
          focus:outline-none
          focus:shadow-outline
        "
      />
      <Button @copy="copyToClipboard(hexadecimal)" />
    </div>
    <div class="w-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

function fromDecimal(decimal: string, base: number) {
  return Number(decimal).toString(base)
}

function toDecimal(input: string, base: number) {
  return parseInt(input, base).toString()
}

export default defineComponent({
  name: 'NumberConversionTool',
  components: {
    Button,
  },
  data() {
    return {
      decimal: '123',
      binary: fromDecimal('123', 2),
      octal: fromDecimal('123', 8),
      hexadecimal: fromDecimal('123', 16),
    }
  },
  methods: {
    calculateFromDecimal() {
      if (this.decimal === '') {
        this.binary = this.octal = this.hexadecimal = ''

        return
      }

      if (/^\d+$/.test(this.decimal) === false) {
        this.binary = this.octal = this.hexadecimal = 'Invalid Input'

        return
      }

      this.binary = fromDecimal(this.decimal, 2)
      this.octal = fromDecimal(this.decimal, 8)
      this.hexadecimal = fromDecimal(this.decimal, 16)
    },
    calculateFromBinary() {
      if (this.binary === '') {
        this.decimal = this.octal = this.hexadecimal = ''

        return
      }

      if (/^[0-1]+$/.test(this.binary) === false) {
        this.decimal = this.octal = this.hexadecimal = 'Invalid Input'

        return
      }

      this.decimal = toDecimal(this.binary, 2)

      this.octal = fromDecimal(this.decimal, 8)
      this.hexadecimal = fromDecimal(this.decimal, 16)
    },
    calculateFromOctal() {
      if (this.octal === '') {
        this.decimal = this.binary = this.hexadecimal = ''

        return
      }

      if (/^[0-7]+$/.test(this.octal) === false) {
        this.decimal = this.binary = this.hexadecimal = 'Invalid Input'

        return
      }

      this.decimal = toDecimal(this.octal, 8)

      this.binary = fromDecimal(this.decimal, 2)
      this.hexadecimal = fromDecimal(this.decimal, 16)
    },
    calculateFromHexadecimal() {
      if (this.hexadecimal === '') {
        this.decimal = this.binary = this.octal = ''

        return
      }

      if (/^[0-9a-fA-F]+$/.test(this.hexadecimal) === false) {
        this.decimal = this.binary = this.octal = 'Invalid Input'

        return
      }

      this.decimal = toDecimal(this.hexadecimal, 16)

      this.binary = fromDecimal(this.decimal, 2)
      this.octal = fromDecimal(this.decimal, 8)
    },
    async copyToClipboard(text: string) {
      if (
        typeof navigator === 'undefined' ||
        !navigator.clipboard ||
        !navigator.clipboard.writeText
      ) {
        console.error('Writting to clipboard not supported in this browser')
      }

      try {
        await navigator.clipboard.writeText(text)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
