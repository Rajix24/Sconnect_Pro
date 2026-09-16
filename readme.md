#Contexte du projet

Vous intégrez le pôle Solutions Publiques de CivicTech Enterprise, une société de services numériques spécialisée dans l'ingénierie logicielle pour les collectivités territoriales, en tant que développeur full stack JavaScript.
La Direction des Sports et de la Vie Associative de la métropole gère un parc de 12 complexes sportifs mis à disposition de plus de 40 associations sportives. Chaque saison, plus de 6 000 usagers s'inscrivent aux activités municipales et associatives.
Pour garantir des performances optimales, éliminer la dette technique et s'affranchir des boîtes noires logicielles (frameworks lourds ou ORMs masquant les requêtes réelles), la Direction des Systèmes d'Information (DSI) de la métropole a émis une consigne d'architecture stricte : le noyau applicatif doit être développé en Node.js pur avec le driver natif PostgreSQL.
Vous devez livrer un prototype industriel capable de gérer :
Les conflits d'occupation des salles et le respect des jauges de sécurité ERP ;
La tarification complexe (résidents, fratrie, quotient familial, Pass'Sport) ;
Les catégories d'âge fédérales et la validité légale des certificats médicaux ;
La gestion d'une file d'attente priorisée avec repêchage automatique sous 48h ;
# How to run the porject:

npm run rajix 
    => to start server 
npm run migrate 
    => create tables is database
npm run seeder
    => Create fake data in database
database is contonaires in docekr 
