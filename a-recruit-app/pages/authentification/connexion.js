import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header/back_to_home_header'




export default function Connect() {
   
    return (
        <>
            <Head>
                <title>Connection a-recruit</title>
            </Head>

            <main className="login_signin_background center orientationV">
                <div className="blure2">

                    <Header/>

                    <div className="login-root">

                        <div className="box-root flex-flex flex-direction--column style1" >

                            <div className="box-root flex-flex flex-direction--column ">
                            
                                <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <h3 className="color-p padding-bottom--15">Connexion</h3>
                                        <form id="stripe-login">
                                            <div className="field padding-bottom--24">
                                                <label for="email" className="color-p">Email</label>
                                                <input type="email" name="email"/>
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <div className="grid--50-50">
                                                    <label for="password" className="color-p">Mot de passe</label>
                                                    <div className="reset-pass">
                                                        <a href="#">Mot de passe oublié ?</a>
                                                    </div>
                                                </div>
                                                <input type="password" name="password"/>
                                            </div>
                                                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                                    <label for="checkbox" className="color-p">
                                                        <input type="checkbox" name="checkbox"/> Rester connecter
                                                    </label>
                                                </div>
                                            <div className="field padding-bottom--24">
                                                <input type="submit" name="submit" value="Continuer"/>
                                            </div>
        
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-link padding-top--24">
                                    <span>Pas encore de compte chez nous ?<Link href="/authentification/inscription"><a> S'inscrire</a></Link></span>
                                    <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span><Link href="/inscription"><a> © A recruite</a></Link></span>
                                    <span><Link href="/inscription"><a> Contacte</a></Link></span>
                                    <span><Link href="/inscription"><a> Politique de confidentialité</a></Link></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
           
        </>
    );
}