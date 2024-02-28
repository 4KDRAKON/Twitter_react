import React from "react";
import Nas from "../Lib/img/nastriyka.svg"
import Nuq from "../Lib/img/uchtanuqta.svg"
import Opahon from "../Lib/img/opahon.svg"
import Bilyart from "../Lib/img/oxir.svg"
import Lupa from "../Lib/img/lupa.svg"
import { Language } from "../context/language";
import { Context } from "../context/context";
import { Context as them } from "../context/theme";

function Footer() {

    const {lang} = React.useContext(Context)
    const {theme} = React.useContext(them)
    return (
        <>
            <footer className={`footer footer--${theme}`}>
                <div className="container">
                    <img className="lupa" src={Lupa} alt="lupa" width="24" height="24" />
                    <input className="inputjon" type="text" placeholder="Search Twitter" />

                    <div className="footer_best">
                        <div className="trend">
                            <div className="for">
                                <h3 className="footer_heading">{Language[lang].footer.trend}</h3>
                                <img className="imggg" src={Nas} alt="img" />
                            </div>
                        </div>

                        <div className="trend">
                            <div className="for">
                                <p className="for_text jojojojo">{Language[lang].footer.german}</p>
                                <img className="imggg" src={Nuq} alt="img" />
                            </div>
                        </div>

                        <div className="text_div">
                            <h4 className="div_heading">{Language[lang].footer.inqilob}</h4>
                            <p className="for_text">50.4K Tweets</p>
                        </div>

                        <div className="trend">
                            <div className="for">
                                <p className="for_text jojojojo">{Language[lang].footer.german}</p>
                                <img className="imggg" src={Nuq} alt="img" />
                            </div>
                        </div>

                        <div className="text_div">
                            <h4 className="div_heading">{Language[lang].footer.inqilob}</h4>
                            <p className="for_text">50.4K Tweets</p>
                        </div>

                        <div className="trend">
                            <div className="for">
                                <p className="for_text jojojojo">{Language[lang].footer.german}</p>
                                <img className="imggg" src={Nuq} alt="img" />
                            </div>
                        </div>

                        <div className="text_div">
                            <h4 className="div_heading">{Language[lang].footer.inqilob}</h4>
                            <p className="for_text">50.4K Tweets</p>
                        </div>

                        <p className="jojojojojojojojojoj">{Language[lang].footer.kop}</p>
                    </div>

                    <div className="footer_jojo">
                        <h6 className="jojo_heading">{Language[lang].footer.like}</h6>
                        <div className="follow">
                            <img className="opahon" src={Opahon} alt="img" />
                            <div className="div_boru">
                                <h5 className="boru_heading">Mushtariy</h5>
                                <p className="for_text">@Mushtar565266</p>
                            </div>
                            <button className="btnojom">{Language[lang].footer.follow}</button>
                        </div>

                        <div className="follow">
                            <img className="okahon" src={Bilyart} alt="img" />
                            <div className="div_boru">
                                <h5 className="boru_heading">Shuhratbek</h5>
                                <p className="for_text hdhajkjdb">@mrshukhrat</p>
                            </div>
                            <button className="btnojom">{Language[lang].footer.follow}</button>
                        </div>

                        <p className="jojojojojojojojojoj">{Language[lang].footer.kop}</p>

                    </div>
                    <p className="oxiri_billet">{Language[lang].footer.oxiri}</p>
                </div>
            </footer>
        </>
    )
}
export { Footer };