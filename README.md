# EXERCICE BLOG-OC-ANGULAR

http://exercices.openclassrooms.com/assessment/731?id=4668271&slug=developpez-des-applications-web-avec-angular&login=8584208&tk=0e3a721bc12a6aa1ad455b0403ff295a&sbd=2016-02-01&sbdtk=fa78d6dd3126b956265a25af9b322d55

Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "don't love it".  Chaque post aura la forme suivante : 

post: {
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
} 
Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge.

 Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.

 En termes de structure :

votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent
votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu
chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template
les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent
Voici un exemple de mise en page :  

Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !

Quelques astuces : 
Pensez aux différents types de databinding — comment passer des données d'un component à un autre, comment afficher des données dans le template et comment réagir à un événement venant du template
Pensez aux directives structurelles comme *ngFor, et également aux directives par attribut comme ngClass
Pensez aux Pipes pour la transformation de données, notamment pour la date
Livrables
Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt dans le champs de commentaires. Le projet doit être fonctionnel une fois que le projet a été cloné et que la commande npm install a été saisie à la racine.
