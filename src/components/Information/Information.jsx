import { TbBrandTwitter, TbBrandGithub, TbBrandYoutube, TbMail, TbBrandDiscord, TbBrandInstagram } from 'react-icons/tb'
import { BsTriangleFill, BsCircleFill, BsMoonFill } from 'react-icons/bs'
import { AiFillStop } from 'react-icons/ai'
import { FaDotCircle, FaChess } from 'react-icons/fa'
import './Information.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { motion } from 'framer-motion'; 
import config from '../../config.json' 
import { useLanyard } from "react-use-lanyard";
import Spotify from '../Spotify/Spotify'


const Information = (props) => {

    const { data } = props
    
    const lanyard = useLanyard({
		userId: config.discord_user,
	});

    const discordStatus = (status) => {
        if(status === "dnd") {
            return ( 
                <Tippy content="do not disturb">
                    <div className="infos" >
                        <AiFillStop width={50} style={{ transform: "rotate(-45deg)", backgroundColor: "var(--bg)", color: "#f74343", width: "50px", height: "50px"}}/>
                    </div>
                </Tippy>
            )
        } else if(status === "online") {
            return ( 
                <Tippy content="online">
                    <div className="infos" >
                        <BsCircleFill width={50} style={{ backgroundColor: "var(--bg)", color: "#37d451", width: "50px", height: "50px"}}/>
                    </div>
                </Tippy>
            )
        } else if(status === "idle") {
            return ( 
                <Tippy content="idle">
                    <div className="infos" >
                        <BsMoonFill width={50} style={{ backgroundColor: "var(--bg)", color: "#f1b634", width: "50px", height: "50px", transform: "scale(-1, 1)"}}/>
                    </div>
                </Tippy>
            )
        } else {
            return ( 
                <Tippy content="offline">
                    <div className="infos" >
                        <FaDotCircle width={50} style={{ backgroundColor: "var(--bg)", color: "#636363", width: "50px", height: "50px"}}/>
                    </div>
                </Tippy>
            )
        }
    }

    return (
        <>
            <motion.div id="wrapper" animate={{ scale: '1', transition: { duration: 1, } }}>
                <div className='container'>
                    <div className='readme_container'>
                        <div className="text">
                            <div className='name'>
                                <h1 className="name">Maxi Schäfer
                                    <Tippy content="Also known as: “gokimax“" placement='bottom' style={{ marginLeft: "10px"}}>
                                        <a><BsTriangleFill size={10} style={{ rotate: "180deg", marginLeft: "10px"}}/></a>
                                    </Tippy>
                                </h1>
                            </div>
                            <div className='readMe'>
                                <div className='info'>Hi there <span>👋🏼</span> I'm Maxi, a <span style={{ textDecoration: "underline" }}>17</span> year old Student from Germany.</div>
                                <div className='info'>Self-taught Developer</div>
                                <div className='info'>“Never play to win a pawn while your development is yet unfinished.” - <a href='https://de.wikipedia.org/wiki/Aaron_Nimzowitsch' target='_blank'>Aron Nimzowitsch</a></div>
                            </div>

                            <br/>

                            <ul className="socials">
                                <li>
                                    <Tippy content='Twitter' placement='bottom'>
                                        <a className='Twitter' href="https://twitter.com/gokimax_x" target="_blank" rel="noreferrer"><TbBrandTwitter /></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='TryHackMe' placement='bottom'>
                                        <a className='TryHackMe' href="https://tryhackme.com/p/Maxi.Schaefer" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5a4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035a4.488 4.488 0 0 0-1.68-.69a5.223 5.223 0 0 1 5.096-4.104a5.221 5.221 0 0 1 5.174 4.57a4.489 4.489 0 0 0-.488.305a.625.625 0 1 0 .731 1.013a3.245 3.245 0 0 1 1.912-.616a3.278 3.278 0 0 1 3.203 2.61a.625.625 0 0 0 1.225-.251a4.533 4.533 0 0 0-4.428-3.61a4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0m5.192 10.64a.925.925 0 0 0-.462.108a.913.913 0 0 0-.313.29a1.27 1.27 0 0 0-.175.427a2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517c.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11c.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431c.036-.164.054-.336.054-.517c0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426a.901.901 0 0 0-.309-.291a.917.917 0 0 0-.46-.108m6.486 0a.925.925 0 0 0-.462.108a.913.913 0 0 0-.313.29a1.27 1.27 0 0 0-.175.427a2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517c.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11c.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431c.036-.164.054-.336.054-.517c0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426a.901.901 0 0 0-.308-.291a.916.916 0 0 0-.461-.108m-8.537.068l-.84.618l.313.43l.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618l.314.43l.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084c.05.057.087.127.114.21c.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21a.243.243 0 0 1-.193.085a.248.248 0 0 1-.195-.086a.584.584 0 0 1-.118-.209a1.245 1.245 0 0 1-.056-.27a2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209a.25.25 0 0 1 .195-.084m6.486 0c.08 0 .144.028.193.084c.05.057.087.127.114.21c.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21a.243.243 0 0 1-.193.085a.249.249 0 0 1-.195-.086a.581.581 0 0 1-.117-.209a1.245 1.245 0 0 1-.056-.27a2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209a.25.25 0 0 1 .195-.084m-2.191 3.51a.93.93 0 0 0-.463.109a.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516c.036.164.094.308.175.432a.91.91 0 0 0 .312.296a.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296a1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516c0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426a.89.89 0 0 0-.309-.291a.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617l.314.43l.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617l.314.43l.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617l.313.43l.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532a1.28 1.28 0 0 1-.053.27a.585.585 0 0 1-.114.21a.244.244 0 0 1-.193.085a.25.25 0 0 1-.196-.085a.589.589 0 0 1-.117-.21a1.245 1.245 0 0 1-.056-.27a2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209a.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078a.661.661 0 0 0-.227.211a.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313a.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08a.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31a.658.658 0 0 0-.225-.21a.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078a.661.661 0 0 0-.226.211a.907.907 0 0 0-.127.31a1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215c.093.053.205.08.336.08a.655.655 0 0 0 .334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748a.94.94 0 0 0-.126-.31a.657.657 0 0 0-.224-.21a.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078a.661.661 0 0 0-.226.211a.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215c.093.053.205.08.336.08c.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31a.657.657 0 0 0-.224-.21a.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448l.227.311l.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448l.227.311l.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448l.228.311l.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151a.96.96 0 0 1 .04.196a1.932 1.932 0 0 1 0 .386a.954.954 0 0 1-.04.197a.421.421 0 0 1-.083.152a.176.176 0 0 1-.14.061a.18.18 0 0 1-.141-.06a.427.427 0 0 1-.085-.153a.887.887 0 0 1-.041-.197a1.96 1.96 0 0 1 0-.386a.893.893 0 0 1 .04-.196a.42.42 0 0 1 .086-.151a.181.181 0 0 1 .141-.062m3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151a.94.94 0 0 1 .04.196a1.906 1.906 0 0 1 0 .386a.93.93 0 0 1-.04.197a.421.421 0 0 1-.082.152a.176.176 0 0 1-.14.061a.18.18 0 0 1-.141-.06a.42.42 0 0 1-.086-.153a.846.846 0 0 1-.04-.197a1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196a.42.42 0 0 1 .086-.151a.182.182 0 0 1 .141-.062m5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151a.92.92 0 0 1 .04.196a1.963 1.963 0 0 1 0 .386a.943.943 0 0 1-.04.197a.421.421 0 0 1-.082.152a.177.177 0 0 1-.14.061a.18.18 0 0 1-.142-.06a.437.437 0 0 1-.085-.153a.95.95 0 0 1-.04-.197a1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .04-.196a.47.47 0 0 1 .086-.151a.181.181 0 0 1 .142-.062m-1.684 1.814a.675.675 0 0 0-.336.079a.66.66 0 0 0-.227.21a.91.91 0 0 0-.127.31a1.731 1.731 0 0 0 0 .748a.939.939 0 0 0 .127.314c.059.09.134.162.227.215c.093.053.205.08.336.08a.66.66 0 0 0 .334-.08a.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747a.928.928 0 0 0-.125-.31a.65.65 0 0 0-.224-.211a.668.668 0 0 0-.334-.079m3.063 0a.676.676 0 0 0-.336.079a.664.664 0 0 0-.227.21a.906.906 0 0 0-.127.31a1.74 1.74 0 0 0 0 .748a.936.936 0 0 0 .127.314a.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08a.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747a.928.928 0 0 0-.126-.31a.65.65 0 0 0-.223-.211a.666.666 0 0 0-.334-.079m-1.545.05l-.611.448l.228.312l.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152a.91.91 0 0 1 .04.195a1.966 1.966 0 0 1 0 .387a.951.951 0 0 1-.04.197a.421.421 0 0 1-.082.152a.177.177 0 0 1-.14.06a.18.18 0 0 1-.142-.06a.428.428 0 0 1-.085-.152a.914.914 0 0 1-.04-.197a1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .142-.061m3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152a.94.94 0 0 1 .04.195a1.91 1.91 0 0 1 0 .387a.93.93 0 0 1-.04.197a.422.422 0 0 1-.083.152a.175.175 0 0 1-.14.06a.18.18 0 0 1-.141-.06a.423.423 0 0 1-.085-.152a.907.907 0 0 1-.04-.197a1.95 1.95 0 0 1 0-.387a.915.915 0 0 1 .04-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .142-.061m-9.713.185a.465.465 0 0 0-.232.055a.456.456 0 0 0-.157.146a.627.627 0 0 0-.089.215a1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.459.459 0 0 0 .232.056c.09 0 .168-.02.231-.056a.45.45 0 0 0 .156-.149a.67.67 0 0 0 .087-.217a1.218 1.218 0 0 0 0-.518a.647.647 0 0 0-.087-.215a.448.448 0 0 0-.156-.146a.458.458 0 0 0-.23-.055zm1.052.035l-.423.31l.158.217l.24-.185v.944h.303v-1.286zm-1.052.224c.04 0 .073.014.097.042a.284.284 0 0 1 .057.105a.69.69 0 0 1 .028.136c.004.049.007.092.007.133c0 .04-.003.086-.007.135a.684.684 0 0 1-.028.136a.285.285 0 0 1-.057.105a.123.123 0 0 1-.097.043a.125.125 0 0 1-.098-.043a.298.298 0 0 1-.059-.105a.612.612 0 0 1-.028-.136a1.39 1.39 0 0 1 0-.268a.62.62 0 0 1 .028-.136a.297.297 0 0 1 .06-.105a.125.125 0 0 1 .097-.042m3.775 1.394a.463.463 0 0 0-.232.054a.452.452 0 0 0-.157.146a.621.621 0 0 0-.088.214a1.19 1.19 0 0 0 0 .519a.641.641 0 0 0 .088.217a.46.46 0 0 0 .157.15a.458.458 0 0 0 .232.054a.454.454 0 0 0 .232-.055a.45.45 0 0 0 .155-.149a.664.664 0 0 0 .087-.217a1.189 1.189 0 0 0 0-.519a.642.642 0 0 0-.087-.214a.446.446 0 0 0-.155-.146a.459.459 0 0 0-.232-.054m1.052.034l-.423.31l.158.216l.24-.185v.945h.303V22.68zm-1.052.223c.04 0 .073.014.098.043a.3.3 0 0 1 .057.105a.643.643 0 0 1 .027.135a1.31 1.31 0 0 1 0 .268a.654.654 0 0 1-.027.137a.307.307 0 0 1-.057.105a.124.124 0 0 1-.098.042a.125.125 0 0 1-.098-.042a.293.293 0 0 1-.059-.105a.618.618 0 0 1-.028-.137a1.364 1.364 0 0 1 0-.268a.612.612 0 0 1 .028-.135a.287.287 0 0 1 .06-.105a.123.123 0 0 1 .097-.043"/></svg></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='Instagram' placement='bottom'>
                                        <a className='Instagram' href="https://www.instagram.com/da.maaxi/" target="_blank" rel="noreferrer"><TbBrandInstagram /></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='Github' placement='bottom'>
                                        <a className='Github' href="https://github.com/maxi-schaefer" target="_blank" rel="noreferrer"><TbBrandGithub /></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='Youtube' placement='bottom'>
                                        <a className='Youtube' href="https://www.youtube.com/@gokimax" target="_blank" rel="noreferrer"><TbBrandYoutube /></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='Email' placement='bottom'>
                                        <a className='Email' href="mailto:schaefer.maxi0910@icloud.com"><TbMail /></a>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content='Discord' placement='bottom'>
                                        <a className='Discord' href={`https://discordapp.com/users/${config.discord_user}`} target="_blank" rel="noreferrer"><TbBrandDiscord /></a>
                                    </Tippy>
                                </li>
                            </ul>
                        </div>
                        <div className="image">
                            {
                                !lanyard.isValidating && (discordStatus(lanyard.data.data.discord_status))
                            }
                            <img src={data.avatar_url} alt="" />
                        </div>
                    </div>
                    {
                        !lanyard.isValidating && (<Spotify data={lanyard.data.data.spotify} listening_to_spotify={lanyard.data.data.listening_to_spotify}/>)
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Information