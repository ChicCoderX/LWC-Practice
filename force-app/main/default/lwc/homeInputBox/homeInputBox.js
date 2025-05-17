import { LightningElement, track } from 'lwc';

export default class HomeInputBox extends LightningElement {
    @track inputList = [];

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
