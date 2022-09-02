<template>
    <a :href="href" :target="target" :disabled="disabled" class="db__button db__link" :class="[color, {'disabled': disabled}]" v-if="href"><slot></slot></a>
    <button v-else class="db__button" :disabled="disabled" :class="[color, {'disabled': disabled}]"><slot></slot></button>
</template>

<script>
export default {
    name: 'DbButton',
    props: {
        href: {type: String, default: null},
        target: {type: String, default: null},
        color: {type: String, default: 'primary'},
        disabled: {type: Boolean, default: false},
    }
}
</script>
  
<style lang="scss" scoped>
    .db__button {
        padding: 7px 18px;
        border: none;
        border-radius: 5px;
        font-size: 13px;
        color: #fff;
        font-weight: 500;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
        &.primary {
            background-color: rgb(34, 134, 228);
            transition: background 0.2s linear, box-shadow 0.2s linear;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
            cursor: pointer;
            &:hover {
                background: rgb(28, 111, 189);;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.1) 0px 1px 10px 0px;
            }
        }
        &.success {
            background-color: #55d161;
            transition: background 0.2s linear, box-shadow 0.2s linear;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
            cursor: pointer;
            &:hover {
                background: #48ad52;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.1) 0px 1px 10px 0px;
            }
        }
        &.danger {
            background-color: #ff6262;
            transition: background 0.2s linear, box-shadow 0.2s linear;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
            cursor: pointer;
            &:hover {
                background: #d35555;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.1) 0px 1px 10px 0px;
            }
        }
        &.disabled {
            opacity: 0.6;
            cursor: auto;
        }
    }
    .db__link {
        text-decoration: none;
        display: inline-block;
        &.disabled {
            pointer-events: none;
        }
    }
</style>