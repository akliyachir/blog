import "./02_AboutUs.css";
import SocialCluster from "../1_Navigation/2_SideBarMainMenu/1_SocialCluster/SocialCluster";
import { FaRegSmile } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>Qui Sommes-nous ?</h1>
      <p>Nous, c’est moi ! </p>
      <p>
        Fatigué de poiroter à longueur de jour sur internet, à la recherche d’un
        job décent, j’entame la construction de cette plateforme, pour mettre en
        avant mes talents de programmeur et de rédacteur généraliste. Les deux
        disciplines me passionnent énormément. Et aussi, parce que j’ai
        énormément de temps à tuer, vue que travaille déjà… dans un kiosque ! De
        nuit ! Dans un quartier calme !
      </p>
      <p>
        Alors, comme si de rien n’était, je copie ci-dessous mon curriculum, en
        guise de lorum ipsum, le temps de mieux structurer le site et d'y
        revenir après.
      </p>
      <p>Tout en bas se trouvent mes coordonnés.</p>
      <p>Voilà, voilà...</p>
      <h2>EXPERIENCE PROFESSIONNELLE</h2>
      <p>NET DUO SA | BUENOS AIRES | du 02/2023 au 05/2023</p>
      <h4>OPERATEUR TELEMARKETING</h4>
      <p>
        Affilié au marché français et la partie francophone du canada, à opérer
        des appels téléphoniques afin de clôturer des ventes, parcourant avec
        nos clients potentiels les avantages du produits, nos points forts
        vis-à-vis de la concurrence, et répondre aux questionnements éventuels.
        Assurer l’accompagnement du client durant toutes les étapes nécessaires
        à la procédure de vente. Et via le CRM (Customer Relationship Management
        system), en plus du calendrier, maintenir à jour un rapport détaillé des
        interactions avec nos prospects, à quelle étape nous en sommes, les
        observations utiles, et les rendez-vous prévus
      </p>
      <p>PIXEL RELIEF | ALGER | du 01/2016 au 12/2021</p>
      <h4>MANAGER ET MONTEUR EN CHEF</h4>
      <p>
        Prestataire de services audiovisuels spécialisé dans la couverture
        d’événements, ciblant les organisateurs de foires et salons
        professionnels. Durant les cinq années d’exercice, nous avons gagnés la
        confiance d’un certain nombre d’acteurs influant du secteur, publics et
        privés, locaux et internationaux, pour la production des matériaux
        promotionnels, sous différents formats, selon la plateforme de
        publication. Parmi nos clients : Comexposium, Promosalon, la Safex, et
        le ministère des travaux public.
      </p>
      <p>
        DIFFERENTES ENTREPRISES DE PRODUCTION |ALGER | du 01/2011 au 12/2015
      </p>
      <h4>ASSISTANT REALISATEUR, ASSISTANT DE PRODUCTION, CHARGE DE CASTING</h4>
      <p>
        Occupant différentes fonctions, selon le projet de tournage, qu’il soit
        télévisuel ou de cinéma. Hormis un certain niveau de connaissance lié au
        secteur, l’activité exigeait une bonne maîtrise de l’outil informatique,
        y compris la suite office, à savoir Word, Excel, PowerPoint et Outlook.
      </p>
      <h2>FORMATION</h2>
      <p>
        ISMAS - Institut Supérieur des Métiers des Arts du Spectacle et de
        l’Audiovisuel | ALGER | de 2007 à 12/2010
      </p>
      <h4>
        Diplôme D’Etudes Universitaires Appliquées (DEUA) en Assistanat
        Réalisation.
      </h4>
      <p>LYCEE DE BAB EZZOUAR | ALGER | 2005</p>
      <h4>Bac science de la nature et vie</h4>
      <h2>LANGUES</h2>
      <h4>Français</h4>
      <p> langue maternelle.</p>
      <h4>Arabe</h4>
      <p>langue maternelle.</p>
      <h4>Anglais</h4>
      <p>niveau avancé à l’oral comme à l’écrit.</p>
      <h4>Espagnol</h4>
      <p>niveau avancé intermédiaire</p>
      <h1>Coordonnés</h1>
      <p>akli.yachir@gmail.com | +5491122669984</p>
      <p>Colegiales, Zona norte, Buenos Aires, Argentina</p>
      <SocialCluster />
      <h2>
        <FaRegSmile /> Listo!!
      </h2>
    </div>
  );
}
