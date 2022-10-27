import Step from '/components/Step.vue'
import IllustrationIcon from '/components/icons/Illustration.vue'
import UnionIcon from '/components/icons/Union.vue'
import ShieldCheckIcon from '/components/icons/Shieldcheck.vue'
import WritingIcon from '/components/icons/Writing.vue'
import Button1 from '/assets/images/Button1.png'
import Button2 from '/assets/images/Button2.png'
import Sign1 from '/assets/images/sign1.png'
import Letter1 from '/assets/images/letter1.png'
import Navigation1 from '/assets/images/navigation1.png'
import Paper1 from '/assets/images/paper1.png'
import Protected1 from '/assets/images/protected1.png'
import ManySign1 from '/assets/images/manysign1.png'
import Desktop1 from '/assets/images/Desktop1.png'
import Popup1 from '/assets/images/popup1.png'
import Table1 from '/assets/images/table1.png'

export default {
    title: 'Step',
    component: Step,
}

const Template = (args) => ({
    components: {
        Step,
        UnionIcon,
        WritingIcon,
        ShieldCheckIcon,
        IllustrationIcon,
    },
    setup() {
        return {
            args,
        }
    },
    template: `
        <Step v-bind="args">
        <template v-if="${'icon' in args}" v-slot:icon>${args.icon}</template>
            <template v-if="${'title' in args}" v-slot:title>${
        args.title
    }</template>
            <template v-if="${'text' in args}" v-slot:text>${
        args.text
    }</template>
            <template v-if="${'images' in args}" v-slot:images>${
        args.images
    }</template>
        </Step>
    `,
})

export const SignStep = Template.bind({})
SignStep.args = {
    icon: `<WritingIcon />`,
    title: `Sign effortlessly`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `<div class="flex flex-row items-end -z-10 justify-center lg:justify-end px-4 lg:px-0">
    <img class="-mr-1 md:-mr-3 lg:-mr-3 min-w-[180px] w-[439px]" src="${Letter1}"
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
                <img src="${Button1}" alt=""
                    class=" -z-10 mr-[3px] md:mr-2 min-w-[35px] w-[87px]" />
                <img src="${Button2}" alt="" class=" -z-10 min-w-[55px] w-[141px]" />
            </div>
        </div>
        <img src="${Sign1}" alt="" class="mb-6 lg:mb-16 min-w-[130px] w-[270px]" />
    </div>
</div>`,
}

export const StayStep = Template.bind({})
StayStep.args = {
    icon: `<ShieldCheckIcon />`,
    title: `Stay compliant`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `<div class="  
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
    <img src="${Navigation1}" alt="" class="min-w-[80px] w-[155px]" />
    <img src="${Paper1}" alt="" class="md:ml-5 min-w-[228px] w-[439px]" />
    <img class="absolute top-[38%] lg:top-[36%] xl:top-[38%] left-[42%] md:left-[45%] w-[130px] sm:w-[180px] md:w-[225px]"
        src="${Protected1}" alt="" />
</div>`,
    firstDesc: false,
}

export const MultipleStep = Template.bind({})
MultipleStep.args = {
    icon: `<IllustrationIcon />`,
    title: `Multiple signature options`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `<img src="${ManySign1}" alt="" class=" -z-10 w-[621px] mx-auto" />`,
}

export const WorkflowStep = Template.bind({})
WorkflowStep.args = {
    icon: `<UnionIcon />`,
    title: `Configure workflow`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `<div class="
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
                <img src="${Desktop1}" alt="" />
            </div>
            <div>
                <img src="${Popup1}" alt="" />
            </div>
        </div>
        <div>
            <img src="${Table1}" alt="" />
        </div>
    </div>
</div>`,
    firstDesc: false,
}
