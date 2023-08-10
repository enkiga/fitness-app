import {SelectedPage} from "@/shared/types";
import {motion} from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
    return <section
        id="ourclasses"
        className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

        </motion.div>
    </section>
};

export default OurClasses;