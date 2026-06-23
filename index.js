//afficher les noms et adresses
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await response.json();

  for (oneUser of userList) {
    console.log(
      "NOM : " +
        oneUser.name +
        " ; " +
        "RUE : " +
        oneUser.address.street +
        " ; " +
        "CODE POSTAL : " +
        oneUser.address.zipcode +
        " ; " +
        "VILLE : " +
        oneUser.address.city,
    );
  }
}

//retourne un tableau de chaînes de caractères contenant les noms complets ("Prénom Nom") des utilisateurs
async function getUsersName() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const nameList = await response.json();
//déclaration du tableau
  const users = [];
//push les name dans le tableau
  for (oneName of nameList) {
    users.push(oneName.name)
  }

  console.log(users);
  return users
  

}

//rechercher les utilisateurs par email
//email en paramètre pour effectuer la recherche
async function searchEmail(email) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const emailList = await response.json();
 
//comparaison de l'eamil passé en paramètre avec les éléments de la liste et affichage de la correspondance
  for (OneEmail of emailList) {
    if (OneEmail.email === email) {
      console.log("l'email correspondant est : " + OneEmail.email);
    }
  }
    
}

//chercher les utilisateurs par leur nom d'utilisateur (username) incomplet
//username en paramètre pour effectuer la recherche
async function searchName(username) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const nameList = await response.json();
//utilisation de includes pour effectuer une recherche partielle
  for (OneName of nameList) {
    if (OneName.username.includes(username)) {
      console.log("Username recherché : " + OneName.username);
    }
  }
}

getUsers();
getUsersName();
searchEmail("Shanna@melissa.tv");
searchName("aman")
