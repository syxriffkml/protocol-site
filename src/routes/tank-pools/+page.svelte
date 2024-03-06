<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
	import Button from "$lib/Components/Button/Button.svelte";
    import SectionOverflow from "$lib/Components/Box/BoxOverFlow.svelte";



</script>

<div class="p-2">
    <div class="flex justify-between gap-x-2 p-10">
        <div class="w-1/3 text-center">
            <div class="text-sm text-slate-500 font-bold">
                TANK POOL TVL
            </div>
            <div class="text-4xl font-semibold">
                $ 0
            </div>
        </div>
        <div class="border" />
        <div class="w-1/3 text-center">
            <div class="text-sm text-slate-500 font-bold">
                Your BUCK in tank
            </div>
            <div class="text-4xl font-semibold">
                $ 0
            </div>
        </div>
        <div class="border" />
        <div class="w-1/3 text-center">
            <div class="text-sm text-slate-500 font-bold">
                Your BUCK balance
            </div>
            <div class="text-4xl font-semibold">
                $ 0
            </div>
        </div>
    </div>

    <div>
        <SectionOverflow></SectionOverflow>
    </div>

</div>