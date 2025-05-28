import { LightningElement, track } from 'lwc';
const STRING_CONSTANTS = {
    INPUT_BOX_PLACEHOLDER: 'Type here...'
};
export default class HomeInputBox extends LightningElement {
    @track inputList = [];

    STRING_CONST = STRING_CONSTANTS;

    handleClick() {
        const ele = this.template.querySelector('input');
        if (ele) {
            if (ele.value !== '' || ele.value !== undefined) {
                this.inputList.push(ele.value);
                ele.value = '';
            }
            console.log('got the element: ' + this.inputList);
        }
    }
}
