<template>
  <div class="ui-dialog" v-if="isShowDialog">
    <div class="dialog-mask"></div>
    <div class="dialog-wrap">
      <div class="dialog-main">
        <div v-if="!!title" class="dialog-title" :class="{ 'single-title': type == 'single-title' }">{{ title }}</div>
        <div v-if="!!subtitle" class="dialog-subtitle" :class="{ 'single-subtitle': type == 'single-subtitle' }" v-html="subtitle"></div>
        <div v-if="!!subtitleHtml" v-html="subtitleHtml" class="dialog-subtitle" :class="{ 'single-subtitle': type == 'single-subtitle' }"></div>
      </div>

      <!-- 双行按钮 -->
      <div v-if="isShowDoubleBtn" class="dialog-footer">
        <div class="dialog-btn is-cancel" @click="clickCancel" v-html="cancelText"></div>

        <a v-if="!!phone" class="dialog-btn is-ok" :href="`tel:${phone}`" v-html="confirmText"></a>
        <div v-else class="dialog-btn is-ok" @click="clickConfirm" v-html="confirmText"></div>
      </div>

      <!-- 单行按钮 -->
      <div v-else class="dialog-footer">
        <a class="dialog-btn is-ok single-btn" @click="clickConfirm" v-html="confirmText"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: String,
    subtitle: String,
    subtitleHtml: String,
    // right
    confirmText: {
      default: '我知道了',
      type: String
    },
    phone: String,
    confirm: {
      type: Function
    },
    // left
    cancelText: {
      default: '我知道了',
      type: String
    },
    cancel: {
      type: Function
    }
  },

  computed: {
    // 用于样式class
    type () {
      if (!!this.title && (!!this.subtitle || !!this.subtitleHtml)) {
        return 'double'
      } else if (this.title) {
        return 'single-title'
      } else if (!!this.subtitle || !!this.subtitleHtml) {
        return 'single-subtitle'
      }
    },

    isShowDialog () {
      return this.show && (!!this.title || !!this.subtitle || !!this.subtitleHtml)
    },

    isShowDoubleBtn () {
      return (!!this.confirm || !!this.phone) && !!this.cancel
    }
  },

  created () {
    const style = document.createElement('style')
    style.innerHTML = `
      .ui-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 9999;
      }

      .dialog-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }

      .dialog-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        width: 7.266667rem;
        z-index: 100;
        background: #fff;
        border-radius: 10px;
      }

      .dialog-title {
        text-align: center;
        color: #333;
        font-size: 17px;
        font-weight: 400;
        margin-top: 22px;
        margin-bottom: 8px;
      }

      .dialog-title.single-title {
        line-height: initial;
        height: 70px;
        line-height: 70px;
      }

      .dialog-subtitle {
        color: #666;
        font-size: 14px;
        line-height: 20px;
        padding: 0 30px 22px 30px;
        white-space: pre-wrap;
        text-align: center;
      }
      .dialog-subtitle .origin{
        color: #FF763A;
      }
      .dialog-subtitle.single-subtitle {
        padding: 20px 30px;
      }

      .dialog-footer {
        width: 100%;
        height: 45px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      .dialog-btn {
        float: left;
        width: 49.5%;
        height: 43px;
        line-height: 43px;
        text-align: center;
        font-size: 17px;
      }

      .dialog-btn.is-cancel {
        color: #999;
      }

      .dialog-btn.is-ok {
        color: #23cd77;
        border-left: 1px solid #f0f0f0;
      }

      .dialog-btn.single-btn {
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }`

    document.body.appendChild(style)
  },

  methods: {
    clickConfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm()
      } else {
        this.show = false
      }
    },

    clickCancel () {
      if (typeof this.cancel === 'function') {
        this.cancel()
      } else {
        this.show = false
      }
    }
  }
}
</script>
