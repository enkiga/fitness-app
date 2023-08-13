import {SelectedPage} from "@/shared/types";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import ContactUsGraphics from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }

    };

    return <section id="contact-us"
                    className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}></motion.div>
        {/* Header*/}
        <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}>
            <HText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores atque autem
                consequatur cumque, cupiditate doloribus ducimus ea earum eius eligendi error esse est
            </p>
        </motion.div>

        {/* Form & Image*/}
        <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}>
                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://a03ed4258622669f9c6cb015a9d89905"
                    method="POST">
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                            required: true,
                            maxLength: 150
                        })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "Name is required!"}
                            {errors.name.type === "maxLength" && "Name is too long! Max 150 characters"}
                        </p>
                    )}

                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "Email is required!"}
                            {errors.email.type === "pattern" && "Email is not valid!"}
                        </p>
                    )}

                    <textarea
                        className={inputStyles}
                        placeholder="Message"
                        rows={4}
                        cols={50}
                        {...register("message", {
                            required: true,
                            maxLength: 2000
                        })}
                    />
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "Message is required!"}
                            {errors.message.type === "maxLength" && "Message is too long! Max 2000 characters"}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        Submit
                    </button>
                </form>
            </motion.div>

            <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}>
                <div
                    className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img
                        className="w-full"
                        alt="contact-us-page-graphic"
                        src={ContactUsGraphics}
                    />
                </div>
            </motion.div>

        </div>

    </section>
};

export default ContactUs