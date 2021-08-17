<template>
    <ul class="d-flex">
        <li class="cursor-pointer mr-3" @click="$emit('input', false)">
            <p-icon size="is-large" icon="mdi mdi-view-day-outline"
                    :class="value ? 'is-hint' : 'is-secondary'"/>
        </li>
        <li class="cursor-pointer" @click="$emit('input', true)">
            <p-icon size="is-large" icon="mdi mdi-view-grid-outline"
                    :class="value ? 'is-secondary' : 'is-hint'"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'grid-type-toggler',

        props: {
            value: {
                type: Boolean,
            }
        }
    }
</script>