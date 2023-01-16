<template>
  <div
      v-if="isShow"
      class="window-results"
      draggable="true"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drag="onDrag"
      :style="{ left: `${leftWindow}px`, top: `${topWindow}px` }"
  >
    <div class="window-results__container">
      <div class="window-results__top-panel">
        <p
            class="window-results__top-panel-icon"
            @click="$emit('close-window')"
        >+</p>
      </div>
      <UButton
          :key="i" v-for="(item, i) in resultList"
          :title="item['CharCode']"
          :description="`(${item['Name']})`"
          @on-click-button="$emit('on-click-button', $event)"
      />
    </div>
  </div>
</template>

<script>
import UButton from "@/components/U/Button/UButton.vue";
export default {
  name: "WindowResults",
  components: { UButton },
  props: {
    resultList: {
      type: Array,
      default: () => [],
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    dragWith: {
      type: String,
      default: 'jump',
      validate: (val) => ['move', 'jump'].includes(val)
    },
  },
  data() {
    return {
      leftWindow: 261,
      topWindow: 48,
      startX: 0,
      startY: 0,
    };
  },
  methods: {
    onDragStart({ x, y }) {
      this.startX = x;
      this.startY = y;
    },

    onDrag(e) {
      const { x, y } = e;
      if (this.dragWith !== 'move' || (!x && !y)) return;
      this.dragHandler(e);
      this.startX = x;
      this.startY = y;
    },

    onDragEnd(e) {
      if (this.dragWith === 'jump') {
        this.dragHandler(e);
      }
      if (this.dragWith === 'move') {
        const { x, y } = e;
        this.startX = x;
        this.startY = y;
      }
    },

    dragHandler({ x, y }) {
      if (x > this.startX && y > this.startY) {
        this.leftWindow = this.leftWindow + Math.abs(this.startX - x);
        this.topWindow = this.topWindow + Math.abs(this.startY - y);
      }
      if (x < this.startX && y < this.startY) {
        this.leftWindow = this.leftWindow - Math.abs(this.startX - x);
        this.topWindow = this.topWindow - Math.abs(this.startY - y);
      }
      if (x > this.startX && y === this.startY) {
        this.leftWindow = this.leftWindow + Math.abs(this.startX - x);
      }
      if (x < this.startX && y === this.startY) {
        this.leftWindow = this.leftWindow - Math.abs(this.startX - x);
      }
      if (x === this.startX && y > this.startY) {
        this.topWindow = this.topWindow + Math.abs(this.startY - y);
      }
      if (x === this.startX && y < this.startY) {
        this.topWindow = this.topWindow - Math.abs(this.startY - y);
      }
      if (x > this.startX && y < this.startY) {
        this.leftWindow = this.leftWindow + Math.abs(this.startX - x);
        this.topWindow = this.topWindow - Math.abs(this.startY - y);
      }
      if (x < this.startX && y > this.startY) {
        this.leftWindow = this.leftWindow - Math.abs(this.startX - x);
        this.topWindow = this.topWindow + Math.abs(this.startY - y);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "window-results";
</style>
