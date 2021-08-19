<template>
    <a v-if="item.type === 'file'" :href="item.url"
       class="d-inline-block pui-button text-decoration-none"
    >
        <span class="is-secondary">
            <p-icon icon="mdi mdi-link-variant"></p-icon> {{item.name}}
        </span>
    </a>
</template>

<script>
    export default {
        name: 'attachment',
        props: {
            item: {
                type: Object,
                required: true,
            }
        }
    }
</script>