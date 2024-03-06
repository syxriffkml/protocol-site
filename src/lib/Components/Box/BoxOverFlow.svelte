<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
	import Button from "$lib/Components/Button/Button.svelte";



</script>

<div class="flex">
    <div class="w-[54px]" />
    <div>
        <Section customClass={"relative min-w-[30%] space-y-4"} animate={true}>
            <div>
                <div class="-translate-x-[50px] -translate-y-[10px] absolute bg-white z-50  rounded-full p-1.5">
                    <img src="https://app.bucketprotocol.io/images/vsui-icon.svg" alt="">
                </div>
                <div class="-translate-x-[40px] w-[200px] bg-white text-black text-2xl text-right p-1 pr-4 font-semibold rounded-full">
                    haSUI
                </div>
            </div>

        
            <div class="w-[80%] mx-auto">
                <div>
                    total deposited
                </div>
                <div class="text-2xl">
                    6.19k
                </div>
                <div class="flex justify-between gap-4">
                    <div class="w-full">
                        <p>
                            Deposited $BUCK
                        </p>
                        <div>
                            0
                        </div>
                    </div>
                    <div class="w-full">
                        <p>
                            Deposited $BUCK
                        </p>
                        <div>
                            0
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-2 w-full">
                <Button customClass={"w-full"}>
                    Deposit
                </Button>
                <Button mode={"blue-inverted"} customClass={"w-full"}>
                    Deposit
                </Button>
            </div>

        </Section>
    </div>
</div>