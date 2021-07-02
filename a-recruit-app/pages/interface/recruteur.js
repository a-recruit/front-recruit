import React ,{useState,useEffect}from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ShowOrHideLayout from '../../components/layouts/show_hide_layout'
import WrapListLayout from '../../components/layouts/wrap_list_layout'
import Agenda from '../../components/others/agenda'
import Axios from 'axios'

export default function recruteur({data}) {

    console.log(data)

    //Variables des formulaires

    const [company_name,setCompanyName]=useState(false);
    const [company_nationality, setCompanyNationality]=useState(false);
    const [company_representative_status, setCompanyRepresentativeStatus]=useState(false);
    const [company_rcs, setCompanyRcs]=useState(false);
    const [company_headquarters, setCompanyHeadquarters]=useState(false);
    const [company_zip_code, setCompanyZipCode]=useState(false);
    const [company_address, setCompanyAddress]=useState(false);
    const [company_department, setCompanyDepartment]=useState(false);
    const [company_phone_number, setCompanyPhoneNumber]=useState(false);
    const [company_city, setCompanyCity]=useState(false);
    const [company_country, setCompanyCountry]=useState(false);
    const [is_partner, setIsPartner]=useState(0);
    const [partner_type, setPartnerType]=useState('no');
    const [consultant_id, setConsultantId]=useState(5);
    const [company_representative_id, setCompanyRepresentative]=useState(25);
    /* Job hooks */

    const [job_title, setJobTitle]=useState(false);
    const [job_country, setJobCountry]=useState('RPC');
    const [job_department, setJobDepartment]=useState('Yunan');
    const [job_required_grad, setJobRequiredGrade]=useState('Master');
    const [job_required_experience, setJobRequiredExperience]=useState('25');
    const [job_required_level, setJobRequiredLevel]=useState('24');
    const [job_presentation_pdf, setJobPresentationPDF]=useState(false);
    const [job_presentation_video, setJobPresentationVideo]=useState('video');
    const [job_city, setJobCity]=useState("Shanghai");
    const [job_zip_code, setJobZipCode]=useState("55452");
    const [job_creator_id, setJobCreatorId]=useState(26);
    const [job_origin, setJobOrigin]=useState("test");
    const [job_statut, setJobStatut]=useState("available");
    const [job_contract_type, setJobContractType]=useState("CDI");

    //Verifier si les infos sur l'entreprise sont tous données
    var register_todo = "A TERMINER";

    if(data.company_info.length !==0){
        register_todo = "TERMINÉ";
    }

   
    
    //Ancre 
    const [show_hide1, setShow_hide1] =useState("");
    const [show_hide2, setShow_hide2] =useState(false);

    //Allerte
    
    const finalization = (e)=>{
        e.preventDefault()

        setShow_hide1(false)
        
        
        if(!company_name || !company_nationality || !company_phone_number || !company_headquarters || !company_address || !company_department || !company_city
            || !company_rcs || !company_zip_code || !company_country || !company_representative_status){

            alert(" Veuillez remplir tous les champs concernat votre entreprise")

        }else{

           Axios.post('http://localhost:3080/createCompany',{
                
                company_name:company_name,
                company_nationality:company_nationality,
                company_representative_status:company_representative_status,
                company_rcs:company_rcs,
                company_address:company_address,
                company_department:company_department,
                company_phone_number:company_phone_number,
                company_headquarters:company_headquarters,
                company_zip_code:company_zip_code,
                company_city:company_city,
                company_country:company_country,
                company_representative_id:company_representative_id,
                is_partner:is_partner,
                partner_type:partner_type,
                consultant_id:consultant_id

            }).then((resutlt)=>{
                
                if(!resutlt.data.err){
                    
                   
                }else {
                     setAlert("Deja inscrit")
                }
            });
            console.log(finalization);
        }
    }

    const newJobPosting = (e)=>{
        e.preventDefault()
        if(!job_title || !job_contract_type || !job_country || !job_department || !job_required_grad || !job_required_level || !job_required_experience
            || !job_presentation_pdf || !job_presentation_video || !job_city || !job_zip_code || !job_creator_id || !job_origin
            || !job_statut){

                alert('Veuillez remplire tout les champs')
            
        }else{

           Axios.post('http://localhost:3080/createJob',{
                
                job_title:job_title,
                job_contract_type:job_contract_type,
                job_country:job_country,
                job_department:job_department,
                job_required_grad:job_required_grad,
                job_required_level:job_required_level,
                job_required_experience:job_required_experience,
                job_presentation_pdf:job_presentation_pdf,
                job_presentation_video:job_presentation_video,
                job_city:job_city,
                job_zip_code:job_zip_code,
                job_creator_id:job_creator_id,
                job_origin:job_origin,
                job_statut:job_statut

            }).then((resutlt)=>{
                
                if(!resutlt.data.err){
                    window.location.href = `../interface/recruteur`
                }else {
                     setAlert("Merci de remplir tous les champs")
                }
            });
            console.log(newJobPosting);
        }
    }

    return (
        <div className="interface-layout">
            <Head>
                <title>A recruit | Recruteur</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*---------------*/}
            <Header/>
            {/*---------------*/}
            
            <main className="body">
                   

                <ShowOrHideLayout
                    title = "TERMINER L'INSCRIPTION DE MON ENTREPRISE"
                    statut = {register_todo}
                    show_hide = {show_hide1}
                    callback = {(state)=>setShow_hide1("")}
                >
                    <div className="register_todo_container">
                        <div className="underline register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Nom de l'entreprise :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Nationalité de l'entreprise :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyNationality(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Qualité du signataire :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyRepresentativeStatus(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>RCS + Ville :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyRcs(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Tel :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyPhoneNumber(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Siège social :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyHeadquarters(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Département :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyDepartment(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Code postal :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyZipCode(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Ville :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyCity(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Adresse :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyAddress(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Pays :</label><input placeholder={"..."} type="text" name="ent_name" required onChange={(e)=>{setCompanyCountry(e.target.value)}}/>
                            </div>
                            
                        </div> 
                        {
                        register_todo === "A TERMINER"?
                            <div className="orientationH spaceBetween fromRight "><div className="button full mbem" onClick={(e)=>{finalization(e)}}>VALIDER</div></div>
                        :                           
                            <div className="orientationH spaceBetween fromRight "><div className="button full mbem" onClick={(e)=>{finalization(e)}}>MODIFIER</div></div>
                        }
                    </div>
                </ShowOrHideLayout>
                

                {/* ZONE FAIRE MA DEMANDE */}
                <div className="show_hide_layout orientationH spaceBetween center demandes_link">
                     <div className="w100 orientationH spaceBetween center"><label className="label">FAIRE MA DEMANDE</label></div>
                    <div className="orientationH ">
                        <Link href="#new_demande">
                            <a onClick={()=>setShow_hide2(true)}> <div className="button full">DEMANDE EN LIGNE</div></a>
                        </Link>
                        <Link href="/">
                            <a> <div className="button full">PRENDRE RENDEZ-VOUS AVEC UN CONSEILLER</div></a>
                        </Link>
                    </div>

                </div>

                {/* DEMANDE EN COURS */}
                <WrapListLayout
                    title= "DEMANDES EN COURS ..............."
                    linkForMore=""
                >
                    <div className="demande">
                        <label>CONSULTANT EN RECRUTEMENT</label>
                        <div>27/09/2021</div>
                        <div>RECRUTÉ : ............</div>
                    </div>
                </WrapListLayout>
                

                {/*MES DEMANDE*/}
                <WrapListLayout
                    title= "DERNIÈRES DEMANDES "
                    linkForMore=""
                >
                    <div className="demande">
                        <label>CONSULTANT EN RECRUTEMENT</label>
                        <div>27/09/2021</div>
                        <div>RECRUTÉ : Albert ANSHTINE</div>
                    </div>
                        
                    <div className="more orientationV center">
                        <Link  href="#new_demande">
                            <a className="center orientationV" onClick={()=>setShow_hide2(true)} >
                                <div className="more_btn center">+</div>
                                Ajouter un poste
                            </a>
                        </Link>
                    </div>
                </WrapListLayout>
                
                {/* NOUVELLE DEMANDE FORMULAIRE */}
                <ShowOrHideLayout
                    title = "NOUVELLE OFFRE D'EMPLOIE"
                    show_hide = {show_hide2}
                    callback = {(e)=>setShow_hide2(e)}
                >
                    <div id="new_demande">
                        <div className="new_demande underline orientationH spaceBetween w100">
                            {/* CHAMPS DU FORMULAIRE */}
                            <div className="form_new_post orientationV">
                                <br></br>
                                <div className=" register_todo w100 orientationH spaceBetween center">
                                    <div className="w100 orientationH spaceBetween center">
                                        <label>Intitule du poste :</label>
                                        <input type="text" name="ent_name" required onChange={(e)=>{setJobTitle(e.target.value)}}/>
                                    </div>
                                </div>

                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Pays :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobCountry(e.target.value)}}>
                                            <option>--Pays--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Departement :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobDepartment(e.target.value)}}>
                                            <option>--Departement--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Diplôme requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredGrade(e.target.value)}}>
                                            <option>--Choix--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Niveau d'étude requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredLevel(e.target.value)}}>
                                            <option>--Choix--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Expérience requise :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredExperience(e.target.value)}}>
                                            <option>--Choix--</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            {/* CHAMPS DU FICHIERS */}
                            <div className="orientationV">
                                <br></br>
                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Fiche de poste :</label>
                                    <input type="file"  name="avatar" accept="image/png, image/jpeg"/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en pdf:</label>
                                    <input type="file"  name="avatar" accept="image/png, image/jpeg, application/pdf" required onChange={(e)=>{setJobPresentationPDF(e.target.value)}}/>
                                </div>
                                
                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en video :</label>
                                    <input type="file"  name="avatar" accept="image/png, image/jpeg" required onChange={(e)=>{setJobPresentationVideo(e.target.value)}}/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation de l'entreprise en pdf :</label>
                                    <input type="file"  name="avatar" accept="image/png, image/jpeg"/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation de l'entreprise en video :</label>
                                    <input type="file"  name="avatar" accept="image/png, image/jpeg"/>
                                </div>

                            </div>

                            {/* CALENDRIER */}
                            <div className="calendrier orientationV">
                                <br></br>
                                <div>Merci de choisir un créneau de RDV afin de finaliser votre demande</div>

                                <Agenda/>
                            </div>

                        </div>
                        <div className="orientationH spaceBetween fromRight "><div className="button full mbem" onClick={(e)=>{newJobPosting(e)}}>VALIDER</div></div>

                    </div>

                </ShowOrHideLayout>
               
                   

                
            </main>

            {/*---------------*/}
            <Footer/>

        </div>
    )
}

export async function getStaticProps() {

    const user_id=25;
    const info = await fetch("http://localhost:3080/getCompanyInfo",{user_id:user_id})
    const company_info = await info.json()

    if(company_info.company_id){

        const fillededJobs = await fetch("http://localhost:3080/getCompanyInfo",[company_info.company_id])
        const unFilledJobs = await fetch("http://localhost:3080/getCompanyInfo",[company_info.company_id])

        const company_fillededJobs = await fillededJobs.json()
        const company_unFilledJobs = await unFilledJobs.json()

        return {
            props: {
                data:{
                    company_info:company_info,
                    company_unFilledJobs:company_unFilledJobs,
                    company_fillededJobs:company_fillededJobs,
                }
            }, // will be passed to the page component as props
        }
        

    }else {

        return{
            props: {
                data:{
                    company_info:[],
                    company_unFilledJobs:[],
                    company_fillededJobs:[],
                }
            }
        }
    }

}