import { Client, Account} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66cd3469003a08fe13af');

export  const account = new  Account (client);

export default client;