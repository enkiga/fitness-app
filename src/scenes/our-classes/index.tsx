import {ClassType, SelectedPage} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "@/scenes/our-classes/Class";

const classes: Array<ClassType> = [
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. ",
        image: image1
    },
    {
        name: "Cardio Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. " +
            "In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu " +
            "facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl.",
        image: image2
    },
    {
        name: "Strength Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. " +
            "In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu " +
            "facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl.",
        image: image3
    },
    {
        name: "Aerobics Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. " +
            "In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu " +
            "facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl.",
        image: image4
    },
    {
        name: "Weight Loss Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. " +
            "In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu " +
            "facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. ",
        image: image5
    },
    {
        name: "Body Building Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. " +
            "In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu " +
            "facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl.",
        image: image6
    }

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
    return <section
        id="ourclasses"
        className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod eu lorem et ultricies. In porta lorem at dui semper
                        porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                        tellus eu facilisis. Donec nisi turpis.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>

            </div>
        </motion.div>
    </section>
};

export default OurClasses;