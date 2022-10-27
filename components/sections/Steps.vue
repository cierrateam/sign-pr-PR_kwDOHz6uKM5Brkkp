<template>
    <div class="mt-[70px] lg:mt-36  -z-10">
        <h2
            class="lg:font-openSans text-primary lg:text-center font-semibold text-[24px] lg:text-[40px] leading-[36px] lg:leading-[60px] mb-12 lg:mb-20 px-4 lg:px-0">
            <span class="text-secondary">{{$t('steps.title1')}}</span>{{$t('steps.title2')}}
            <span class="text-secondary">{{$t('steps.title3')}}</span>{{$t('steps.title4')}}
        </h2>
        <Step>
            <template #icon><WritingIcon /></template>
            <template #title>{{$t('steps.sign.title')}}</template>
            <template #text>{{$t('steps.sign.description')}}</template>
            <template #images>
                <div class="flex flex-row items-end -z-10 justify-center lg:justify-end px-4 lg:px-0">
                    <img class="-mr-1 md:-mr-3 lg:-mr-3 min-w-[180px] w-[439px]" src="../../assets/images/letter1.png"
                        alt="" />
                    <div>
                        <div class="relative">
                            <div class="
                                flex flex-row
                                items-center
                                absolute
                                right-0
                                bottom-2
                                md:bottom-4
                                pl-5
                            ">
                                <img src="../../assets/images/Button1.png" alt=""
                                    class=" -z-10 mr-[3px] md:mr-2 min-w-[35px] w-[87px]" />
                                <img src="../../assets/images/Button2.png" alt="" class=" -z-10 min-w-[55px] w-[141px]" />
                            </div>
                        </div>
                        <img src="../../assets/images/sign1.png" alt="" class="mb-6 lg:mb-16 min-w-[130px] w-[270px]" />
                    </div>
                </div>
            </template>
        </Step>
        <Step :firstDesc=false>
            <template #icon><ShieldCheckIcon /></template>
            <template #title>{{$t('steps.stay.title')}}</template>
            <template #text>{{$t('steps.stay.description')}}</template>
            <template #images>
                <div class="  
                    -z-10            
                    bg-lightgrey
                    lg:rounded-r-xl
                    flex flex-row
                    justify-center
                    items-center
                    xl:px-28
                    px-4
                    xl:py-20
                    py-9
                    relative
                ">
                    <img src="../../assets/images/navigation1.png" alt="" class="min-w-[80px] w-[155px]" />
                    <img src="../../assets/images/paper1.png" alt="" class="md:ml-5 min-w-[228px] w-[439px]" />
                    <img class="absolute top-[38%] lg:top-[36%] xl:top-[38%] left-[42%] md:left-[45%] w-[130px] sm:w-[180px] md:w-[225px]"
                        src="../../assets/images/protected1.png" alt="" />
                </div>
            </template>
        </Step>
        <Step>
            <template #icon><IllustrationIcon /></template>
            <template #title>{{$t('steps.multiple.title')}}</template>
            <template #text>{{$t('steps.multiple.description')}}</template>
            <template #images>
                <img src="../../assets/images/manysign1.png" alt="" class=" -z-10 w-[621px] mx-auto" />
            </template>
        </Step>
        <Step :firstDesc=false>
            <template #icon><UnionIcon /></template>
            <template #title>{{$t('steps.workflow.title')}}</template>
            <template #text>{{$t('steps.workflow.description')}}</template>
            <template #images>
                <div class="
                    -z-10               
                    bg-lightgrey
                    lg:rounded-r-xl
                    flex flex-row
                    justify-center
                    items-center
                    lg:px-24
                    px-3
                    lg:py-20
                    py-9
                ">
                    <div class="justify-center">
                        <div class="flex flex-row items-start justify-start ml-2">
                            <div>
                                <img src="../../assets/images/Desktop1.png" alt=""/>
                            </div>
                            <div>
                                <img src="../../assets/images/popup1.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="../../assets/images/table1.png" alt="" />
                        </div>
                    </div>
                </div>
            </template>
        </Step>
    </div>
</template>

<script setup>

import Step from '../Step.vue';
import IllustrationIcon from "../icons/Illustration.vue";
import UnionIcon from "../icons/Union.vue";
import ShieldCheckIcon from "../icons/Shieldcheck.vue";
import WritingIcon from "../icons/Writing.vue";

</script>

