# projet-cantine

## 3.1.    PRESENTATION DE L'ENTREPRISE
La société Stone Education est un organisme de formation professionnel diplômant reconnu par l'état qui accueille de nombreux stagiaires.
Actuellement, l'entreprise prend les commandes de repas du midi de façon manuelle. Les étudiants doivent se déplacer le matin pour passer leur commande. Ou bien, venir directement à l’heure du midi pour récupérer un plat.
Afin de simplifier et améliorer ce système, l'entreprise souhaite se doter d'une application simple de gestion des commandes entièrement informatisée permettant de diminuer le temps d’attente pour chaque client.
##3.2.    EXIGENCES FONCTIONNELLES
- Toute personne pourra s’enregistrer dans le système à partir du moment où elle peut accéder à l’application. Ceci implique donc les stagiaires, les professeurs, des personnes de passages (membres de jury).
- Un utilisateur peut s’authentifier sur l’application puis :
Accéder à son compte client, où il peut modifier l’ensemble de ses informations (au minimum son adresse email et son mot de passe)
Commander son plat
Consulter ses commandes en cours.
Consulter sa cagnotte (qu’il aura rempli de manière manuelle auprès de la cantinière)
Si sa cagnotte est créditée, il pourra passer commande pour la journée courante
- Un utilisateur qui n’est pas authentifié peut
Consulter le menu de la semaine qui lui affiche pour chaque jour les plats qu’il peut commander
- Une fonction de réinitialisation du mot de passe doit-être proposée en entrant son adresse email sur la page de login. Un renvoi d’un mot de passe généré aléatoirement par mail sera effectué par le système.



- L’utilisateur se connecte à l'application via un ordinateur ou un mobile (desktop, laptop, smartphone) en utilisant son adresse email et son mot de passe. Une fois connecté si sa cagnotte est créditée alors il pourra passer commande. Le passage de la commande nécessite d’être connecté, mais pas le fait de consulter les plats. Donc, même si il n’est pas connecté, il peut choisir son plat, mais la validation de la commande ne pourra se faire que si l’utilisateur se connecte et si sa cagnotte n’est pas vide. Le cas échéant, un message l’informe de créer un compte et/ou d’aller créditer sa cagnotte auprès de la cantinière.
- Le système permet de commander ses plats le jour même et uniquement si la cagnotte est créditée. Les commandes doivent être réalisées avant 10h30.
- La cantinière est la personne qui gère la cantine, elle devra pouvoir :
Accéder à son compte utilisateur qui a des droits spécifiques.
Créer modifier les menus / plats disponibles pour les dates souhaitées
Consulter les commandes réalisées pour une journée donnée
Annuler une commande. Dans ce cas, la cagnotte sera re-crédité et un email sera envoyé à l’utilisateur qui a passé la commande.
Créditer / débiter un compte utilisateur. Pour rappel la cagnotte ne pourra se remplir que si l’utilisateur passe voir physiquement la cantinière pour y placer de l’argent. Elle sera débitée automatiquement lors de la commande. En cas de problème de commande, la cantinière doit pouvoir re-créditer la cagnotte.
- La cantinière doit avoir accès à un récapitulatif synthétique des commandes prises pour le jour même. En cliquant sur un jour donné, elle doit avoir le détail des plats commandés et l’identité des stagiaires ayant passé la commande.
- Le système doit être ergonomique et être utilisable sans manuel d'utilisation et sans formation préalable. Privilégier les aides contextuelles intégrées à l'application au besoin (pop in, roll over…).
