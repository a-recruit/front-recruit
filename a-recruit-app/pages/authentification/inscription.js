import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header/back_to_home_header'




export default function SignIn() {
    
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return (

        <>
            <Head>
                <title>Inscription a-recruit</title>
            </Head>

            <main className="login_signin_background center orientationV">
                <div className="blure2">

                    <Header/>
                    <div className="login-root">

                        <div className="box-root flex-flex flex-direction--column style1" >

                            <div className="box-root flex-flex flex-direction--column style14">
                            
                                <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <h3 className="padding-bottom--15 color-p">Inscription</h3>
                                        <form id="stripe-login">
                                        <div className="row">
                                                <div className="mb-3 col">
                                                    <label for="LastName" className="form-label color-p">Nom</label>
                                                    <input id="inputName" type="text" className="form-control inputs" name="nom" placeholder="Nom" pattern="[a-zâäàéèùêëîïôöçñA-Z-\s]" required></input>
                                                    <div id="dangerAlert"className="form-text"></div>
                                                </div>
                                                <div className="mb-3 col">
                                                    <label for="FirstName" className="form-label color-p">Prénom</label>
                                                    <input type="text" className="form-control inputs" name="nom" placeholder="Prénom" pattern="[a-zâäàéèùêëîïôöçñA-Z-0-9\s]" required></input>
                                                    <div className="form-text"></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="mb-3 col">
                                                    <label for="email" className="form-label color-p">e-mail</label>
                                                    <input type="email" className="form-control inputs" name="email" placeholder="e-mail" pattern="[a-zâäàéèùêëîïôöçñA-Z0-9.-_]+[@]{1}[a-zA_Z0-9.-_]+[.]{1}[a-z]{2,4}" required></input>
                                                    <div className="form-text"></div>
                                                </div>
                                                <div className="mb-3 col">
                                                    <label for="Phone" className="form-label color-p">Téléphone</label>
                                                    <input type="phone" className="form-control inputs" name="phone" placeholder="Téléphone"></input>
                                                    <div className="form-text"></div>
                                                </div>
                                            </div>
                                            <div className="mb-3 col">
                                                <label for="birthDay" className="form-label color-p">Date de Naissance</label>
                                                <input type="date"  className="form-control inputs" name="birthDay" />
                                                <div className="form-text"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col mb-3">
                                                    <label for="password" className="col-form-label color-p">Mot de passe</label>
                                                    <div className="col">
                                                        <input type="password" name="password" className="form-control" placeholder="Mot de passe" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"></input>
                                                    </div>
                                                </div>
                                                <div className="col mb-3">
                                                    <label for="passwordConfirm" className="col-form-label color-p">Confirmation</label>
                                                    <div className="col">
                                                        <input type="password" name="passwordConfirm" className="form-control" placeholder="Confirmez mot de passe" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="file">
                                                <label for="CV" className="col-form-label color-p">Insérer votre CV</label> 
                                                <input className="file" type="file" required></input>
                                            </div>
                                            <div className="center">
                                                <button  type="submit" className="btn btn-primary mt-4 mb-4 ">Inscription</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-link padding-top--24">
                                    <span>Vous avez déja un compte ?<Link href="/connexion"><a> Se connecter</a></Link></span>
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
