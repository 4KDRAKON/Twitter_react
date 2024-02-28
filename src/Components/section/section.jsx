import React from "react";
import Star from "../Lib/img/yulduz.svg"
import Image from "../Lib/img/Group34.png"
import Img from "../Lib/img/img.svg"
import Gif from "../Lib/img/gif.svg"
import Diag from "../Lib/img/diagram.svg"
import Smile from "../Lib/img/smile.svg"
import Chislo from "../Lib/img/chislo.svg"
import Sms from "../Lib/img/sms.svg"
import BK from "../Lib/img/or_kel.svg"
import Like from "../Lib/img/like.svg"
import Sent from "../Lib/img/sent.svg"
import Dio from "../Lib/img/dio.svg"
import Djojo from "../Lib/img/jojo.svg"
import Oh from "../Lib/img/uchtanuqta.svg"
import Kassoy from "../Lib/img/kassoy.svg"
import Sms2 from "../Lib/img/sms2.svg"
import Like2 from "../Lib/img/like2.svg"
import Bor from "../Lib/img/bor-kel.svg"
import Kabab from "../Lib/img/kabab.png"
import Yobirello from "../Lib/img/yobirello.svg"
import { Context as la } from "../context/context";
import { Language } from "../context/language";
import { Context } from "../context/theme";

function Section() {

    const {lang, setLang} = React.useContext(la)
    const {theme, setTheme} = React.useContext(Context)
    
    return (
        <>
            <section className={`main main--${theme}`}>
                <div className="container">

                    <span className="line_T"></span>

                    <div className="not_flex">
                        <div className="home">
                            <h2 className="home_heading">{Language[lang].header.uy}</h2>
                            <select  value={lang} onChange={(evt)=> setLang(evt.target.value)}>
                                <option value="uz">UZ</option>
                                <option value="En">EN</option>
                            </select>

                            <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
                            <img className="home_img" src={Star} alt="img" width={24} height={24} />
                        </div>

                        <div className="what">
                            <div className="best_what">
                                <img className="best_img" src={Image} alt="img" />
                            </div>

                            <div className="imagess">
                                <div className="div_img">
                                    <img className="imgsss" src={Img} alt="img" />
                                    <img className="imgsss" src={Gif} alt="img" />
                                    <img className="imgsss" src={Diag} alt="img" />
                                    <img className="imgsss" src={Smile} alt="img" />
                                    <img className="imgsss" src={Chislo} alt="img" />
                                </div>

                                <button className="btnjon">Tweet</button>
                            </div>

                            <span className="line_Yo"></span>

                            <div className="inner">
                                <div className="inner_flex">
                                    <img className="immer_jekchan" src={Djojo} alt="img" />
                                    <div className="jojo">
                                        <h2 className="inner_heading">Designsta <span className="inner_span">@inner · 25m</span> </h2>
                                        <p className="inner_text">{Language[lang].section.muhokama}</p>
                                    </div>
                                    <img className="inner_nuqta" src={Oh} alt="img" />
                                </div>
                                <div className="like_payk">
                                    <img className="pizdukcha" src={Sms} alt="img" />
                                    <img className="pizdukcha" src={BK} alt="img" />
                                    <img className="pizdukcha" src={Like} alt="img" />
                                    <img className="pizdukcha" src={Sent} alt="img" />
                                    <img className="pizdukcha" src={Dio} alt="img" />
                                </div>
                            </div>

                            <span className="line_Yo"></span>

                            <div className="inner">
                                <div className="inner_flex">
                                    <img className="immer_jekchan" src={Kassoy} alt="img" />
                                    <div className="jojo">
                                        <h2 className="inner_heading">cloutexhibition <span className="inner_span">@RajLahoti · 22m</span> </h2>
                                        <p className="inner_text">{Language[lang].section.muhokama2}</p>
                                    </div>
                                    <img className="inner_nuqta nuqtalar" src={Oh} alt="img" />
                                </div>
                                <div className="like_payk margin">
                                    <img className="pizdukcha" src={Sms2} alt="img" />
                                    <img className="pizdukcha" src={Bor} alt="img" />
                                    <img className="pizdukcha" src={Like2} alt="img" />
                                    <img className="pizdukcha" src={Sent} alt="img" />
                                    <img className="pizdukcha" src={Dio} alt="img" />
                                </div>
                            </div>

                            <span className="line_Yo"></span>

                            <div className="inner djodjo">
                                <div className="inner_flex">
                                    <img className="immer_jekchan" src={Yobirello} alt="img" />
                                    <div className="jojo">
                                        <h2 className="inner_heading">CreativePhoto <span className="inner_span">@cloutexhibition · 1h</span> </h2>
                                        <p className="inner_text widthjon">{Language[lang].section.abet}
                                        {Language[lang].section.kechirim}</p>
                                    </div>
                                    <img className="nuqtalarr" src={Oh} alt="img" />
                                </div>

                                <img className="kalbasa_sasiska" src={Kabab} alt="" />

                                <div className="like_payk">
                                    <img className="pizdukcha" src={Sms} alt="img" />
                                    <img className="pizdukcha" src={BK} alt="img" />
                                    <img className="pizdukcha" src={Like} alt="img" />
                                    <img className="pizdukcha" src={Sent} alt="img" />
                                    <img className="pizdukcha" src={Dio} alt="img" />
                                </div>
                           
                                <span className="line_Yo yobr"></span>


                            </div>

                        </div>
                    </div>

                    <span className="line_Y"></span>
                    <span className="line_T chiziqq"></span>

                </div>
            </section>
        </>
    )
}
export { Section };