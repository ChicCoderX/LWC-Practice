import { LightningElement } from 'lwc';
import abc from '@salesforce/resourceUrl/VaishPicture'
export default class UserProfileCard extends LightningElement {
    profilePicture = abc;
    name = 'Vaishnavi AK';
    designation = 'Salesforce Developer';
    dob = '29 December 1997';
    email = 'vaishnaviaak@gmail.com';
}