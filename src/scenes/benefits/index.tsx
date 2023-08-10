import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import {BenefitType, SelectedPage} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import Benefit from "@/scenes/benefits/Benefit";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the art facilities",
        description: "We provide modern equipments to help you achieve your fitness goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "We provide a wide range of classes to help you achieve your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert & Pro Trainers",
        description: "We provide experienced trainers to help you achieve your fitness goals."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }

}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* Title */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                <HText> MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipments, trainers and classes to get
                    you to your ultimate fitness goals with ease. We provide true care into
                    each and every one of our members.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
        </motion.div>
    </section>
};

export default Benefits;