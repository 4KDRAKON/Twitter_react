import React from "react"
import Twitter from "../Lib/img/twitterlogo.svg"
import Uy from "../Lib/img/uy.svg"
import Reshotka from "../Lib/img/reshotka.svg"
import Qongiroq from "../Lib/img/qo'g'iroq.svg"
import email from "../Lib//img/xabar.svg"
import Saqlanganlar from "../Lib/img/saqlanganlar.svg"
import List from "../Lib/img/varoq.svg"
import Odam from "../Lib/img/odam.svg"
import Uch from "../Lib/img/uchtanuqta.svg"
import Os from "../Lib/img/brat.svg"
import Oh from "../Lib/img/pizdukcha.svg"
import { Context } from "../context/context"
import { Language } from "../context/language"
import {Context as LaLA} from "../context/theme"
function Header() {
    const {lang} = React.useContext(Context)
    const {theme} = React.useContext(LaLA)

    return (
        <>
            <header className={`header header--${theme}`}>
                <img className="header__item21" src={Twitter} alt="logo" width={40} height={33} />
                <ul className="header__list">
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Uy} alt="img" width={28} height={28} />
                            {Language[lang].header.uy}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Reshotka} alt="svg" width={28} height={28} />
                           {Language[lang].header.tadqiq}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Qongiroq} alt="svg" width={28} height={28} />
                            {Language[lang].header.bil}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={email} alt="svg" width={28} height={28} />
                            {Language[lang].header.mes}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Saqlanganlar} alt="svg" width={28} height={28} />
                            {Language[lang].header.book}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={List} alt="svg" width={28} height={28} />
                           {Language[lang].header.Li}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Odam} alt="svg" width={28} height={28} />
                            {Language[lang].header.Profil}
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link">
                            <img className="imga" src={Oh} alt="svg" width={28} height={28} />
                           {Language[lang].header.mor}
                        </a>
                    </li>
                    <li className="header__item2">
                        <button className="header__btn">Tweet</button>
                    </li>
                    <li className="flev">
                        <img src={Os} alt="kjeiejk" width={50} height={50} />
                        <div>
                            <h3 className="bobur">Bobur</h3>
                            <p className="text">@bobur_mavlonov</p>
                        </div>
                        <img className="imgs" src={Uch} alt="logo" width={20} height={15} />
                    </li>
                </ul>
            </header>

        </>
    )
}

export { Header };