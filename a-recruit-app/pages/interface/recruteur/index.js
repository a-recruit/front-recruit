import React ,{useState,useEffect,Component}from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import ShowOrHideLayout from '../../../components/layouts/show_hide_layout'
import WrapListLayout from '../../../components/layouts/wrap_list_layout'
import Agenda from '../../../components/others/agenda'
import Axios from 'axios'


export default function recruteur({data}) {

    const diplomes = ['CAP', 'BEP', 'BAC', 'BTS/DUT', 'Licence', 'Master1', 'Master2', 'Doctorat'];
    const niveauEtudes = ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'BAC+6', 'BAC+7', 'BAC+8'];
    const experience = ['débutant', '1 an à 2 ans', '2 ans à 3 ans', '3 ans à 4 ans', '4 ans à 5 ans' , '5 ans et plus (Senior)'];

    // console.log(data)

    //Variables des formulaires

    const company_id=2;
    const [company_name,setCompanyName]=useState(data.company_info.company_name);
    const [company_nationality, setCompanyNationality]=useState(data.company_info.company_nationality);
    const [company_representative_status, setCompanyRepresentativeStatus]=useState(data.company_info.company_representative_status);
    const [company_rcs, setCompanyRcs]=useState(data.company_info.company_rcs);
    const [company_headquarters, setCompanyHeadquarters]=useState(data.company_info.company_headquarters);
    const [company_zip_code, setCompanyZipCode]=useState(data.company_info.company_zip_code);
    const [company_address, setCompanyAddress]=useState(data.company_info.company_address);
    const [company_department, setCompanyDepartment]=useState(data.company_info.company_department);
    const [company_phone_number, setCompanyPhoneNumber]=useState(data.company_info.company_phone_number);
    const [company_city, setCompanyCity]=useState(data.company_info.company_city);
    const [company_country, setCompanyCountry]=useState(data.company_info.company_country);
    const [is_partner, setIsPartner]=useState(data.company_info.is_partner);
    const [partner_type, setPartnerType]=useState(data.company_info.partner_type);
    const [consultant_id, setConsultantId]=useState(data.company_info.consultant_id);
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
    const [job_origin, setJobOrigin]=useState("test");
    const [job_statut, setJobStatut]=useState("available");
    const [job_contract_type, setJobContractType]=useState("CDI");

    //Verifier si les infos sur l'entreprise sont tous données
    var register_todo = "A TERMINER";

    if(company_name=== "false" || company_nationality=== "false" || company_phone_number=== "false" || company_headquarters=== "false" || company_address=== "false" || company_department=== "false" || company_city
       === "false" || company_rcs=== "false" || company_zip_code=== "false" || company_country=== "false" || company_representative_status==="false"){

            register_todo = "A TERMINER";

    }else{
        register_todo = "TERMINÉ";
    }

    let reloade=true;
    
    //Ancre 
    const [show_hide1, setShow_hide1] =useState("");
    const [show_hide2, setShow_hide2] =useState(false);

    //Allerte
    useEffect(()=>{

    },reloade)

    
    //Formumaire pour modifier ou finaliser les données sur l'entreprise
    const finalization = (e)=>{
        
       if(true){

           Axios.post('http://localhost:3080/updateCompanyInfo',{
                company_id:company_id,
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
                is_partner:is_partner,
                partner_type:partner_type,
                consultant_id:consultant_id

            }).then((resutlt)=>{
                
                if(!resutlt.data.err){
                    
                   
                }else {
                     setAlert("Une erreur s'est produite")
                }
            });
        }
        setShow_hide1(false)
        reloade = !reloade;

    }

    //Formulaire pour créer une nouvelle offre d'emploi
    const newJobPosting = (e)=>{

        if(!job_title || !job_contract_type || !job_country || !job_department || !job_required_grad || !job_required_level || !job_required_experience
            || !job_presentation_pdf || !job_presentation_video || !job_city || !job_zip_code  || !job_origin
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
                job_creator_id:company_id,
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

//Chargement des départements  et des villes :

    useEffect(()=>{

        if(data.company_info && data.company_info.company_country==="France"){
            Axios.get("https://geo.api.gouv.fr/departements")
            .then(async (reponse)=>{setDepartments(reponse.data)});
        }
    },[])

    const [departments,setDepartments] = useState([]);
    let cities =[];
    const  loadDepartment =  (coutry) =>  {
        if(coutry==="France" ){
            Axios.get("https://geo.api.gouv.fr/departements")
            .then(async (reponse)=>{setDepartments(reponse.data)});
        }
    }

    const loadCity = (code) => {

       Axios.get(`https://geo.api.gouv.fr/departements/${code}/communes`)
       .then((reponse)=>{villes = reponse.data})
       console.log({"villes" : villes})
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
                                <label>Nom de l'entreprise :</label>
                                <input placeholder={data.company_info.company_name ? data.company_info.company_name : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Pays :</label>
                                <select className="form_select" required onChange={(e)=>{setCompanyCountry(e.target.value);loadDepartment(e.target.value)}}>
                                    {data.europe_country.map((element, index) => {
                                        if(data.company_info.company_country && element.name===data.company_info.company_country){
                                            return <option className="option-selected" selected key={index} value={element.name}>{element.name}</option>
                                        }else{
                                            return <option key={index} value={element.name}>{element.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div> 
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Département :</label>
                                <select className="form_select" required onChange={(e)=>{setCompanyDepartment(e.target.value)}}>
                                <option>Selectionnez un departement</option>

                                    {departments.length!==0 ? 
                                        departments.map((element, index) => {
                                            if(data.company_info.company_department && element.nom===data.company_info.company_department){
                                                return <option className="option-selected" selected key={index}>{element.nom}</option>
                                            }else{
                                                return <option key={index}>{element.nom}</option>
                                            }
                                        })
                                    :                                
                                        <input placeholder={data.company_info.company_department? data.company_info.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
                                    }
                                </select>

                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Adresse :</label><input placeholder={data.company_info.company_address ? data.company_info.company_address : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyAddress(e.target.value)}}/>
                            </div>      
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Ville :</label><input placeholder={data.company_info.company_city ? data.company_info.company_city : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyCity(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Code postal :</label><input placeholder={data.company_info.company_zip_code ? data.company_info.company_zip_code : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyZipCode(e.target.value)}}/>
                            </div> 
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Nationalité de l'entreprise :</label>
                                <input placeholder={data.company_info.company_nationality? data.company_info.company_nationality: "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyNationality(e.target.value)}}/>
                            </div>      
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Siège social :</label><input placeholder={data.company_info.company_headquarters ? data.company_info.company_headquarters : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyHeadquarters(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>RCS + Ville :</label><input placeholder={data.company_info.company_rcs ? data.company_info.company_rcs : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyRcs(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Qualité du signataire :</label>
                                <input placeholder={data.company_info.company_representative_status ? data.company_info.company_representative_status : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyRepresentativeStatus(e.target.value)}}/>
                            </div>                         
                        </div>
                        <div className="register_todo w100 orientationH spaceBetween center">
                             <div className="w100 orientationH spaceBetween center">
                                <label>Tel :</label><input placeholder={data.company_info.company_phone_number ? data.company_info.company_phone_number : "..."} type="text" name="ent_name"  onChange={(e)=>{setCompanyPhoneNumber(e.target.value)}}/>
                            </div>
                            
                        </div>
                        
                        {
                        register_todo === "A TERMINER"?
                            <div className="orientationH spaceBetween fromRight ">
                                <input type="submit" value="VALIDER" className="button full mbem" onClick={(e)=>{finalization(e)}}/>
                            </div>
                        :     
                        <div className="orientationH spaceBetween fromRight ">
                            <input type="submit" value="MODIFIER" className="button full mbem" onClick={(e)=>{finalization(e)}}/>
                        </div>                 
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
                    {data.company_unFilledJobs.length!==0 ? data.company_unFilledJobs.map((job, index) => {
                        return (
                            <div className="demande" key={index}>
                                <label>{job.job_title}</label>
                                <div><label>Crée le :</label> {job.created_at}</div>
                                <div><label>Retenue  : </label>{" "+ job.job_hire}</div>
                            </div>
                        );
                    })
                    : null}
                    <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"unfilled"}}}>
                        <a>
                            <div className="show_more">voir plus {">>"}</div>
                        </a>
                    </Link>
                   
                   
                </WrapListLayout>
                

                {/*MES DEMANDE*/}
                <WrapListLayout
                    title= "DERNIÈRES DEMANDES "
                    linkForMore=""
                >
                   {data.company_fillededJobs.length!==0 ? data.company_fillededJobs.map((job, index) => {
                        return (
                            <div className="demande" key={index}>
                                <label>{job.job_title}</label>
                                <div><label>Crée le :</label> {job.created_at}</div>
                                <div><label>Retenue  : </label>{job.job_hire}</div>
                            </div>
                        );
                    })
                    : <div></div>}
                        
                    <div className="demande more orientationV center">
                        <Link  href="#new_demande">
                            <a className="center orientationV" onClick={()=>setShow_hide2(true)} >
                                <div className="more_btn center">+</div>
                                Ajouter un poste
                            </a>
                        </Link>
                    </div>
                    <Link  href={{pathname:"/interface/recruteur/allJobs",query:{dest:"filled"}}}>
                        <a>
                            <div className="show_more">voir plus {">>"}</div>
                        </a>
                    </Link>
                </WrapListLayout>
                
                {/* NOUVELLE DEMANDE FORMULAIRE */}
                <ShowOrHideLayout
                    title = "NOUVELLE OFFRE D'EMPLOI"
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
                                            {data.europe_country.map((element, index) => {
                                                return <option key={index} value={element.name}>{element.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Departement :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobDepartment(e.target.value)}}>
                                            <option>--Departement--</option>
                                            {departments.length!==0 ? 
                                                departments.map((element, index) => {
                                                    return <option key={index}>{element.nom}</option>
                                                })
                                            :                                
                                                <input placeholder={data.company_info.company_department? data.company_info.company_department : "..."}type="text" name="ent_name"  onChange={(e)=>{setCompanyDepartment(e.target.value)}}/> 
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Diplôme requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredGrade(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {diplomes.map(diplomes => (
                                                <option key={diplomes}>{diplomes}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Niveau d'étude requis :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredLevel(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {niveauEtudes.map(niveauEtudes => (
                                                <option key={niveauEtudes}>{niveauEtudes}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="register_todo w100 orientationH spaceBetween center">
                                     <div className="w100 orientationH spaceBetween center">
                                        <label>Expérience requise :</label>
                                        <select className="form_select" required onChange={(e)=>{setJobRequiredExperience(e.target.value)}}>
                                            <option>--Choix--</option>
                                            {experience.map(experience => (
                                                 <option key={experience}>{experience}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            {/* CHAMPS DU FICHIERS */}
                            <div className="orientationV">
                                <br></br>
                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Fiche de poste :</label>
                                    <input type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel"/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en pdf:</label>
                                    <input type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel" required onChange={(e)=>{setJobPresentationPDF(e.target.value)}}/>
                                </div>
                                
                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation du poste en video :</label>
                                    <input type="file"  name="avatar" accept="video/mp4,video/x-m4v,video/*" required onChange={(e)=>{setJobPresentationVideo(e.target.value)}}/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation de l'entreprise en pdf :</label>
                                    <input type="file"  name="avatar" accept="application/pdf,application/vnd.ms-excel"/>
                                </div>

                                <div className=" files w100 orientationV spaceBetween ">
                                    <label>Présentation de l'entreprise en video :</label>
                                    <input type="file"  name="avatar" accept="video/mp4,video/x-m4v,video/*"/>
                                </div>

                            </div>

                            {/* CALENDRIER */}
                            <div className="calendrier orientationV">
                                <br></br>
                                <div>Merci de choisir un créneau de RDV afin de finaliser votre demande</div>

                                <Agenda/>
                            </div>

                        </div>
                        <div className="orientationH spaceBetween fromRight ">
                            <input className="button full mbem" type="submit" value="VALIDER" onClick={(e)=>{newJobPosting(e)}}/>
                        </div>

                    </div>

                </ShowOrHideLayout>
               
                   

                
            </main>

            {/*---------------*/}
            <Footer/>

        </div>
    )
}

export async function getStaticProps() {

    let europe_country = [];
    const company_id=2
    var company_info = []
    var company_fillededJobs = []
    var company_unFilledJobs = []
  
    ///Chargement des données régionnaux pour les formulaires

    await Axios.get("https://restcountries.eu/rest/v2/region/europe?fields=name", {europe : europe_country})
    .then(async (reponse)=>{europe_country = await reponse.data})


    ///Chargement des donnéés concernant l'utilisateur

    await Axios.post("http://localhost:3080/getCompanyInfo",{company_id:company_id }).
    then(async (reponse)=>{company_info= await reponse.data})


    if(company_info.company_id){

        await Axios.post("http://localhost:3080/getUnFillededJobLimit4",{company_id:company_id }).
        then(async (reponse)=>{company_unFilledJobs= await reponse.data})
        await Axios.post("http://localhost:3080/getFillededJobLimit4",{company_id:company_id }).
        then(async (reponse)=>{company_fillededJobs= await reponse.data})

        return {
            props: {
                data:{
                    company_info:company_info,
                    company_unFilledJobs:company_unFilledJobs,
                    company_fillededJobs:company_fillededJobs,
                    europe_country:europe_country,
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
                    europe_country : [],
                }
            }
        }
    }

}