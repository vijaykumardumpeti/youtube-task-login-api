

// function isValidEmail(email):
//     if email does not contain '@':
//         return false

//     // Split the email into username, domain, and extension
//     parts = split email by '@'
//     username = parts[0]
//     domainAndExtension = parts[1]

//     if username contains spaces or username is empty:
//         return false

//     if domainAndExtension does not contain '.':
//         return false

//     // Split the domainAndExtension into domain and extension
//     domainAndExtensionParts = split domainAndExtension by '.'
//     domain = domainAndExtensionParts[0]
//     extension = domainAndExtensionParts[1]

//     if domain contains spaces or domain is empty:
//         return false

//     if extension contains spaces or extension is empty:
//         return false

//     return true


// const valiEmailFormat = ()=>{

//     if("@" in email){
//         const arrayOfStrings = email.split("@")
//         const userName = arrayOfStrings[0]
//         const domainAndExtension = arrayOfStrings[1]
//         if(userName === "" || userName === " "){
//             return false
//         }
//         if("." in domainAndExtension){
//             const domainAndExtension = domainAndExtension.split(".")
//             const domain = domainAndExtension[0]
//             const extension = domainAndExtension[1]

//             if(domain === "" || domain === " " && extension === "" || extension === " "){
//                 return false
//             }else{
//                 return true
//             }
//         }else{
//             return false
//         }
//     }else{
//         return false
//     }

// }

 const valiEmailFormat = (email)=>{
    if (email.includes('@') === false) {
        return false;
      }
    
      const [username, domainAndExtension] = email.split('@');
    
      if (username.trim() === '') {
        return false;
      }
    
      if (domainAndExtension.includes('.') === false) {
        return false;
      }
    
      const [domain, extension] = domainAndExtension.split('.');
    
      if (domain.trim() === '' || extension.trim() === '') {
        return false;
      }
    
      return true;
}

  module.exports = valiEmailFormat;
//   // Test the function
//   const email1 = 'test@example.com';
//   const email2 = 'invalid_email';
//   const email3 = 'another@';
//   const email4 = 'domain@.com';
//   const email5 = 'no_spaces@example.com';
  
//   console.log(valiEmailFormat(email1)); // true
//   console.log(valiEmailFormat(email2)); // false
//   console.log(valiEmailFormat(email3)); // false
//   console.log(valiEmailFormat(email4)); // false
//   console.log(valiEmailFormat(email5)); // true
  
