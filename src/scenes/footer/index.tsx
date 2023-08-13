import Logo from "@/assets/Logo.png"

const Footer = () => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                </p>
                <p>© Evogym All Right Reserved </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5"> Lorem ipsum dolor</p>
                <p className="my-5"> Lorem ipsum dolor</p>
                <p>Sed euismod eu lorem et ultricies </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> tellus eu facilisis. Donec nisi turpis, iaculis et arcur</p>
                <p>(+254) 123-456789</p>

            </div>

        </div>

    </footer>
};

export default Footer;