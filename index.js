const express = require('express');
var html_to_pdf = require('html-pdf-node'); //Import the express dependency
const fs = require('fs')
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

let options = { format: 'A4' };

let props = {
    first_name: "Shereen",
    second_name: "Azzaz"
}

let age = 1;

const getContent = (age) =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
   
        <script src="https://unpkg.com/phosphor-icons"></script>
        <script>
            document.querySelector('.stars').style.color = red; 
        </script>
       
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Staatliches&family=Urbanist&display=swap');
        </style>
        
        <style>
        h1 , h2 , h3{
            padding: 0;
            margin: 0;
        }
        p{
            padding: 0;
            margin: 0;
        }
        /* start general*/
        .email-template .divider{
            
            border: 2px solid rgba(145, 145, 145, 0.3); 
        }
        .email-template  .title{
            font-family: Urbanist;
            font-size: 30px;
            font-weight: bold;
            color: #404040;
            margin-bottom: 10px;
        }
        .email-template  .icon-desc{
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
        .email-template .date .icon-desc .icon{
            color: #fff;
        }
        .email-template .date  .icon-desc .desc{
            font-family: Urbanist;
            color: #404040;
            font-size: 15px;
            font-weight: 500;
        }
        .email-template  .degree {
            font-family: Urbanist;
            color: #404040;
        }
        .email-template  .degree span{
            color: #3a3b81 ;
            font-weight: 500;
        }
        .email-template  .work-info{
            display: flex;
            flex-direction: row;
        }
        .email-template  .work-info .company-name{
            margin-left: 15px;
        }
        .email-template .work-info .icon-desc .icon{
            color: #fff !important;
        }
        .email-template  .work-info .icon-desc  .desc{
            color: #fff !important;
        }
        /* end general */
       
        .email-template {
            padding:20px
        }
        .email-template .info{
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }
        .email-template .info .personal-info{
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
        }
        .email-template .info .personal-info .name-job{
            display: flex;
            align-self: flex-start;
            flex-basis: 90%;
            flex-direction: column;
        }
        .email-template .info .personal-info .name-job .name{
            font-family: Urbanist;
            font-size: 40px;
            font-weight: bold;
            color: #404040;
        }
        .email-template .info .personal-info .name-job .job{
            font-family: Urbanist;
            font-size: 20px;
            font-weight: 500;
            color: #fff;
        }
        .email-template .info .personal-info .links{
            display: flex;
            flex-basis: 50%;
            justify-content: flex-end;
            gap: 18px;
            height: 72px;
            margin-top: 10px;
            color: #3A3B81 !important;
        }
        .email-template .info .personal-info .links .icon{
            font-size: 30px;
            cursor: pointer;
         }
        
        .email-template .info .bio{
            font-family: Urbanist;
            font-size: 20px;
            font-weight: 500;
            color: #fff;
        }
       
        .email-template .details-contact{
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
        }
        .email-template .details-contact .basic-details{
            display: flex;
            flex-basis: 50%;
            flex-direction: column;
        }
        .email-template .details-contact .contact-info{
            display: flex;
            flex-basis: 50%;
            flex-direction: column;
        }
       
        .email-template .details-contact  .icon-desc{
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
        .email-template .details-contact .icon{
            color: #404040;
        }
        .email-template .details-contact  .desc{
            color: #fff;
            font-family: Urbanist;
            font-size: 15px;
            font-weight: 500;
        }
        .email-template .details-contact .contact-info .contact-links{
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        .email-template .details-contact .contact-info .contact-links button{
            background-color: transparent;
            padding: 7px;
            border-radius: 4px;
            border: solid 1px #919191;
            color: #404040;
        }
        .email-template .details-contact .contact-info .contact-links button .icon{
            margin-right: 7px;
            color: #404040;
        }
    
        
        .email-template .work-experience{
            display: flex;
            flex-direction: column;
        }
        .email-template .work-experience .container {
            margin-top: 10px;
        }
        .email-template .work-experience .container:nth-child(2){
            margin-top: 0px;
        }
        .email-template .work-experience .container{
            margin-top: 25px;
        }
     
       
        .email-template .work-experience,
        .education .bio{
            font-family: Urbanist;
            font-size: 15px;
            font-weight: 500;
            color: #fff !important;
        }
        .email-template .education{
            display: flex;
            flex-direction: column;
        }
        .skills .rating-container{
            display: flex;
        }
        .skills .rating-container{
            display: flex;
            flex-direction: row;
            width: 250px;
            padding: 8px;
            border-radius: 8px;
            background-color: #3a3b81;
            color: #fff;
            gap: 22px;
          }
          .skills  .rating-container .rating{
            display: flex;
            align-items: center;
            color: #fff;
          }
          .first-star{
            display: none;
          }

        </style>
      
    </head>
    <body>
        <div class="email-template ">
                <section class="info">
                <div class="personal-info">
                    <div class="name-job">
                            <h1 class="name">{age}</h1>
                            <p class="job">UX Writer</p>
                    </div>
                    <div class="links">
                        <div>
                        <i class="ph-facebook-logo icon"></i>
                        </div>
                        <div>
                            <i class="ph-twitter-logo icon"></i>
                        </div>
                        <div>
                            <i class="ph-linkedin-logo icon"></i>
                        </div>
                        <div>
                            <i class="ph-behance-logo icon"></i>
                        </div>
                        <div>
                            <i class="ph-instagram-logo icon"></i>
                        </div>   
                    </div>
                </div>
                <div class="bio">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                </div>
            </section>
            <hr class="divider"/>


            <section class="details-contact">
            <div class="basic-details">
                <div>
                    <h2 class="title">Basic Details</h2>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <i class="ph-map-pin"></i>
                    </div>
                    <div class="desc">
                        <p>Egypt, Giza, 6th of October</p>
                    </div>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <i class="ph-gender-male"></i>
                    </div>
                    <div class="desc">
                        <p>Male</p>
                    </div>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <i class="ph-cake"></i>
                    </div>
                    <div class="desc">
                        <p>23 years old</p>
                    </div>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <i class="ph-globe-hemisphere-west"></i>
                    </div>
                    <div class="desc">
                        <p>Egyptian, Saudi</p>
                    </div>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_34" data-name="Group 34" transform="translate(0.133 0.133)">
                              <rect id="Rectangle_50" data-name="Rectangle 50" width="20" height="20" transform="translate(-0.133 -0.133)" fill="none" />
                              <g id="XMLID_1160_" transform="translate(1.583 -53.932)">
                                <g id="Group_33" data-name="Group 33" transform="translate(0 57.5)">
                                  <path id="Path_2" data-name="Path 2" d="M16.491,64.014A5.2,5.2,0,0,0,15.469,61.7l.145-.053a1.208,1.208,0,0,0,.718-1.544l-.363-1a2.414,2.414,0,0,0-3.1-1.448l-1,.364a1.208,1.208,0,0,0-.718,1.544l.053.147a5.192,5.192,0,0,0-2.926,1.036A5.193,5.193,0,0,0,5.358,59.7l.053-.147a1.208,1.208,0,0,0-.718-1.544l-1-.364A2.414,2.414,0,0,0,.6,59.1l-.363,1a1.208,1.208,0,0,0,.718,1.544L1.1,61.7a5.216,5.216,0,0,0-.613,5.4,5.167,5.167,0,0,0,7.8,1.963,5.184,5.184,0,0,0,8.207-5.043Zm-.808-3.68a.516.516,0,0,1-.306.66l-2.136.781-.024.008.7-1.516a2.731,2.731,0,0,0,1.733-.014ZM13.107,58.3a1.724,1.724,0,0,1,2.213,1.035l.1.272a2.049,2.049,0,0,1-1.524-.087h0a2.064,2.064,0,0,1-1.051-1.121Zm-1,.364.079-.029a2.748,2.748,0,0,0,1.1,1.344l-.7,1.515-.008-.022-.778-2.147A.516.516,0,0,1,12.112,58.66Zm-7.735-.029.079.029a.516.516,0,0,1,.306.66l-.778,2.147-.008.022-.7-1.515A2.747,2.747,0,0,0,4.377,58.631Zm-3.129.7A1.724,1.724,0,0,1,3.46,58.3l.268.1A2.069,2.069,0,0,1,1.149,59.6Zm-.363,1,.03-.081a2.731,2.731,0,0,0,1.733.014l.7,1.516-.024-.008-2.136-.781A.516.516,0,0,1,.884,60.335Zm6.189,8.649A4.477,4.477,0,0,1,1.112,66.8a4.508,4.508,0,0,1,.673-4.857l1.3.477A1.2,1.2,0,0,0,4.633,61.7l.476-1.313a4.448,4.448,0,0,1,2.642.809,5.217,5.217,0,0,0,0,7.394A4.491,4.491,0,0,1,7.073,68.984Zm.251-5.991a4.532,4.532,0,0,1,.96-1.353,4.535,4.535,0,0,1,0,6.511A4.53,4.53,0,0,1,7.324,62.993ZM15.455,66.8a4.477,4.477,0,0,1-6.636,1.789,5.217,5.217,0,0,0,0-7.393,4.453,4.453,0,0,1,2.642-.809l.476,1.313a1.2,1.2,0,0,0,1.543.721l1.3-.477A4.5,4.5,0,0,1,15.455,66.8Z" transform="translate(0 -57.5)" fill="#404040" />
                                </g>
                              </g>
                            </g>
                          </svg>
                    </div>
                    <div class="desc">
                        <p>Married</p>
                    </div>
                </div>
                <div class="icon-desc">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_35" data-name="Group 35" transform="translate(0.133 0.133)">
                              <rect id="Rectangle_50" data-name="Rectangle 50" width="20" height="20" transform="translate(-0.133 -0.133)" fill="none" />
                              <g id="officer-svgrepo-com" transform="translate(-2.41 -0.272)">
                                <path id="Path_3" data-name="Path 3" d="M10.229,29.23s-.259-.251-.435-.208C7.909,29.485,6,30.429,6,31.85v2.392H18.555V31.85c0-1.421-1.909-2.365-3.794-2.828-.175-.043-.435.208-.435.208a18.636,18.636,0,0,1-2.207,1.176C12.114,30.406,10.229,29.23,10.229,29.23Zm4.369.455-.272-.455.272.455Zm0,0h0l.01.017h0Zm.01.017h0l.075.126h0l0,0-.017.01-.064.038-.229.135c-.19.111-.448.26-.713.41s-.543.3-.775.419c-.115.058-.228.112-.327.154-.049.021-.1.042-.16.06a.916.916,0,0,1-.273.045,1.285,1.285,0,0,1-.243-.044l-.052-.022-.034-.017-.021-.011L11.755,31l-.022-.013-.063-.039-.216-.134-.65-.4-.649-.4-.214-.133-.06-.037-.016-.01,0,0h0l.072-.116h0l-.072.116L9.8,29.782l-.034-.033a7.628,7.628,0,0,0-2.188.909c-.636.421-.878.828-.878,1.191v1.695h11.16V31.85c0-.363-.242-.771-.878-1.191a7.628,7.628,0,0,0-2.188-.909l-.039.038-.07.042Zm-4.676,0h0l.021-.034h0Zm.021-.034.275-.441-.275.441Z" transform="translate(0 -16.952)" fill="#404040" fill-rule="evenodd" />
                                <path id="Path_4" data-name="Path 4" d="M12,37.348A.349.349,0,0,1,12.349,37h1.744a.349.349,0,1,1,0,.7H12.349A.349.349,0,0,1,12,37.348Z" transform="translate(-3.908 -22.151)" fill="#404040" />
                                <path id="Path_5" data-name="Path 5" d="M30.977,34.052a.071.071,0,0,1,.138,0l.2.636a.073.073,0,0,0,.069.052h.639a.076.076,0,0,1,.043.137l-.517.393a.078.078,0,0,0-.026.085l.2.636a.073.073,0,0,1-.111.085l-.517-.393a.07.07,0,0,0-.085,0l-.517.393a.073.073,0,0,1-.111-.085l.2-.636a.078.078,0,0,0-.026-.085l-.517-.393a.076.076,0,0,1,.043-.137h.639a.073.073,0,0,0,.069-.052Z" transform="translate(-15.63 -20.197)" fill="#404040" />
                                <path id="Path_6" data-name="Path 6" d="M31.13,34.1l-.015-.047a.071.071,0,0,0-.138,0l-.2.636a.073.073,0,0,1-.069.052h-.639a.076.076,0,0,0-.043.137l.517.393a.078.078,0,0,1,.026.085l-.2.636a.073.073,0,0,0,.111.085L31,35.684a.07.07,0,0,1,.085,0l.517.393a.073.073,0,0,0,.111-.085l-.2-.636a.078.078,0,0,1,.026-.085l.517-.393a.076.076,0,0,0-.043-.137h-.639a.073.073,0,0,1-.069-.052Z" transform="translate(-15.63 -20.197)" fill="#404040" fill-rule="evenodd" />
                                <path id="Path_7" data-name="Path 7" d="M15,15.7V15h.7v.7a2.441,2.441,0,1,0,4.882,0V15h.7v.7A3.139,3.139,0,1,1,15,15.7Z" transform="translate(-5.861 -7.823)" fill="#404040" fill-rule="evenodd" />
                                <path id="Path_8" data-name="Path 8" d="M16.234,3l-.055.344L16.125,3l.055-.009Zm3.436,3.586.026-.041c.057-.09.134-.218.216-.38a4.77,4.77,0,0,0,.447-1.333.677.677,0,0,0-.225-.6,1.943,1.943,0,0,0-.508-.334,8.094,8.094,0,0,0-1.388-.477c-.5-.131-1-.237-1.374-.309-.188-.036-.345-.064-.455-.084L16.281,3,16.247,3h-.013l-.055.344L16.125,3h-.012L16.078,3l-.128.022c-.11.019-.266.047-.453.083-.373.072-.872.177-1.369.309a8.118,8.118,0,0,0-1.387.477,1.976,1.976,0,0,0-.509.333A.687.687,0,0,0,12,4.82a4.321,4.321,0,0,0,.44,1.344,4.174,4.174,0,0,0,.224.383l.027.04a1.073,1.073,0,0,0,.025.186,1.306,1.306,0,0,0,.382.654c.458.443,1.356.8,3.084.8s2.626-.353,3.084-.8a1.306,1.306,0,0,0,.382-.654A1.074,1.074,0,0,0,19.671,6.583Zm-.805.245H13.494a.808.808,0,0,0,.087.1c.263.254.935.6,2.6.6s2.336-.345,2.6-.6A.808.808,0,0,0,18.866,6.828Zm-5.642-.7h5.908c.044-.071.1-.167.159-.284a4.084,4.084,0,0,0,.375-1.1l-.019-.02a1.287,1.287,0,0,0-.324-.2,7.443,7.443,0,0,0-1.262-.43c-.478-.126-.962-.228-1.328-.3-.183-.035-.335-.063-.442-.081l-.111-.019-.11.019c-.106.018-.258.046-.44.081-.365.07-.847.172-1.324.3a7.466,7.466,0,0,0-1.261.43,1.318,1.318,0,0,0-.328.206.316.316,0,0,0-.023.025,3.634,3.634,0,0,0,.364,1.09C13.119,5.963,13.178,6.06,13.223,6.131Zm-.54-1.363v0Zm6.994,0v0Z" transform="translate(-3.902 0)" fill="#404040" fill-rule="evenodd" />
                                <path id="Path_9" data-name="Path 9" d="M23.244,6.465A3.226,3.226,0,0,1,22.372,6a3.226,3.226,0,0,1-.872.465s.174,1.279.872,1.279S23.244,6.465,23.244,6.465Z" transform="translate(-10.094 -1.962)" fill="#404040" />
                              </g>
                            </g>
                        </svg>
                    </div>
                    <div class="desc">
                        <p>Completed</p>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="container">

                    <div>
                        <h2 class="title">Contact Info & Links</h2>
                    </div>
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-at"></i>
                        </div>
                        <div class="desc">
                            <p>davis.libby@gmail.com</p>
                        </div>
                    </div>
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-phone"></i>
                        </div>
                        <div class="desc">
                            <p>+20 167 232 2388</p>
                        </div>
                    </div>
                    <div class="contact-links">
                        <div>
                            <button><i class="ph-link icon"></i>Vimeo</button>
                        </div>
                        <div>
                            <button><i class="ph-link icon"></i>Lorem</button>
                        </div>
                        <div>
                            <button><i class="ph-link icon"></i>Lorem</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr class="divider"/>
        <section class="work-experience">
            <div>
                <h2 class="title">Work Experience</h2>
            </div>
            <div class="container">
                <div class="date">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-calendar-blank"></i>
                        </div>
                        <div class="desc">
                            <p>Sep 2010 - Present</p>
                        </div>
                    </div>
                </div>
                <div class="degree">
                    <p>Bachelor degree in <span>Computer Science</span> </p>
                </div>
                <div class="work-info">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-briefcase"></i>
                        </div>
                        <div class="desc">
                            <p>Part-Time</p>
                        </div>
                    </div>
                    <div class="icon-desc company-name">
                        <div class="icon">
                            <i class="ph-buildings"></i>
                        </div>
                        <div class="desc">
                            <p>Software House</p>
                        </div>
                    </div>
                 </div>
                <div class="bio">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="date">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-calendar-blank"></i>
                        </div>
                        <div class="desc">
                            <p>Sep 2010 - Present</p>
                        </div>
                    </div>
                </div>
                <div class="degree">
                    <p>Bachelor degree in <span>Computer Science</span> </p>
                </div>
                <div class="work-info">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-briefcase"></i>
                        </div>
                        <div class="desc">
                            <p>Part-Time</p>
                        </div>
                    </div>
                    <div class="icon-desc company-name">
                        <div class="icon">
                            <i class="ph-buildings"></i>
                        </div>
                        <div class="desc">
                            <p>Software House</p>
                        </div>
                    </div>
                </div>
                <div class="bio">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
        <hr class="divider"/>

        <section class="education">
            <div>
                <h2 class="title">Education</h2>
            </div>
            <div class="container">
                <div class="date">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-calendar-blank"></i>
                        </div>
                        <div class="desc">
                            <p>Sep 2010 - Present</p>
                        </div>
                    </div>
                </div>
                <div class="degree">
                    <p>Bachelor degree in <span>Computer Science</span> </p>
                </div>
                <div class="work-info">
                    <div class="icon-desc">
                        <div class="icon">
                            <i class="ph-buildings"></i>
                        </div>
                        <div class="desc">
                            <p>Cairo University</p>
                        </div>
                    </div>
                    <div class="icon-desc company-name">
                        <div class="icon">
                            <i class="ph-graduation-cap"></i>
                        </div>
                        <div class="desc">
                            <p>A+ / 97 - 100 / 4.0</p>
                        </div>
                    </div>
                </div>
                <div class="bio">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
        <hr class="divider"/>
        <section class="skills">
            <div>
                <h2 class="title">Skills</h2>
            </div>
            <div class="rating-container">
                <div class="skill-name">
                    <p>Adobe Photoshop</p>
                    <p>3-5 Years</p>
                </div>
                <div class="rating">
                    <i class="rating__star ph-star-fill first-star"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__starph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                </div>    
            </div>
            <div class="rating-container">
                <div class="skill-name">
                    <p>Adobe Photoshop</p>
                    <p>3-5 Years</p>
                </div>
                <div class="rating">
                    <i class="rating__star ph-star-fill first-star"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__starph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                    <i class="rating__star ph-star-fill"></i>
                </div>    
            </div>
        </section>

        </div>
        <script>
            const ratingStars = [...document.getElementsByClassName("rating__star")]
            function executeRating(stars) {
                let i;

                stars.map((star) => {
                i = 1;
                    for (i; i >= 0; i--) {
                    if(i > 0){
                        stars[i].style.color = '#fff';
                    }
                    }
                });
            }
            executeRating(ratingStars);
        </script>
  
    </body>
    </html>` 
}

let file = { content: getContent() };

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here

    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
      console.log("PDF Buffer:-", pdfBuffer);
      fs.writeFileSync('some.pdf', pdfBuffer)
    });
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});