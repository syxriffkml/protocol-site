<script lang="ts">

    export let customClass: string = 'w-full';

</script>

<div class="border border-gray-700 bg-gray-800/50 backdrop-blur-sm {customClass} p-4 rounded-md">
    <slot></slot>
</div>