
## Ecosia Assignment

#### Dependencies
The project uses the following dependencies
1. [Docker](https://www.docker.com/)
2. [Minikube](https://minikube.sigs.k8s.io/docs/)


#### How to setup the project
- Run the command below to enable minikube ingress addon
   ```
     minikube addons enable ingress
    ```
 - Edit your hosts file and add your minikube ip along with local.ecosia.org domain name
   ```
   <minikube ip> local.ecosia.org
   ```

   > If you are on Mac or Linux the hosts file is location in /etc/hosts directory

- Clone the repository and cd into the ecosia-exercise directory
- Run deploy.sh script to build and deployed the application in Minikube
	```
	./deploy.sh
	```
You can access the application on  your browser 
```
  http://local.ecosia.org:30036/tree
```
   Or via terminal
   ```
   curl <MINIKUBE_IP_ADDRESS>:30036/tree -H Host:local.ecosia.org
  ```