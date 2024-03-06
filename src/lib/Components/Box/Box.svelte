<script lang="ts">

    export let customClass: string = 'w-full';
    export let animate:boolean = false;

</script>

<div class="border border-gray-700 bg-gray-800/50 backdrop-blur-sm {customClass} p-4 rounded-md {animate? 'box':''}" >
    <slot></slot>
</div>

<style>
     .box {
        transition: transform 0.3s ease;
    }
    .box:hover {
        transform: translateY(-20px); /* Adjust the value as needed */
    }
</style>