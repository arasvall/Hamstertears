import { UserInfo } from "../types/User";

type PageBannerInfo = {
    user: UserInfo,
    theme: string
}

function PageBanner (props:PageBannerInfo): JSX.Element {
    return (
        <header>
            <h2>
                HamsterTears
            </h2>
            <p>
                Welcome to Strong n' Epic { props.user.role} {props.user.name}
            </p>
        </header>
    )
}

export default PageBanner;