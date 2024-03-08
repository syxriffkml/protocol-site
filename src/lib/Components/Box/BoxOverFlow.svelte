<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
	import Button from "$lib/Components/Button/Button.svelte";

    export let header:string = 'haSUI'
    export let animate:'floating' | 'floating-shadow' | 'floating-none' = 'floating-none';
    export let width: string = 'w-auto'


</script>

<div class="flex {width}">
    <div class="hidden xl:block xl:min-w-[54px]" />
    <Section customClass={"relative w-full space-y-4 pt-8 px-8 pb-6"} {animate}>
        <div class="pt-4">
            <div class="xl:-translate-x-[65px] -translate-y-[30px] absolute bg-white z-20  rounded-full p-1.5">
                <img src="https://app.bucketprotocol.io/images/vsui-icon.svg" alt="">
            </div>
            <div class="xl:-translate-x-[40px] -translate-y-[15px] w-fit xl:w-[200px] bg-white text-black text-2xl text-right p-1 pr-4 font-semibold rounded-full">
                <div class="ml-20">
                    {header}
                </div>
            </div>
        </div>
        <slot></slot>
    </Section>
</div>