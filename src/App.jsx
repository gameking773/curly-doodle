import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Mail, Linkedin, Code, Database, Server, Gamepad2, Layout } from 'lucide-react';
import './App.css';

export default function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="portfolio-container">
            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-content">
                    <a href="#accueil" className="logo-link">
                        <img src="/vite.png" alt="Logo EK" className="nav-logo-img" />
                    </a>
                    <ul className="nav-links">
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#projets">Réalisations</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section id="accueil" className="hero">
                <h1>KHALIL <span>EL KADIRI</span></h1>
                <h2>Étudiant en BUT Informatique à l'IUT de Reims</h2>
                <p>
                    Passionné par la <strong>gestion de données et le développement back-end</strong>.
                    Positionné sur l'administration et l'exploitation des données, je recherche un stage dès le 7 avril 2026.
                </p>
                <div className="hero-btns">
                    <a href="#projets" className="btn btn-primary">Découvrir mes projets</a>
                    <a href="https://github.com/gameking773" target="_blank" className="btn btn-dark"><Github size={20}/> GitHub</a>
                </div>
                <div className="hero-btns">
                    <a
                        href="/CV_Khalil_El_Kadiri.pdf"
                        download="CV_Khalil_El_Kadiri.pdf"
                        className="btn btn-white"
                    >
                        Télécharger mon CV (PDF)
                    </a>
                </div>
            </section>

            {/* SECTION PROFIL / QUI SUIS-JE */}
            <section id="profil" className="section">
                <h2 className="section-title">Profil & Formation</h2>
                <div className="card profil-card">
                    <p>
                        Actuellement en 2ème année de BUT Informatique (parcours AIGED), je me spécialise dans le développement de solutions robustes et l'optimisation de flux de données. Mon mandat en tant que président de l'association Bin'Harry, m'a permis d'allier rigueur technique et gestion d'équipe.
                    </p>
                    <div className="formation-tags">
                        <span>      BUT Informatique - IUT de Reims</span>
                    </div>
                </div>
            </section>

            {/* COMPÉTENCES (Basées sur ton CV) */}
            <section id="competences" className="section bg-dark">
                <h2 className="section-title">Compétences</h2>
                <div className="grid-competences">
                    <div className="card">
                        <Database className="icon" size={40} />
                        <h3>Base de données</h3>
                        <p><strong>SQL / PLSQL :</strong> Expert en conception et exploitation de bases de données.</p>
                    </div>
                    <div className="card">
                        <Code className="icon" size={40} />
                        <h3>Développement</h3>
                        <p><strong>PHP, Symfony & API Platform:</strong> Développement de contenus dynamiques et maintenance.</p>
                        <p><strong>Python & JS (React, Vite, Next JS) :</strong> Automatisation et logique applicative.</p>
                    </div>
                    <div className="card">
                        <Gamepad2 className="icon" size={40} />
                        <h3>Moteur & Outils</h3>
                        <p><strong>Godot :</strong> Création de mécaniques de jeu complètes.</p>
                        <p><strong>Docker :</strong> Maîtrise du déploiement conteneurisé </p>
                        <p><strong>Git :</strong> Maîtrise du versioning collaboratif.</p>
                        <p><strong>PowerBI :</strong> Visualisation de données </p>
                    </div>
                </div>
            </section>

            {/* PROJETS (Tes vraies réalisations) */}
            <section id="projets" className="section">
                <h2 className="section-title">Projets</h2>

                {/* Projet 4: CoLive Clone */}
                <div className="project-card">
                    <div className="project-img"><Layout size={50} /></div>
                    <div className="project-info">
                        <span className="tags">Projet Académique | PHP - Symfony - Bootstrap - Doctrine</span>
                        <h3>CoLive</h3>
                        <p>Développement d'un clône de CoLive implémentant le framework Symfony, Bootstrap et une base de données. </p>
                        <p><strong>Preuve technique :</strong> Conception complète de la base de données et réalisation avec Doctrine, intégration de contenus dynamiques avec le framework Symfony. Style fait avec Bootstrap</p>
                        <a href="https://github.com/gameking773/colive-clone" className="github-link">Voir le dépôt</a>
                    </div>
                </div>

                {/* Projet 3: GameJam IV */}
                <div className="project-card">
                    <div className="project-img"><Gamepad2 size={50} /></div>
                    <div className="project-info">
                        <span className="tags">Projet Personnel | Godot - Git</span>
                        <h3>Gamejam IV</h3>
                        <p>Développement d'un jeu en plusieurs vue (de côté et du dessus) en 1 semaine tout en respectant le thème imposé.</p>
                        <p><strong>Preuve technique :</strong> Implémentation des mécaniques de collision, des animations, des sons, des menus et de changement de caméras.</p>
                        <a href="https://github.com/gameking773/down-side" className="github-link">Voir le dépôt</a>
                    </div>
                </div>

                {/* Projet 1: Bin'Harry */}
                <div className="project-card">
                    <div className="project-img"><Layout size={50} /></div>
                    <div className="project-info">
                        <span className="tags">Projet Personnel | PHP - MySQL - Git</span>
                        <h3>Site Internet Association Bin'Harry</h3>
                        <p><strong>Le défi :</strong> Créer une vitrine responsive et dynamique pour l'association étudiante.</p>
                        <p><strong>Preuve technique :</strong> Conception complète de la base de données, intégration de contenus dynamiques.</p>
                        <a href="https://github.com/gameking773/binharry_website" className="github-link">Voir le dépôt</a>
                    </div>
                </div>

                {/* Projet 2: GameJam III */}
                <div className="project-card">
                    <div className="project-img"><Gamepad2 size={50} /></div>
                    <div className="project-info">
                        <span className="tags">Projet Personnel | Godot - Git</span>
                        <h3>Gamejam III Rebirth</h3>
                        <p><strong>Le défi :</strong> Développer un sidescroller complet en équipe en seulement 3 jours tout en respectant le thème imposé.</p>
                        <p><strong>Preuve technique :</strong> Implémentation des mécaniques de collision, des animations, des sons et des menus ainsi qu'une gestion de projet collaborativement via Git.</p>
                        <a href="https://github.com/gameking773/FightOrFlightGameJamV" className="github-link">Voir le dépôt</a>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section bg-dark text-white">
                <div className="contact-container">
                    <h2>Contact</h2>
                    <form className="contact-form" action="https://formspree.io/f/ton_id" method="POST">
                        <input type="text" name="name" placeholder="Votre Nom" required />
                        <input type="email" name="email" placeholder="Votre Email" required />
                        <textarea name="message" placeholder="Votre message" rows="5" required></textarea>
                        <button type="submit" className="btn btn-primary">Envoyer la demande</button>
                    </form>
                    <br/>
                    <div className="socials">
                        <a href="mailto:elkadirikhalil2006@gmail.com"><Mail size={30} /></a>
                        <a href="https://github.com/gameking773"><Github size={30} /></a>
                        <a href="https://www.linkedin.com/in/khalil-el-kadiri-7991a0366/"><Linkedin size={30} /></a>
                    </div>
                </div>
            </section>

            {/* FOOTER & MENTIONS */}
            <footer className="footer">
                <p>© 2026 Khalil El Kadiri | Étudiant BUT Informatique Reims</p>
                <p className="mentions">
                    Hébergé par Vercel. Aucune donnée personnelle n'est collectée en dehors du formulaire de contact.
                    Conformément au RGPD, vous disposez d'un droit d'accès à vos données envoyées par mail.
                </p>
            </footer>

            {showScrollTop && (
                <button onClick={scrollToTop} className="btn-scroll">
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
}