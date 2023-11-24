# CESI-WORKSHOP
### Dedicated to CESI members; 
### About the workshops 

Ce référentiel Git contient un ensemble de fichiers pour la construction et le déploiement d'une application Go simple utilisant Docker et Kubernetes avec un équilibreur de charge de service.

### Structure du Répertoire
* **main.go**: Le fichier source principal de l'application Go qui imprime un message simple.
* **Dockerfile**: Le fichier Docker permettant de construire une image Docker pour l'application Go.
* **tutorial.yml**: manifest file for kube deployment :
  * k8s-deployment.yaml: Le fichier de manifeste Kubernetes décrivant le déploiement de l'application.
  * k8s-service.yaml: Le fichier de manifeste Kubernetes décrivant le service de type équilibreur de charge.

### Construction de l'Image Docker
Pour construire l'image Docker, utilisez la commande suivante:

```
docker build -t nom-de-votre-image:tag .
```
Assurez-vous de remplacer nom-de-votre-image et tag par les valeurs que vous souhaitez attribuer à votre image.

### Exécution du Conteneur Docker Localement
Vous pouvez exécuter le conteneur Docker localement avec la commande suivante:

```
docker run -p 8080:8080 nom-de-votre-image:tag
```

### Déploiement sur Kubernetes
Avant de déployer sur Kubernetes, assurez-vous d'avoir un cluster Kubernetes configuré et kubectl installé.

Déployez l'application avec la commande suivante:

```
kubectl apply -f tutorial.yaml
```

Cela créera les déploiements et les pods nécessaires pour exécuter l'application. Et Déployez le service, Cela créera le service avec un équilibreur de charge, permettant l'accès à l'application.
