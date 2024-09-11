import SignIN from '@/app/(auth)/sign-in';
import { Avatars } from 'appwrite';
import { Account, Client } from 'react-native-appwrite';

export const Config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '66e1fb7c000ec1ab6e69',
    databaseID: '66e1fd530017547618db',
    userCollectionId : '66e1fd8e00074a878b53',
     videosCollectionId : '66e1fe59002bb118d961',
     storageId:'66e201b300215ecebdb6'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(Config.endpoint) 
    .setProject(Config.projectId) 
    .setPlatform(Config.platform) 

    const account = new Account(client);
    const avatars  = new Avatars(client);
    const databases =  new Databases (client);
;




export const createUser= async (email, password, username) =>{
   try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )
    if (!newAccount) throw Error;

  const  avatarUrl = Avatars.gitinitials (username)
  await SignIN(email, password)
  const  newUser =  await
   } catch (error) {
    console.log(error);
    throw new  Error(error);
    
   }
}
export async function SignIN(email, password){
    try {
        const session  = await  account.createEmailSession(email, password)
        return session; 
    } catch (error) {
        throw new  Error (error);
    }

}

