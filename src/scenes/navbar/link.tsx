import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types.ts";

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({
                  page,
                  selectedPage,
                  setSelectedPage
              }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return <div className="flex justify-center">
        <AnchorLink
            href={`#${lowerCasePage}`}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300`}
            onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    </div>
}

export default Link;