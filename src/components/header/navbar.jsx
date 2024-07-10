import LightLogo from '../../images/logo-light.png'
import {navmenu} from '../../datas/navmenu.js'
import { RiMagicLine } from "react-icons/ri";
import MobileMenuIcon from '../../images/mobile-menu-icon.png'

export default function Navbar () {
    return (
        <div className="text-white h-[106px] w-full px-10 flex items-center justify-between relative z-20">
            <div>
                <a href="#" target="_blank">
                    <img src={LightLogo} alt="Lunar Light Logo"/>
                </a>
            </div>
            <div className="absolute w-1/2 h-full mx-auto inset-0 flex items-center justify-center mobile:hidden">
                <ul className="flex items-center gap-1 p-2 rounded-[200px] border border-border-solid">
                    {navmenu.map((navItem,index) => (
                        <a href={navItem.link} key={index} className="text-sm font-medium text-text-gray py-[10px] px-[18px] rounded-[67px] border border-transparent hover:border-border-solid cursor-pointer transition-all hover:text-white">{navItem.name}</a>
                    ))}
                </ul>
            </div>
            <div>
                <button className="transition-all hover:shadow-special hover:shadow-white py-[16px] px-[26px] rounded-[65px] border border-border-solid text-sm flex items-center gap-2 mobile:hidden">
                    <RiMagicLine className="zinc-300 transition-all text-lg" />
                    <p>Subscribe</p>
                </button>
                {/*Mobile menu icon*/}
                <button className="hidden mobile:block">
                    <img src={MobileMenuIcon} alt="Menu Icon"/>
                </button>
            </div>
        </div>
    )
}