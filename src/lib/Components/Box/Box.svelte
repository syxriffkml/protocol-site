<script lang="ts">

    export let customClass: string = 'w-full';
    export let animate:'floating' | 'floating-shadow' | 'floating-none' = 'floating-none';

</script>

<div class="border border-gray-700 bg-[#aeecff]/5 backdrop-blur-sm {customClass} p-4 rounded-md 
    { animate === 'floating' ? 'floating' : 
    animate === 'floating-shadow' ? 'floating-shadow' : 
    animate === 'floating-none' ? 'floating-none' : ''}" 
>
    <slot></slot>
</div>

<style>
     .floating {
        transition: transform 0.3s ease;
    }
    .floating:hover {
        transform: translateY(-5px); /* Adjust the value as needed */
    }
    .floating-shadow {
    transition: transform 0.3s ease;
    }

    .floating-shadow:hover {
        transform: translateY(-5px); /* Adjust the value as needed */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow properties as needed */
    }
</style>